/**
 * Hash-based routing for the site.
 *
 * Hash routing (rather than path routing) is deliberate: the site is served as
 * static files from GitHub Pages, which cannot rewrite unknown paths back to
 * index.html. With hashes, every URL is shareable and survives a refresh
 * without any server configuration.
 *
 * Route shape: { section: 'about' | 'resume' | 'portfolio' | 'contact',
 *                project: string | null }
 *
 *   #/about                            -> { section: 'about',     project: null }
 *   #/portfolio                        -> { section: 'portfolio', project: null }
 *   #/portfolio/gomoku-project         -> { section: 'portfolio', project: 'gomoku-project' }
 */

export const SECTIONS = ['about', 'resume', 'portfolio', 'contact'];

export const DEFAULT_SECTION = 'about';

/** Only the portfolio section has nested project pages. */
const SECTIONS_WITH_PROJECTS = ['portfolio'];

/**
 * Parse a location hash into a route. Anything unrecognised falls back to the
 * default section, so a stale or hand-edited URL can never render a blank page.
 */
export function parseHash(hash) {
  const segments = String(hash || '')
    .replace(/^#/, '')
    .split('/')
    .filter(Boolean);

  const section = SECTIONS.includes(segments[0]) ? segments[0] : DEFAULT_SECTION;
  const project =
    SECTIONS_WITH_PROJECTS.includes(section) && segments[1] ? segments[1] : null;

  return { section, project };
}

/** Serialise a route back into a canonical location hash. */
export function formatHash(route) {
  const section = SECTIONS.includes(route?.section) ? route.section : DEFAULT_SECTION;
  const project = SECTIONS_WITH_PROJECTS.includes(section) ? route?.project : null;

  return project ? `#/${section}/${project}` : `#/${section}`;
}

export function isSameRoute(a, b) {
  return a?.section === b?.section && (a?.project ?? null) === (b?.project ?? null);
}
