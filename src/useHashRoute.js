import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { formatHash, isSameRoute, parseHash } from './routing';

/**
 * The element that actually scrolls depends on the breakpoint: on desktop the
 * shell is fixed and `.app-main` scrolls, on mobile the whole document scrolls.
 * Reading and writing both keeps the rest of the hook breakpoint-agnostic.
 */
const SCROLL_HOST_SELECTOR = '.app-main';

/** How long we keep re-applying a restored scroll position while images load. */
const SCROLL_RESTORE_FRAMES = 12;

function getScrollHost() {
  return document.querySelector(SCROLL_HOST_SELECTOR);
}

function readScrollTop() {
  const host = getScrollHost();
  if (host && host.scrollTop > 0) return host.scrollTop;
  return window.scrollY || document.documentElement.scrollTop || 0;
}

function applyScrollTop(top) {
  const host = getScrollHost();
  if (host) host.scrollTop = top;

  // GRProject.css sets `html { scroll-behavior: smooth }` globally, which would
  // otherwise animate every route change — you would watch the page you just
  // left scroll past. Jumping between pages should be instant; only in-page
  // anchor links should glide.
  try {
    window.scrollTo({ top, left: 0, behavior: 'instant' });
  } catch {
    // Browsers that predate the 'instant' keyword reject it outright.
    window.scrollTo(0, top);
  }
}

function readEntryIndex() {
  const index = window.history.state?.routeIndex;
  return Number.isInteger(index) ? index : 0;
}

/**
 * Drives the app from the location hash so the browser's Back/Forward buttons
 * (and the Android system back gesture) navigate between sections and project
 * pages instead of leaving the site.
 *
 * Returns:
 *   route    - the current { section, project }
 *   navigate - go to a route, pushing a history entry (or replacing one)
 *   goBack   - step back if the previous entry is the given fallback route,
 *              otherwise navigate to that fallback directly
 */
export default function useHashRoute() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash));

  const routeRef = useRef(route);
  routeRef.current = route;

  // Index of the history entry we are currently sitting on. Entry 0 is the one
  // the visitor landed on, so `index > 0` means there is in-app history behind us.
  const entryIndexRef = useRef(readEntryIndex());
  // history entry index -> hash, used to tell what the previous page actually was.
  const entryHashesRef = useRef(new Map());
  // history entry index -> scroll offset, so Back returns you where you were.
  const scrollOffsetsRef = useRef(new Map());
  // Scroll offset to apply once the next route has rendered.
  const pendingScrollRef = useRef(0);
  // Guards against handling the same location twice when a hash navigation
  // fires both `popstate` and `hashchange`.
  const handledHashRef = useRef(formatHash(route));

  // Canonicalise the landing URL ("", "#", "#about", "#/bogus" -> "#/about") and
  // stamp it with an entry index, without adding a history entry of our own.
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      // We restore scroll ourselves; the browser's guess fights our layout.
      window.history.scrollRestoration = 'manual';
    }

    // Read the live location rather than the route captured at render time:
    // effects in children run first, so one of them (the unknown-project-slug
    // fallback) may already have corrected the URL by the time we get here.
    const canonicalHash = formatHash(parseHash(window.location.hash));
    const index = readEntryIndex();

    entryIndexRef.current = index;
    handledHashRef.current = canonicalHash;
    window.history.replaceState({ ...window.history.state, routeIndex: index }, '', canonicalHash);
    entryHashesRef.current.set(index, canonicalHash);
  }, []);

  const navigate = useCallback((nextRoute, { replace = false } = {}) => {
    const target = parseHash(formatHash(nextRoute));
    const targetHash = formatHash(target);

    if (isSameRoute(target, routeRef.current) && !replace) {
      // Re-selecting the current section: no new history entry, but scrolling
      // back to the top still makes the click feel like it did something.
      applyScrollTop(0);
      return;
    }

    scrollOffsetsRef.current.set(entryIndexRef.current, readScrollTop());

    const nextIndex = replace ? entryIndexRef.current : entryIndexRef.current + 1;
    window.history[replace ? 'replaceState' : 'pushState'](
      { routeIndex: nextIndex },
      '',
      targetHash
    );

    entryIndexRef.current = nextIndex;
    entryHashesRef.current.set(nextIndex, targetHash);
    handledHashRef.current = targetHash;
    pendingScrollRef.current = 0;
    setRoute(target);
  }, []);

  const goBack = useCallback(
    (fallbackRoute) => {
      const previousHash = entryHashesRef.current.get(entryIndexRef.current - 1);
      if (entryIndexRef.current > 0 && previousHash === formatHash(fallbackRoute)) {
        // The entry behind us is exactly where this button points, so reuse it:
        // history stays clean and the previous scroll position is restored.
        window.history.back();
        return;
      }
      navigate(fallbackRoute);
    },
    [navigate]
  );

  // Back, Forward, and hand-edited hashes all land here.
  useEffect(() => {
    const syncFromLocation = () => {
      const next = parseHash(window.location.hash);
      const nextHash = formatHash(next);
      if (handledHashRef.current === nextHash) return;
      handledHashRef.current = nextHash;

      const nextIndex = readEntryIndex();

      // A hash typed into the address bar can be valid-but-untidy ("#about") or
      // meaningless ("#/nonsense"). We render the route we parsed, so tidy the
      // address bar to match instead of leaving the two disagreeing.
      if (window.location.hash !== nextHash) {
        window.history.replaceState(
          { ...window.history.state, routeIndex: nextIndex },
          '',
          nextHash
        );
      }

      scrollOffsetsRef.current.set(entryIndexRef.current, readScrollTop());
      entryIndexRef.current = nextIndex;
      entryHashesRef.current.set(nextIndex, nextHash);
      pendingScrollRef.current = scrollOffsetsRef.current.get(nextIndex) ?? 0;

      setRoute((current) => (isSameRoute(current, next) ? current : next));
    };

    window.addEventListener('popstate', syncFromLocation);
    window.addEventListener('hashchange', syncFromLocation);
    return () => {
      window.removeEventListener('popstate', syncFromLocation);
      window.removeEventListener('hashchange', syncFromLocation);
    };
  }, []);

  // Apply the scroll offset for the route we just rendered.
  useLayoutEffect(() => {
    const target = pendingScrollRef.current;
    pendingScrollRef.current = 0;

    applyScrollTop(target);

    // The page keeps growing for a few frames after the first paint as images
    // settle, and the browser nudges the scroll offset to compensate. Re-apply
    // for a short while — and stop the moment the visitor takes over.
    let frame = 0;
    let rafId = requestAnimationFrame(function reapply() {
      applyScrollTop(target);
      if (++frame < SCROLL_RESTORE_FRAMES) rafId = requestAnimationFrame(reapply);
    });

    const stop = () => cancelAnimationFrame(rafId);
    const userEvents = ['wheel', 'touchstart', 'keydown', 'pointerdown'];
    userEvents.forEach((event) => window.addEventListener(event, stop, { passive: true }));

    return () => {
      cancelAnimationFrame(rafId);
      userEvents.forEach((event) => window.removeEventListener(event, stop));
    };
  }, [route]);

  return { route, navigate, goBack };
}
