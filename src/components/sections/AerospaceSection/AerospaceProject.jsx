import React from 'react';
import './AerospaceProject.css';

const AerospaceProject = () => {
  return (
    <div className="aerospace-project">
      <div className="project-header">
        <h1>Flight Software & Aerospace Systems</h1>
      </div>

      <div className="project-content">
        <section className="project-section overview">
          <p>
            My career has revolved around developing robust, mission-critical software for the aerospace industry. While confidentiality agreements prevent me from discussing any details of my previous or current work, this page outlines my core competencies, key project experiences, and the technologies I have used to solve complex engineering challenges.
          </p>
        </section>

        <section className="project-section expertise">
          <h2>Areas of Expertise</h2>
          <ul className="expertise-list">
            <li>Flight Software Architecture & Development</li>
            <li>Real-Time Embedded Systems</li>
            <li>Hardware-in-the-Loop (HIL) Simulation & Test Frameworks</li>
            <li>Fault Detection, Isolation, and Recovery (FDIR)</li>
            {/* Add more areas of expertise here */}
          </ul>
        </section>

        <section className="project-section highlights">
          <h2>Project & Task Highlights</h2>
          <div className="highlight-item">
            <h3>Flight Software Engineer | The Exploration Company</h3>
            <p>Developing mission-critical software for the Nyx spacecraft. My responsibilities include:</p>
            <ul>
              <li>Implementing the Flight Software for the Propulsion System of Nyx Earth</li>
              <li>Implementing the Flight Software for the Parachute Deployment Sequence and Pyro Activations</li>
              <li>Implementing the Flight Software for Emergency Undocking and nose cap control</li>
            </ul>
          </div>

          {/* --- COACTUM SECTION --- */}
          <div className="highlight-item">
            <h3>Flight Software Engineer | Coactum</h3>
            <p>As an early member of a startup developing an orbital transfer vehicle, I designed and built a comprehensive testbench and validation infrastructure for the flight software (OBSW).</p>
            <ul>
              <li>
                <strong>Architected a Hardware-in-the-Loop (HIL) Testbench:</strong> Designed and built an extensible PC/104 stack to serve as the central unit for all software validation and hardware functional testing.
              </li>
              <li>
                <strong>Developed High-Fidelity Software Mocks:</strong> Implemented software emulations for critical subsystems (PCDU, IMU, Star Tracker) to enable robust testing of the flight software without requiring physical hardware.
              </li>
              <li>
                <strong>Enabled Critical Fault Injection Testing:</strong> The mock-based architecture allowed for rigorous testing of failure handling and fault management scenarios (e.g., simulating sensor failures) that would be impractical or impossible on real hardware.
              </li>
              <li>
                <strong>Built an Automated Testing Framework:</strong> Initiated the development of an infrastructure using the Gauge framework, allowing test scenarios to be written in near-natural language. This framework automated the setup of mocks, managed communication ports, and generated detailed test reports.
              </li>
              <li>
                <strong>Integrated with CI/CD:</strong> Designed the testing framework to be runnable from a continuous integration system, ensuring that new code changes did not break existing functionality.
              </li>
            </ul>
          </div>
          {/* --- END OF COACTUM SECTION --- */}

        </section>

        <section className="project-section technologies">
          <h2>Core Technologies & Tools</h2>
          <div className="tech-tags">
            <span className="tech-tag">C++ (17/20)</span>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">RTOS</span>
            <span className="tech-tag">Linux</span>
            <span className="tech-tag">Git</span>
            <span className="tech-tag">Bazel</span>
            <span className="tech-tag">GDB</span>
            {/* Add more technologies here */}
          </div>
        </section>

      </div>
    </div>
  );
};

export default AerospaceProject;