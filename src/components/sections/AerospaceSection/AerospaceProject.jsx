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
            I write flight software — the C++ that runs on a spacecraft and commands its
            hardware. Most of the detail is covered by confidentiality agreements, so this
            page describes the kind of work and the tools rather than the specifics.
          </p>
        </section>

        <section className="project-section expertise">
          <h2>Areas of Expertise</h2>
          <ul className="expertise-list">
            <li>Flight software architecture and development</li>
            <li>Real-time embedded systems</li>
            <li>Hardware-in-the-loop (HIL) simulation and test frameworks</li>
            <li>Fault detection, isolation and recovery (FDIR)</li>
            <li>Propulsion software and sequenced operations</li>
          </ul>
        </section>

        <section className="project-section cpp">
          <h2>C++ in Flight Software</h2>
          <p>
            C++ is what I work in day to day, targeting Linux-based flight computers and
            RTOS. The constraints are different from most application work: the code has to
            behave predictably, fail safely, and be testable long before it reaches real
            hardware.
          </p>
          <ul className="expertise-list">
            <li>
              <strong>Modern C++ (17/20):</strong> RAII and clear ownership, strong typing
              over raw values for physical quantities and hardware registers, and interfaces
              narrow enough to be mocked in tests.
            </li>
            <li>
              <strong>Real-time and embedded constraints:</strong> Writing for RTOS targets
              (FreeRTOS) and bare-metal microcontrollers, where timing and memory behaviour
              matter as much as correctness.
            </li>
            <li>
              <strong>Concurrency:</strong> Multi-threaded services sharing state across
              periodic tasks, and the synchronisation needed to keep that state consistent.
            </li>
            <li>
              <strong>Hardware interfaces:</strong> Sensor and actuator drivers over CAN bus
              and SpaceWire, and the serialisation layers that sit above them.
            </li>
            <li>
              <strong>Sequencing and state machines:</strong> Deployment, separation and
              abort sequences expressed as explicit state machines, so every transition and
              timeout is something you can point at and test.
            </li>
            <li>
              <strong>FDIR:</strong> Detecting off-nominal conditions, isolating the affected
              subsystem, and recovering into a safe state.
            </li>
            <li>
              <strong>Testing:</strong> Unit and integration tests, fault injection against
              software mocks, and hardware-in-the-loop runs on the real avionics.
            </li>
            <li>
              <strong>Tooling:</strong> Bazel builds, GDB for on-target debugging, Git, and
              CI pipelines that run the test suite on every change.
            </li>
          </ul>
        </section>

        <section className="project-section highlights">
          <h2>Current Work — The Exploration Company</h2>
          <div className="highlight-item">
            <p>
              Nyx is a modular, reusable orbital vehicle. I am responsible for the flight software for the Propulsion and Sequential subsystems, and the point of contact from the software team for the Propulsion and Sequential teams. My work includes:
            </p>
            <ul>
              <li>
                <strong>Propulsion Qualification Module (PQM):</strong> My current focus —
                writing the flight software for the PQM, the testbench used to qualify the
                propulsion system. 
              </li>
              <li>
                <strong>Hydraulic Mockup Unit (HMU) testbench:</strong> Delivered for
                the flight software for the HMU testbench. The HMU is a testbench that uses EM components of the propulsion system and OBC to test and validate amongst other things the pressure regulation algorithms, the valve control logic and timings with the flight software and the propellant flow. 
              </li>
              <li>
                <strong>Nyx Earth propulsion:</strong> Flight software for the propulsion
                system.
              </li>
              <li>
                <strong>Parachute deployment:</strong> Software for the deployment sequence.
              </li>
              <li>
                <strong>Emergency undocking and nose cap control.</strong>
              </li>
            </ul>
          </div>
        </section>

        <section className="project-section highlights">
          <h2>Earlier Work — Coactum</h2>
          <div className="highlight-item">
            <p>
              Two internships at a Swiss startup building an orbital transfer vehicle. I
              built the testbench and validation infrastructure for the onboard software
              (OBSW) from scratch.
            </p>
            <ul>
              <li>
                <strong>HIL testbench:</strong> Designed and built an extensible PC/104 stack
                that became the central unit for software validation and hardware functional
                testing.
              </li>
              <li>
                <strong>Software mocks:</strong> Wrote emulations of the PCDU, IMU and star
                tracker so the flight software could be tested without the physical units.
              </li>
              <li>
                <strong>Fault injection:</strong> The mocks made it possible to test failure
                handling — sensor dropouts, unresponsive units — that is impractical to
                reproduce on real hardware.
              </li>
              <li>
                <strong>Automated test framework:</strong> Built on Gauge, so scenarios read
                close to plain language. It set up the mocks, managed the communication ports
                and produced the test reports.
              </li>
              <li>
                <strong>CI integration:</strong> Made the suite runnable from continuous
                integration, so regressions showed up on the change that caused them.
              </li>
            </ul>
          </div>
        </section>

        <section className="project-section technologies">
          <h2>Core Technologies & Tools</h2>
          <div className="tech-tags">
            <span className="tech-tag">C++ (17/20)</span>
            <span className="tech-tag">C</span>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">RTOS / FreeRTOS</span>
            <span className="tech-tag">Multi-threading</span>
            <span className="tech-tag">CAN bus</span>
            <span className="tech-tag">SpaceWire</span>
            <span className="tech-tag">Hardware-in-the-loop</span>
            <span className="tech-tag">STM32</span>
            <span className="tech-tag">Linux</span>
            <span className="tech-tag">Bazel</span>
            <span className="tech-tag">GDB</span>
            <span className="tech-tag">Git</span>
            <span className="tech-tag">CI/CD</span>
            <span className="tech-tag">Unit &amp; integration testing</span>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AerospaceProject;
