import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';
import './ResumeSection.css';

const ResumeSection = ({ isDarkMode }) => {
  const education = [
    {
      year: "2020 - 2025",
      degree: "Bachelor of Applied Science in Engineering Physics",
      institution: "University of Toronto",
      description: "Specialized in Engineering Physics with minors in Mechatronics, Robotics, and Artificial Intelligence. Completed graduate-level courses in General Relativity, Particle Physics, and Computational Physics. Relevant coursework includes Quantum Mechanics, Electromagnetic Theory, Statistical Mechanics, Advanced Mathematics, and Signal Processing."
    }
  ];

  const experience = [
    {
      year: "May 2024 - May 2025",
      position: "Research Assistant",
      company: "MannLab",
      location: "Toronto, Canada",
      description: "Conducted research under Dr. Steve Mann, focusing on signal processing and machine learning for EEG data. Published a paper in IEEE ICCE 2025."
    },
    {
      year: "June 2023 - November 2023",
      position: "Software Engineering Intern",
      company: "Coactum S.A.",
      location: "Vaud, Switzerland",
      description: "Built scalable frameworks for validation tests, wrote Python mocks for spacecraft sensors, and performed functional tests for various units including IMU and startracker."
    },
    {
      year: "May 2022 – August 2022",
      position: "Software Engineering Intern",
      company: "Coactum S.A.",
      location: "Vaud, Switzerland",
      description: "Developed the testbench for the onboard flight software (OBSW) from scratch. Designed hardware components, configured SpaceWire boards, and implemented automated validation frameworks."
    }
  ];

  const skillsData = {
    programmingLanguages: [
      { name: "Python" },
      { name: "C++" },
      { name: "C" },
      { name: "MATLAB" },
      { name: "Bash" },
      { name: "ARM Assembly" }
    ],
    languages: [
      { name: "Portuguese" },
      { name: "English" },
      { name: "Spanish" }
    ],
    technologies: [
      { name: "Linux" },
      { name: "Git" },
      { name: "Docker" },
      { name: "TensorFlow" },
      { name: "CI/CD" },
      { name: "Unit/Integration Testing" },
      { name: "LaTeX" },
      { name: "Arduino" },
      { name: "Pandas" },
      { name: "STM32" },
      { name: "NumPy" },
      { name: "Scikit-learn" },
      { name: "RTOS (FreeRTOS)" },
      { name: "CAN Bus" },
      { name: "Intel Quartus Prime" },
      { name: "Simulink" },
      { name: "OpenBCI" },
      { name: "MNE-Python" }
    ]
  };

  return (
    <div className="resume-section">
      <div className="section-header">
        <h1>Resume</h1>
      </div>
      
      <div className="resume-content">
        <div className="timeline-section">
          <h2><FaGraduationCap /> Education</h2>
          <div className="timeline">
            {education.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.degree}</h3>
                  <h4>{item.institution}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline-section">
          <h2><FaBriefcase /> Experience</h2>
          <div className="timeline">
            {experience.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.position}</h3>
                  <h4>{item.company} - {item.location}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h2><FaCode /> Skills</h2>
          
          <div className="skills-categories">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skills-grid">
                {skillsData.programmingLanguages.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skills-grid">
                {skillsData.languages.map((skill, index) => (
                  <div key={index} className="skill-item language-item">
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3>Technologies & Tools</h3>
              <div className="skills-grid">
                {skillsData.technologies.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
