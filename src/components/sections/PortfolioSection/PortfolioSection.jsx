import React, { useState } from 'react';
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
import './PortfolioSection.css';

const PortfolioSection = ({ isDarkMode, onNavigate }) => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Extract your projects
  const adaptiveChirplet = {
    id: 15,
    title: "Adaptive Chirplet Transform",
    category: "eeg-bci,ai",
    image: `media/lie_wallpaper.jpg`,
    description: "Time-frequency decomposition methods for non-stationary signals.",
    technologies: ["Signal Processing", "Chirplet Transform", "EEG Analysis", "Deep Learning"],
    github: "#",
    live: "#"
  };
  
  const generalRelativity = {
    id: 8,
    title: "General Relativity Tensor Calculator",
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
    category: "robotics",
    image: "media/robot_control_wp.png",
    description: "Robot Kinematics, Control, and Motion Planning with the KUKA Robotic Arm",
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
      title: "Muon Lifetime",
      category: "physics",
      image: "/media/Muon_full3.jpg",
      description: "Experimental measurement of muon decay lifetime",
      technologies: ["Cosmic Rays", "Liquid Scintillator Detector", "Muon Decay", "Oscilloscope Programming"],
      github: "#",
      live: "#"
    },
    {
      id: 9,
      title: "Measurement of Compton Cross Section",
      category: "physics",
      image: "/media/Comp.jpg",
      description: "Experimental determination of Compton scattering cross-section",
      technologies: ["Nuclear Physics", "Gamma Spectroscopy", "Laboratory"],
      github: "#",
      live: "#"
    },
    {
      id: 7,
      title: "Electron Spin Resonance",
      category: "physics",
      image: "/media/ESR_main.jpg",
      description: "ESR spectroscopy analysis and magnetic field studies",
      technologies: ["Quantum Mechanics", "Oscilloscope", "Waveguides", "Microwave instrumentation"],
      github: "#",
      live: "#"
    },
    {
      id: 6,
      title: "High Temperature Super Conductor",
      category: "physics",
      image: "/media/htck_full.jpg",
      description: "Study of high-temperature superconducting materials",
      technologies: ["Condensed Matter Physics", "Cryogenics", "Lock In Amplifier"],
      github: "#",
      live: "#"
    },
    {
      id: 5,
      title: "High Energy Physics",
      category: "physics",
      image: "/media/bubble_chamber.png",
      description: "Analysis of bubble chamber images from pion-proton collisions to identify particle interactions",
      technologies: ["Charged Particle Track Analysis", "Relativistic Kinematics"],
      github: "#",
      live: "#",
    },
    // EEG/BCI Projects
    {
      id: 10,
      title: "TruthSeekerNet",
      category: "eeg-bci,ai",
      image: `media/lies.jpeg`,
      description: "EEG-based lie detection system using neural signals",
      technologies: ["Python", "EEG", "Signal Processing", "Machine Learning"],
      github: "#",
      live: "#"
    },
    {
      id: 11,
      title: "Muse EEG Real-Time Acquisition",
      category: "eeg-bci",
      image: "media/muse.jpg",
      description: "Real-time EEG data acquisition and processing from Muse headband via UDP/OSC",
      technologies: ["Python", "UDP/OSC", "MNE-Python", "Signal Processing", "EEG"],
      github: "#",
      live: "#"
    },
    {
      id: 15,
      title: "Adaptive Chirplet Transform",
      category: "eeg-bci,ai",
      image: `media/lie_wallpaper.jpg`,
      description: "Exploring the potential of ACT as a feature extraction method for EEG.",
      technologies: ["Signal Processing", "Chirplet Transform", "EEG Analysis", "Deep Learning"],
      github: "#",
      live: "#"
    },
    // AI Projects
        {
      id: 16,
      title: "Semantic Similarity System",
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
      category: "ai",
      image: "media/gomoku.png",
      description: "AI-powered Gomoku game with intelligent opponent",
      technologies: ["Python", "Game AI", "Minimax", "Alpha-Beta Pruning"],
      github: "#",
      live: "#"
    },

  ];

  // Combine projects in the desired order
  const projects = [
    adaptiveChirplet,    // First
    generalRelativity,   // Second
    truthSeekerNet,      // Third
    robotControl,        // Fourth
    ...otherProjects.filter(p => 
      ![adaptiveChirplet.id, generalRelativity.id, truthSeekerNet.id, robotControl.id].includes(p.id)
    )
  ];

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'eeg-bci', label: 'EEG' },
    { key: 'physics', label: 'Physics' },
    { key: 'robotics', label: 'Robotics' },
    { key: 'ai', label: 'AI' }
  ];

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

  const handleProjectClick = (project) => {
    switch (project.title) {
      case "General Relativity Tensor Calculator":
        setSelectedProject('gr-project');
        break;
      case "Robotic Arm Coin Selector":
        setSelectedProject('robotic-arm-project');
        break;
      case "Robot Modelling and Control":
        setSelectedProject('robot-control-project');
        break;
      // case "Trash Compactor":
      //   setSelectedProject('trash-compactor-project');
      //   break;
      case "Muon Lifetime":
        setSelectedProject('muon-lifetime-project');
        break;
      case "High Energy Physics":
        setSelectedProject('high-energy-physics-project');
        break;
      case "High Temperature Super Conductor":
        setSelectedProject('superconductor-project');
        break;
      case "Electron Spin Resonance":
        setSelectedProject('electron-spin-resonance-project');
        break;
      case "Measurement of Compton Cross Section":
        setSelectedProject('compton-cross-section-project');
        break;
      case "TruthSeekerNet":
        setSelectedProject('truthseeker-project');
        break;
      case "Muse EEG Real-Time Acquisition":
        setSelectedProject('muse-eeg-project');
        break;
      case "Adaptive Chirplet Transform":
        setSelectedProject('adaptive-chirplet-transform-project');
        break;
      case "Gomoku":
        setSelectedProject('gomoku-project');
        break;
      case "Semantic Similarity System":
        setSelectedProject('semantic-similarity-project');
        break;
      default:
        setSelectedProject(null);
        break;
    }
  };

  const handleBackClick = () => {
    setSelectedProject(null);
  };

  // If a project is selected, show its detail view
  if (selectedProject) {
    const projectComponents = {
      'gr-project': <GRProject />,
      'robotic-arm-project': <RoboticArmProject />,
      'robot-control-project': <RobotControlProject />,
      // 'trash-compactor-project': <TrashCompactorProject />,
      'muon-lifetime-project': <MuonLifetimeProject />,
      'high-energy-physics-project': <HighEnergyPhysicsProject />,
      'superconductor-project': <SuperconductorProject />,
      'electron-spin-resonance-project': <ElectronSpinResonanceProject />,
      'compton-cross-section-project': <ComptonCrossSectionProject />,
      'truthseeker-project': <TruthSeekerNet />,
      'muse-headband-reader-project': <MuseHeadbandReaderProject />,
      'muse-eeg-project': <MuseEEGProject />,
      'adaptive-chirplet-transform-project': <ChirpletThesis />,
      'gomoku-project': <GomokuAIProject />,
      'semantic-similarity-project': <SemanticSimilarityProject />
    };

    return (
      <div className="portfolio-section">
        <div className="project-detail-header">
          <button onClick={handleBackClick} className="back-btn">
            ← Back to Portfolio
          </button>
        </div>
        {projectComponents[selectedProject]}
      </div>
    );
  }

  return (
    <section id="projects" className="portfolio-section">
      {/* Top navigation */}
      <div className="top-navigation">
        <nav>
          <ul>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>About</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('resume'); }}>Resume</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('portfolio'); }} className="active">Portfolio</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>Contact</a></li>
          </ul>
        </nav>
      </div>
      
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
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => handleProjectClick(project)}
              style={{ cursor: 'pointer' }}
            >
              <div className="project-image">
                <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.title} className={project.className || ''} />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
