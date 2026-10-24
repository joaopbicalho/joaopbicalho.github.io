import React, { useState, useEffect } from 'react';
import GRProject from '../GeneralRelativityProject/GRProject';
import RoboticArmProject from '../RoboticArmProject/RoboticArmProject';
import RobotControlProject from '../RobotControlProject/RobotControlProject';
// import TrashCompactorProject from '../TrashCompactorProject/TrashCompactorProject';
import MuonLifetimeProject from '../MuonLifetimeProject/MuonLifetimeProject';
import HighEnergyPhysicsProject from '../HighEnergyPhysicsProject/HighEnergyPhysicsProject';
import SuperconductorProject from '../SuperconductorProject/SuperconductorProject';
import ElectronSpinResonanceProject from '../ElectronSpinResonanceProject/ElectronSpinResonanceProject';
import ComptonCrossSectionProject from '../ComptonCrossSectionProject/ComptonCrossSectionProject';
import TruthSeekerNet from '../../TruthSeekerNet/TruthSeekerNet';
import MuseHeadbandReaderProject from '../MuseHeadbandReaderProject/MuseHeadbandReaderProject';
import MuseEEGProject from '../MuseEEGProject/MuseEEGProject';
import ChirpletThesis from '../AdaptiveChirpletTransformProject/AdaptiveChirpletTransformProject';
import GomokuAIProject from '../GomokuProject/GomokuProject';
import SemanticSimilarityProject from '../SemanticSimilarityProject/SemanticSimilarityProject';
import AerospaceProject from '../AerospaceSection/AerospaceProject'; // FIXED: Changed from AerospaceProject to AerospaceSection
import SectionNav from '../../SectionNav/SectionNav';
import { formatHash } from '../../../routing';
import './PortfolioSection.css';

/**
 * Detail page for each project slug. The slug is also the URL segment
 * (#/portfolio/<slug>), so every project page is directly linkable.
 */
const PROJECT_PAGES = {
  'gr-project': GRProject,
  'robotic-arm-project': RoboticArmProject,
  'robot-control-project': RobotControlProject,
  'muon-lifetime-project': MuonLifetimeProject,
  'high-energy-physics-project': HighEnergyPhysicsProject,
  'superconductor-project': SuperconductorProject,
  'electron-spin-resonance-project': ElectronSpinResonanceProject,
  'compton-cross-section-project': ComptonCrossSectionProject,
  'truthseeker-project': TruthSeekerNet,
  'muse-headband-reader-project': MuseHeadbandReaderProject,
  'muse-eeg-project': MuseEEGProject,
  'adaptive-chirplet-transform-project': ChirpletThesis,
  'gomoku-project': GomokuAIProject,
  'semantic-similarity-project': SemanticSimilarityProject,
  'aerospace-project': AerospaceProject,
};

