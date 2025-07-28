import React from 'react';
import { FaPython, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiArduino, SiTensorflow, SiOpencv } from 'react-icons/si';
import './Skills.css';

const Skills = ({ isDarkMode }) => {
  const skills = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'Python', icon: <FaPython />, level: 90 },
        { name: 'MATLAB', icon: null, level: 85 },
        { name: 'JavaScript', icon: <FaJs />, level: 80 },
        { name: 'C++', icon: null, level: 75 },
      ]
    },
    {
      category: 'Frameworks & Libraries',
      items: [
        { name: 'React', icon: <FaReact />, level: 80 },
        { name: 'TensorFlow', icon: <SiTensorflow />, level: 75 },
        { name: 'OpenCV', icon: <SiOpencv />, level: 80 },
        { name: 'Arduino', icon: <SiArduino />, level: 85 },
      ]
    },
    {
      category: 'Physics & Engineering',
      items: [
        { name: 'Data Analysis', icon: null, level: 90 },
        { name: 'Signal Processing', icon: null, level: 85 },
        { name: 'Laboratory Skills', icon: null, level: 88 },
        { name: 'Robotics', icon: null, level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <div className="section-header">
          <h2>Skills & Expertise</h2>
        </div>
        <div className="skills-content">
          {skills.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skills-grid">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
