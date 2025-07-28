import React from 'react';
import './ComptonScatteringProject.css';

const ComptonScatteringProject = () => {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>Compton Scattering and the Fine Structure Constant</h1>
        <p className="project-subtitle">Advanced Physics Laboratory - Fall 2024</p>
      </div>

      <div className="project-content">
        <section className="project-section">
          <h2>Introduction & Background</h2>
          <p>
            Compton scattering is a fundamental quantum phenomenon where photons scatter off electrons, shifting their wavelength in the process. It was one of the earliest experimental confirmations that light behaves as particles with momentum. 
            This effect supports Einstein's photon theory and provides the basis for quantum electrodynamics (QED).
          </p>
          <p>
            The experiment aimed to measure the Compton scattering cross section for various materials and use this data to calculate the <strong>fine structure constant</strong> (α), which quantifies the strength of electromagnetic interactions. Accurate experimental estimation of α validates key principles in modern particle physics.
          </p>
        </section>

        <section className="project-section">
          <h2>Goals & Motivation</h2>
          <ul>
            <li>Measure total photon attenuation for various absorber materials and thicknesses</li>
            <li>Determine the Compton scattering cross-section via exponential fitting</li>
            <li>Estimate the fine structure constant α and compare with its accepted value</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Experimental Setup & Equipment</h2>
          <p>
            The core components of the experiment included:
          </p>
          <ul>
            <li><strong>Cs-137 Gamma Source (662 keV):</strong> Provided high-energy monoenergetic photons</li>
            <li><strong>Lead Collimator:</strong> Narrowed the beam and reduced scattering noise</li>
            <li><strong>Absorber Materials:</strong> Carbon, aluminum, copper, lead, and bismuth (5 thicknesses each)</li>
            <li><strong>Scintillator + PMT:</strong> Detected incoming photons and converted them to electrical signals</li>
            <li><strong>UCS30 Software:</strong> Recorded photon spectra and enabled background subtraction</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Data Collection Procedure</h2>
          <ol className="procedure-list">
            <li>Placed the gamma source and absorber inside the collimator system and sealed it to block ambient light</li>
            <li>Ran 15-minute photon collection sessions for each absorber and thickness configuration</li>
            <li>Subtracted background noise using overnight no-source data</li>
            <li>Fitted photon spectra to Gaussian curves to determine peak intensity for each sample</li>
            <li>Repeated for 25 configurations (5 materials × 5 thicknesses)</li>
          </ol>
        </section>

        <section className="project-section">
          <h2>Analysis & Modeling</h2>
          <p>
            The data for each material was modeled using exponential decay of photon intensity as a function of absorber thickness:
          </p>
          <div className="equation-box">
            <p><strong>Equation:</strong> <em>I(x) = I<sub>0</sub> · e<sup>−nσx</sup></em></p>
            <p>where <em>σ</em> is the total photon cross-section and <em>n</em> is the atomic number density</p>
          </div>
          <p>
            From the decay fits, the total cross-section <em>σ</em> was extracted for each material. These values were then fitted as a function of atomic number <em>Z</em> to isolate the Compton cross-section component and estimate α using the Klein-Nishina relation.
          </p>
        </section>

        <section className="project-section">
          <h2>Results & Calculations</h2>
          <ul>
            <li><strong>Compton cross-section:</strong> (2.5 ± 1.5) × 10⁻²⁷ m²</li>
            <li><strong>Fine structure constant:</strong> α = 0.007209 ± 0.000360</li>
            <li>Deviation from accepted value (0.007297): ~1.2% — well within experimental uncertainty</li>
          </ul>

          <div className="results-placeholder">
            <h3>Representative Result Graphs</h3>
            <div className="results-image-container">
              <img src="/media/compton_decay_plot.jpg" alt="Photon Count vs Thickness" className="results-image" />
              <img src="/media/compton_cross_section_fit.jpg" alt="Cross Section vs Atomic Number" className="results-image" />
            </div>
          </div>
        </section>

        <section className="project-section">
          <h2>Uncertainties & Limitations</h2>
          <p>
            The largest sources of uncertainty stemmed from:
          </p>
          <ul>
            <li><strong>Forward scattering:</strong> Photons scattered at small angles still reached the detector</li>
            <li><strong>Material purity:</strong> Impurities in absorbers (notably lead and bismuth) affected cross-section accuracy</li>
            <li><strong>Electron binding energy:</strong> Inner-shell electron effects slightly influenced scattering probabilities</li>
          </ul>
          <p>
            Despite these factors, the final α measurement remained consistent with theory, validating the approach.
          </p>
        </section>

        <section className="project-section">
          <h2>Key Takeaways</h2>
          <p>
            This experiment demonstrated how fundamental constants like α can be derived from direct lab measurements and reinforced techniques in statistical fitting, uncertainty propagation, and quantum radiation detection.
          </p>
          <p>
            The project also provided hands-on experience with radioactive sources, particle detectors, and data modeling pipelines — foundational skills for both experimental physics and instrumentation engineering.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ComptonScatteringProject;
