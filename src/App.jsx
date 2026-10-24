import React, { useCallback, useEffect, useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import AboutSection from './components/sections/AboutSection/AboutSection'
import ResumeSection from './components/sections/ResumeSection/ResumeSection'
import PortfolioSection from './components/sections/PortfolioSection/PortfolioSection'
import ContactSection from './components/sections/ContactSection/ContactSection'
import useHashRoute from './useHashRoute'

export default function App() {
  const { route, navigate, goBack } = useHashRoute();
  // The theme switcher is currently disabled, so this only ever reads the stored
  // preference. Re-enabling it means adding the setter back and rendering
  // <ThemeToggle isDarkMode={isDarkMode} toggleTheme={...} /> in the shell below.
  const [isDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  /** Top navigation: jump to a section, leaving any open project behind. */
  const handleNavigate = useCallback(
    (section) => navigate({ section, project: null }),
    [navigate]
  );

  const handleOpenProject = useCallback(
    (project) => navigate({ section: 'portfolio', project }),
    [navigate]
  );

  const handleCloseProject = useCallback(
    (options) => {
      const portfolioRoute = { section: 'portfolio', project: null };
      if (options?.replace) {
        // Used when the URL names a project that does not exist: correct the
        // address bar in place rather than leaving a dead entry in the history.
        navigate(portfolioRoute, { replace: true });
        return;
      }
      goBack(portfolioRoute);
    },
    [navigate, goBack]
  );

  const renderActiveSection = () => {
    switch (route.section) {
      case 'resume':
        return <ResumeSection onNavigate={handleNavigate} />;
      case 'portfolio':
        return (
          <PortfolioSection
            onNavigate={handleNavigate}
            selectedProject={route.project}
            onOpenProject={handleOpenProject}
            onCloseProject={handleCloseProject}
          />
        );
      case 'contact':
        return <ContactSection onNavigate={handleNavigate} />;
      case 'about':
      default:
        return <AboutSection onNavigate={handleNavigate} />;
    }
  };

  return (
    // The section modifier lets CSS decide where the profile card belongs at
    // each breakpoint (beside the content on desktop, under it on mobile).
    <div className={`App App--${route.section}`}>
      <aside className="app-sidebar">
        <Sidebar />
      </aside>

      <main className="app-main">
        <div className="section-wrapper">{renderActiveSection()}</div>
      </main>
    </div>
  )
}