const PortfolioSection = ({ onNavigate, selectedProject, onOpenProject, onCloseProject }) => {
  const [filter, setFilter] = useState('all');
  const [isMobile, setIsMobile] = useState(false);

  // Check if viewport is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Extract your projects
  const adaptiveChirplet = {
    id: 15,
    title: "Adaptive Chirplet Transform",
    slug: "adaptive-chirplet-transform-project",
    category: "eeg-bci,ai",
    image: `media/lie_wallpaper.jpg`,
    description: "Time-frequency decomposition methods for non-stationary signals",
    technologies: ["Signal Processing", "Chirplet Transform", "EEG Analysis", "Deep Learning"],
    github: "#",
    live: "#"
  };
  
  const generalRelativity = {
    id: 8,
    title: "General Relativity Tensor Calculator",
    slug: "gr-project",
    category: "physics",
    image: `media/general-rel.png`,
    description: "Python code to calculate tensors based on spacetime metrics",
    technologies: ["Mathematical Physics", "Tensor Calculus", "Python"],
    github: "#",
    live: "#"
  };
  
  const truthSeekerNet = {
    id: 10,
    title: "TruthSeekerNet",
    slug: "truthseeker-project",
    category: "eeg-bci,ai",
    image: `media/lies.jpeg`,
    description: "EEG-based lie detection system using neural signals",
    technologies: ["Python", "EEG", "Signal Processing", "Machine Learning"],
    github: "#",
    live: "#"
  };
  
  const robotControl = {
    id: 2,
    title: "Robot Modelling and Control",
    slug: "robot-control-project",
    category: "robotics",
    image: "media/robot_control_wp.png",
    description: "Robot kinematics, control, and motion planning with the KUKA robotic arm",
    technologies: ["MATLAB", "DH Convention", "Control Theory", "Forward and Inverse Kinematics"],
    github: "#",
    live: "#"
  };

  // Define the rest of your projects
  const otherProjects = [
    // Robotics Projects
    {
      id: 1,
      title: "Robotic Arm Coin Selector",
      slug: "robotic-arm-project",
      category: "ai,robotics",
      image: "media/coin_wpp2.png",
      description: "Automated robotic arm system for coin selection and sorting",
      technologies: ["Python", "TinyML", "Servo Motors", "Raspberry Pi"],
      github: "#",
      live: "#"
    },
    // Physics Projects
    {
      id: 4,
      title: "Cosmic Ray Muon Lifetime",
      slug: "muon-lifetime-project",
      category: "physics",
      image: "media/Muon_full3.jpg",
      description: "Experimental measurement of cosmic ray muon decay lifetime",
      technologies: ["Cosmic Rays", "Liquid Scintillator Detector", "Muon Decay", "Oscilloscope Programming"],
      github: "#",
      live: "#"
    },
    {
      id: 9,
      title: "Measurement of Compton Cross Section",
      slug: "compton-cross-section-project",
      category: "physics",
      image: "media/Comp.jpg",
      description: "Experimental determination of Compton scattering cross-section",
      technologies: ["Quantum Nuclear Physics", "Cesium-137 Radioactive Source", "Electron Scattering"],
      github: "#",
      live: "#"
    },
    {
      id: 7,
      title: "Electron Spin Resonance",
      slug: "electron-spin-resonance-project",
      category: "physics",
      image: "media/ESR_main.jpg",
      description: "ESR spectroscopy analysis and magnetic field studies",
      technologies: ["Quantum Mechanics", "Oscilloscope", "Waveguides", "Microwave Instrumentation"],
      github: "#",
      live: "#"
    },
    {
      id: 6,
      title: "High-Temperature Superconductor",
      slug: "superconductor-project",
      category: "physics",
      image: "media/htck_full.jpg",
      description: "Study of high-temperature superconducting materials",
      technologies: ["Condensed Matter Physics", "Cryogenics", "Lock-In Amplifier"],
      github: "#",
      live: "#"
    },
    {
      id: 5,
      title: "High-Energy Physics",
      slug: "high-energy-physics-project",
      category: "physics",
      image: "media/bubble_chamber.png",
      description: "Analysis of bubble chamber images from pion-proton collisions to identify particle interactions",
      technologies: ["Charged Particle Track Analysis", "Relativistic Kinematics"],
      github: "#",
      live: "#",
    },
    // EEG/BCI Projects
    // TruthSeekerNet is defined above as `truthSeekerNet`, which the ordered
    // list below pulls in directly — it is deliberately not repeated here.
    {
      id: 11,
      title: "Muse EEG Real-Time Acquisition",
      slug: "muse-eeg-project",
      category: "eeg-bci",
      image: "media/muse.jpg",
      description: "Real-time EEG data acquisition and processing from Muse headband via UDP/OSC",
      technologies: ["Python", "UDP/OSC", "MNE-Python", "Signal Processing", "EEG"],
      github: "#",
      live: "#"
    },
    // Adaptive Chirplet Transform is defined above as `adaptiveChirplet`, for
    // the same reason as TruthSeekerNet.
    // AI Projects
        {
      id: 16,
      title: "Semantic Similarity System",
      slug: "semantic-similarity-project",
      category: "ai",
      image: "media/semantic.png",
      description: "NLP system for vocabulary questions using cosine similarity",
      technologies: ["Python", "NLP", "Vector Semantics", "Cosine Similarity"],
      github: "#",
      live: "#"
    },
    {
      id: 13,
      title: "Gomoku",
      slug: "gomoku-project",
      category: "ai",
      image: "media/gomoku.png",
      description: "AI-powered Gomoku game with intelligent opponent",
      technologies: ["Python", "Game AI", "Minimax", "Alpha-Beta Pruning"],
      github: "#",
      live: "#"
    },

  ];

  const aerospaceProjects = [
    {
      id: 20,
      title: "Flight Software & Aerospace Systems",
      slug: "aerospace-project",
      category: "aerospace",
      image: "media/aerospace_header.png",  
      description: "Flight software at The Exploration Company for Nyx, an ISS cargo delivery spacecraft, and at Coactum for an orbital transfer vehicle",
      technologies: ["C++", "FDIR", "Hardware Drivers", "Propulsion Flight Software", "Hardware-in-the-Loop Testing", "Aerospace Systems"],
      github: "#",
      live: "#"
    }
  ];

  // Combine projects in the desired order. Current work leads.
  let projects = [
    ...aerospaceProjects,  // First
    adaptiveChirplet,      // Second
    generalRelativity,     // Third
    truthSeekerNet,        // Fourth
    robotControl,          // Fifth
    ...otherProjects.filter(p => 
      ![adaptiveChirplet.id, generalRelativity.id, truthSeekerNet.id, robotControl.id].includes(p.id)
    )
  ];

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'eeg-bci', label: 'EEG' },
    { key: 'physics', label: 'Physics' },
    { key: 'robotics', label: 'Robotics' },
    { key: 'ai', label: 'AI' },
    { key: 'aerospace', label: 'Aerospace' }
  ];

  // Reorder for mobile: move High Energy Physics after Compton Cross Section
  if (isMobile) {
    const highEnergyIndex = projects.findIndex(p => p.title === "High-Energy Physics");
    const comptonIndex = projects.findIndex(p => p.title === "Measurement of Compton Cross Section");
    
    if (highEnergyIndex !== -1 && comptonIndex !== -1) {
      // Remove High Energy Physics from its current position
      const [highEnergyProject] = projects.splice(highEnergyIndex, 1);
      // Find new Compton index after removal (if High Energy was before Compton)
      const newComptonIndex = projects.findIndex(p => p.title === "Measurement of Compton Cross Section");
      // Insert High Energy Physics right after Compton
      projects.splice(newComptonIndex + 1, 0, highEnergyProject);
    }
  }

  const filteredProjects = filter === 'all' 
    ? projects 
    : (() => {
        const filtered = projects.filter(project => project.category.toLowerCase().split(',').map(c => c.trim()).includes(filter.toLowerCase()));
        if (filter === 'ai' || filter === 'robotics') {
          const coinSelectorIndex = filtered.findIndex(p => p.title === 'Robotic Arm Coin Selector');
          if (coinSelectorIndex !== -1) {
            const [coinSelector] = filtered.splice(coinSelectorIndex, 1);
            filtered.push(coinSelector);
          }
        }
        return filtered;
      })();

  const handleProjectClick = (event, project) => {
    const isModifiedClick =
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
    if (isModifiedClick) return;

    event.preventDefault();
    onOpenProject(project.slug);
  };

  const ProjectPage = selectedProject ? PROJECT_PAGES[selectedProject] : null;
  const hasUnknownProject = Boolean(selectedProject) && !ProjectPage;

  // A hand-typed or outdated URL such as #/portfolio/nope should quietly fall
  // back to the grid rather than render an empty page.
  useEffect(() => {
    if (hasUnknownProject) onCloseProject({ replace: true });
  }, [hasUnknownProject, onCloseProject]);

  // If a project is selected, show its detail view
  if (ProjectPage) {
    return (
      <div className="portfolio-section">
        <div className="project-detail-header">
          <button onClick={() => onCloseProject()} className="back-btn">
            ← Back to Portfolio
          </button>
        </div>
        <ProjectPage />
      </div>
    );
  }

  // If no project is selected, return the grid view
  return (
    <section id="projects" className="portfolio-section">
      <SectionNav activeSection="portfolio" onNavigate={onNavigate} />

      <div className="section-header">
        <h1>Portfolio</h1>
      </div>
      
      <div className="portfolio-content">
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category.key}
              className={`filter-btn ${filter === category.key ? 'active' : ''}`}
              onClick={() => setFilter(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            // A real link, so a card can be focused with the keyboard, opened in
            // a new tab, and read correctly by assistive technology.
            <a
              key={project.id}
              className="project-card"
              href={formatHash({ section: 'portfolio', project: project.slug })}
              onClick={(event) => handleProjectClick(event, project)}
            >
              <div className="project-image">
                <img
                  src={`${import.meta.env.BASE_URL}${project.image}`}
                  alt={project.title}
                  className={project.className || ''}
                  // The grid holds ~14 large images. Only the first row or two
                  // are ever visible on load; deferring the rest keeps the page
                  // usable quickly on a phone connection.
                  loading={index < 4 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    {/* GitHub links removed from all project cards */}
                  </div>
                </div>
              </div>
              
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
