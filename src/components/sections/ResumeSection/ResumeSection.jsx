import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCode, FaDownload } from 'react-icons/fa';
import SectionNav from '../../SectionNav/SectionNav';
import './ResumeSection.css';

const ResumeSection = ({ onNavigate }) => {
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
      year: "September 2025 - Present",
      position: "Flight Software Engineer",
      company: "The Exploration Company",
      location: "Munich, Germany",
      description: "Safety critical C++ flight software for Nyx, a modular and reusable spacecraft scheduled to dock to the ISS in 2028. Point of contact in the FSW team for the Propulsion and Sequential subsystems, working directly with propulsion, avionics, and GNC engineers."
    },
    {
      year: "May 2024 - May 2025",
      position: "Research Assistant",
      company: "MannLab",
      location: "Toronto, Canada",
      description: (
        <>
          Built the signal processing pipelines and neural networks used to classify sleep stages from EEG data, under Dr. Steve Mann. Published at IEEE ICCE 2025, where the work received a conference award. <a href='https://ieeexplore.ieee.org/document/10929845' target='_blank' rel='noopener noreferrer' className='paper-link'>Read more</a>
        </>
      )
    },
    {
      year: "June 2023 - November 2023",
      position: "Software Engineering Intern",
      company: "Coactum S.A.",
      location: "Vaud, Switzerland",
      description: "Extended the validation test framework, wrote Python mocks for spacecraft sensors, and ran functional tests on units including the IMU and star tracker."
    },
    {
      year: "May 2022 - August 2022",
      position: "Software Engineering Intern",
      company: "Coactum S.A.",
      location: "Vaud, Switzerland",
      description: "Built the testbench for the onboard flight software (OBSW) from scratch — designed the hardware, configured SpaceWire boards, and implemented the automated validation framework."
    }
  ];

  const skillsData = {
    // Languages live in here rather than in a category of their own: "C++" on a
    // list says very little, so it sits next to what it is actually used for.
    flightSoftware: [
      { name: "C++ (17/20)" },
      { name: "C" },
      { name: "ARM Assembly" },
      { name: "Python" },
      { name: "Real-time embedded systems" },
      { name: "RTOS" },
      { name: "Bare-metal firmware" },
      { name: "Multi-threading & synchronisation" },
      { name: "State machines & sequencing" },
      { name: "FDIR" },
      { name: "Hardware drivers" },
      { name: "SpaceWire" },
      { name: "Hardware-in-the-loop testing" },
      { name: "Fault injection" },
      { name: "Bazel" },
      { name: "GDB (on-target debugging)" }
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
      { name: "CI/CD" },
      { name: "Unit/Integration Testing" },
      { name: "MATLAB" },
      { name: "Bash" },
      { name: "LaTeX" },
      { name: "ARM Keil MDK" },
      { name: "STM32/STM32CubeIDE" },
      { name: "Intel Quartus Prime" },
      { name: "OpenBCI" },
      { name: "MNE-Python" }
    ]
  };

  return (
    <div className="resume-section">
      <SectionNav activeSection="resume" onNavigate={onNavigate} />

      <div className="section-header">
        <h1>Resume</h1>
        <a
          className="resume-download"
          href={`${import.meta.env.BASE_URL}media/resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDownload /> Download PDF
        </a>
      </div>
      
      <div className="resume-content">
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

        <div className="skills-section">
          <h2><FaCode /> Skills</h2>

          <div className="skills-categories">
            <div className="skill-category">
              <h3>Flight Software &amp; Embedded</h3>
              <div className="skills-grid">
                {skillsData.flightSoftware.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skills-grid languages">
                {skillsData.languages.map((language, index) => (
                  <span key={index} className="skill-tag">{language.name}</span>
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
