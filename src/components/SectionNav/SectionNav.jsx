import React from 'react';
import { formatHash } from '../../routing';
import './SectionNav.css';

const NAV_ITEMS = [
  { section: 'about', label: 'About' },
  { section: 'resume', label: 'Resume' },
  { section: 'portfolio', label: 'Portfolio' },
  { section: 'contact', label: 'Contact' },
];

/**
 * The nav shared by every section.
 *
 * Each entry is a real link to its route hash, so it can be opened in a new
 * tab, copied, or bookmarked. Plain left-clicks are handled in JS instead, which
 * lets the router manage the history entry and the scroll position; clicks with
 * a modifier key are left to the browser.
 */
const SectionNav = ({ activeSection, onNavigate }) => {
  const handleClick = (event, section) => {
    const isModifiedClick =
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
    if (isModifiedClick) return;

    event.preventDefault();
    onNavigate(section);
  };

  return (
    <div className="top-navigation">
      <nav aria-label="Sections">
        <ul>
          {NAV_ITEMS.map(({ section, label }) => {
            const isActive = section === activeSection;
            return (
              <li key={section}>
                <a
                  href={formatHash({ section })}
                  className={isActive ? 'active' : undefined}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(event) => handleClick(event, section)}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SectionNav;
