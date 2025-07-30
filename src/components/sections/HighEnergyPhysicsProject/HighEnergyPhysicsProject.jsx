import React from 'react';
import './HighEnergyPhysicsProject.css';

const HighEnergyPhysicsProject = () => {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>High Energy Particle Interactions in a Bubble Chamber</h1>
        <p className="project-subtitle">Advanced Physics Laboratory - Fall 2024</p>
      </div>

      <div className="project-content">
        <section className="project-section">
          <h2>Introduction & Motivation</h2>
          <p>
            In this experiment, I analyzed two high-energy pion-proton collision events captured in a liquid hydrogen bubble chamber at the SLAC National Accelerator Laboratory. 
            Each event was recorded using high-resolution stereoscopic imaging and provided a rare opportunity to reconstruct particle tracks, identify interaction products, 
            and verify conservation laws of quantum numbers such as charge, baryon number, and strangeness.
          </p>
          <p>
            Bubble chambers offer a unique visual perspective on the dynamics of subatomic collisions. My role was to identify final state particles—including strange particles—and 
            test the consistency of observed interactions with the Standard Model.
          </p>
        </section>

        <section className="project-section">
          <h2>Experimental Setup & Tools</h2>
          <ul>
            <li><strong>Detector:</strong> SLAC 82-inch liquid hydrogen bubble chamber</li>
            <li><strong>Beam:</strong> π<sup>+</sup> mesons at 10.3 GeV/c</li>
            <li><strong>Magnetic Field:</strong> 15.5 kG perpendicular to image plane, enabling momentum analysis via curvature</li>
            <li><strong>Software:</strong> Traxis (track fitting), Python for analysis and mass reconstruction</li>
            <li><strong>Calibration:</strong> Ionization density and radius-to-momentum mapping via dE/dx curves</li>
          </ul>
          <div className="equipment-image-container">
            <img src="/media/bubble_chamber_setup.jpg" alt="Bubble Chamber Setup" className="equipment-image" />
          </div>
        </section>

        <section className="project-section">
          <h2>Key Particle Interactions Observed</h2>
          <p>
            In one of the analyzed events, a 10.3 GeV/c π<sup>+</sup> collided with a stationary proton. The collision produced a visible V<sub>0</sub> decay pattern, 
            characteristic of a neutral strange particle decaying into two charged daughters. The decay vertex was displaced from the primary interaction point, 
            suggesting the presence of a short-lived Λ<sup>0</sup> baryon.
          </p>
          <div className="results-image-container">
            <img src="/media/hep_event1.jpg" alt="Bubble Chamber Event 1" className="results-image" />
          </div>
          <p>We postulated the following reaction:</p>
          <div className="equation-box">
            <p><strong>Event A:</strong></p>
            <p>π<sup>+</sup> + p → Λ<sup>0</sup> + K<sup>+</sup> + π<sup>+</sup></p>
            <p>Λ<sup>0</sup> → p + π<sup>−</sup></p>
          </div>
          <p>
            The Λ<sup>0</sup> was identified based on its decay topology, ionization signatures, and reconstructed invariant mass of <strong>1114 ± 9 MeV/c²</strong>, 
            consistent with the known mass of the Λ baryon (1115.7 MeV/c²).
          </p>
        </section>

        <section className="project-section">
          <h2>Secondary Features and Phenomena</h2>
          <ul>
            <li><strong>Delta-ray production:</strong> Observed as thin spiral tracks from energetic knock-on electrons</li>
            <li><strong>π<sup>+</sup> decay-in-flight:</strong> Track with characteristic “kink” followed by μ<sup>+</sup> track</li>
            <li><strong>γ conversions:</strong> V-shaped e<sup>+</sup>e<sup>−</sup> pairs formed downstream of neutral decay vertex</li>
          </ul>

          <div className="results-image-container">
            <img src="/media/hep_event2.jpg" alt="Bubble Chamber Event 2" className="results-image" />
          </div>

          <div className="equation-box">
            <p><strong>Event B:</strong></p>
            <p>π<sup>+</sup> + p → K<sup>0</sup><sub>S</sub> + π<sup>+</sup> + π<sup>−</sup> + p</p>
            <p>K<sup>0</sup><sub>S</sub> → π<sup>+</sup> + π<sup>−</sup></p>
          </div>
          <p>
            The K<sup>0</sup><sub>S</sub> candidate decayed ~3.1 cm from the primary vertex and had an invariant mass of <strong>497 ± 12 MeV/c²</strong>, 
            in agreement with the kaon mass. The decay was consistent with weak interaction timescales (~10<sup>−10</sup> s) and confirmed strangeness conservation 
            in the primary vertex.
          </p>
        </section>

        <section className="project-section">
          <h2>Physics & Conservation Laws</h2>
          <p>
            For both primary reactions, I verified conservation of:
          </p>
          <ul>
            <li><strong>Charge</strong> (initial +1 → final +1)</li>
            <li><strong>Baryon Number</strong> (initial +1 → final +1)</li>
            <li><strong>Strangeness</strong> (initial 0 → final +1 −1 = 0)</li>
            <li><strong>Energy & Momentum</strong> using reconstructed momenta and beam energy of 10.3 GeV/c</li>
          </ul>
          <p>
            Small deviations were within error tolerances, attributed to uncertainty in curvature fitting and estimation of decay vertices.
          </p>
        </section>

        <section className="project-section">
          <h2>Feynman Diagrams</h2>
          <div className="results-image-container">
            <img src="/media/hep_feynman_lambda.png" alt="Feynman Diagram for Λ⁰ Production" className="results-image" />
            <img src="/media/hep_feynman_kaon.png" alt="Feynman Diagram for K⁰ Production" className="results-image" />
          </div>
        </section>

        <section className="project-section">
          <h2>Skills & Techniques Developed</h2>
          <ul>
            <li>Bubble chamber event reconstruction and particle identification</li>
            <li>Application of relativistic kinematics and conservation laws</li>
            <li>Use of dE/dx and curvature for mass and charge inference</li>
            <li>Python scripting for invariant mass and momentum analysis</li>
            <li>Understanding strong vs. weak interaction decay signatures</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Conclusion</h2>
          <p>
            This experiment offered a rare, hands-on glimpse into the visual legacy of experimental particle physics. Through track curvature, decay topologies, 
            and conservation law analysis, I was able to reconstruct and classify interactions involving strange particles like Λ<sup>0</sup> and K<sup>0</sup><sub>S</sub>. 
            The results affirmed predictions of the Standard Model and deepened my understanding of particle interactions at high energies.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HighEnergyPhysicsProject;
