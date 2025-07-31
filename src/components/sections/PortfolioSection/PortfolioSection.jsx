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
import ChirpletThesis from '../AdaptiveChirpletTransformProject/AdaptiveChirpletTransformProject';
import './PortfolioSection.css';

const PortfolioSection = ({ isDarkMode }) => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    // Robotics Projects
    {
      id: 1,
      title: "Robotic Arm Coin Selector",
      category: "robotics",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjM5YzEyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkFSTTwvdGV4dD48L3N2Zz4=",
      description: "Automated robotic arm system for coin selection and sorting",
      technologies: ["Python", "OpenCV", "ROS", "Arduino"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Robot Modelling and Control",
      category: "robotics",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjM5YzEyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlJPQk9UPC90ZXh0Pjwvc3ZnPg==",
      description: "Advanced robotic modeling and control system implementation",
      technologies: ["MATLAB", "Simulink", "Control Theory", "Kinematics"],
      github: "#",
      live: "#"
    },
    // {
    //   id: 3,
    //   title: "Trash Compactor",
    //   category: "robotics",
    //   image: "media/trash_compressor.png",
    //   description: "Automated trash compaction system with smart sensors",
    //   technologies: ["Arduino", "Sensors", "Mechanical Design", "C++"],
    //   github: "#",
    //   live: "#"
    // },
    // Physics Projects
    {
      id: 8,
      title: "General Relativity Tensor Calculator",
      category: "physics",
      image: `media/general-rel.png`,
      description: "Python code to calculate tensors based on spacetime metrics",
      technologies: ["Mathematical Physics", "Tensor Calculus", "Python"],
      github: "#",
      live: "#"
    },
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
      title: "Lie Detector",
      category: "eeg-bci",
      image: `media/lies.jpeg`,
      description: "EEG-based lie detection system using neural signals",
      technologies: ["Python", "EEG", "Signal Processing", "Machine Learning"],
      github: "#",
      live: "#"
    },
    {
      id: 11,
      title: "Muse Headband Reader",
      category: "eeg-bci",
      image: "media/muse.jpg",
      description: "Real-time EEG data acquisition from Muse headband",
      technologies: ["Python", "Bluetooth", "EEG", "Real-time Processing"],
      github: "#",
      live: "#"
    },
    {
      id: 15,
      title: "Adaptive Chirplet Transform",
      category: "eeg-bci",
      image: `media/lie_wallpaper.jpg`,
      description: "Time-frequency decomposition methods for non-stationary signals.",
      technologies: ["Signal Processing", "Chirplet Transform", "EEG Analysis", "Deep Learning"],
      github: "#",
      live: "#"
    },
    // AI Projects
    {
      id: 13,
      title: "Gomoku",
      category: "ai",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjM5YzEyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkdPTU9LVTwvdGV4dD48L3N2Zz4=",
      description: "AI-powered Gomoku game with intelligent opponent",
      technologies: ["Python", "Game AI", "Minimax", "Alpha-Beta Pruning"],
      github: "#",
      live: "#"
    },
    {
      id: 14,
      title: "Hua Rong Dao",
      category: "ai",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjM5YzEyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlBVWlpMRTwvdGV4dD48L3N2Zz4=",
      description: "AI solver for the classic Hua Rong Dao sliding puzzle",
      technologies: ["Python", "Search Algorithms", "Heuristics", "Optimization"],
      github: "#",
      live: "#"
    }
  ];

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'eeg-bci', label: 'EEG/BCI' },
    { key: 'ai', label: 'AI' },
    { key: 'robotics', label: 'Robotics' },
    { key: 'physics', label: 'Physics' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase());

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
      case "Trash Compactor":
        setSelectedProject('trash-compactor-project');
        break;
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
      case "Lie Detector":
        setSelectedProject('truthseeker-project');
        break;
      case "Muse Headband Reader":
        setSelectedProject('muse-headband-reader-project');
        break;
      case "Adaptive Chirplet Transform":
        setSelectedProject('adaptive-chirplet-transform-project');
        break;
      default:
        setSelectedProject(null);
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
      'trash-compactor-project': <TrashCompactorProject />,
      'muon-lifetime-project': <MuonLifetimeProject />,
      'high-energy-physics-project': <HighEnergyPhysicsProject />,
      'superconductor-project': <SuperconductorProject />,
      'electron-spin-resonance-project': <ElectronSpinResonanceProject />,
      'compton-cross-section-project': <ComptonCrossSectionProject />,
      'truthseeker-project': <TruthSeekerNet />,
      'muse-headband-reader-project': <MuseHeadbandReaderProject />,
      'adaptive-chirplet-transform-project': <ChirpletThesis />,
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
