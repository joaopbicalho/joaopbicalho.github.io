import React from 'react';
import './ElectronSpinResonanceProject.css';

const ElectronSpinResonanceProject = () => {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>Electron Spin Resonance (ESR) Spectroscopy</h1>
        <p className="project-subtitle">Advanced Physics Laboratory - Fall 2024</p>
      </div>

      <div className="project-content">
        <section className="project-section">
          <h2>Introduction & Background</h2>
          <p>
            Electron Spin Resonance (ESR), 
            is a phenomenon where resonance transitions occur between magnetic energy levels when 
            electron spin magnetic moments are affected by electromagnetic waves of specified frequency 
            in a magnetic field. This technique is widely used in physics, chemistry, biology, to study the microstructure of substances by probing unpaired electrons and 
            analyzing their interactions with surrounding atoms.
          </p>
          <p>
            ESR provides high sensitivity and resolution as a non-destructive detection technique, 
            making it invaluable for studying paramagnetic substances with unpaired spin magnetic moments, 
            including free radicals, transition metal ions, and molecules with unpaired electrons.
          </p>
        </section>

        <section className="project-section">
          <h2>Experimental Sample: DPPH</h2>
          <p>
            The experiment utilized <strong>DPPH (Di-phenyl-picryl-Hydrazyl)</strong> with molecular 
            formula (C6H5)2N-NC6H2(NO2)3 as the sample. DPPH is a stable organic free radical with 
            an unpaired electron on the second nitrogen atom, making it ideal for ESR studies.
          </p>
          
          <div className="dpph-structure">
            <img src={`${import.meta.env.BASE_URL}media/ESR-DPPH.svg`} alt="DPPH Molecular Structure" className="dpph-image" />
          </div>
          
          <div className="sample-specs">
            <p><strong>Key Properties:</strong></p>
            <ul>
              <li>Standard g-factor: 2.0036</li>
              <li>Only spin angular momentum (orbital momentum quenched)</li>
              <li>Stable free radical </li>
            </ul>
          </div>
        </section>

        <section className="project-section">
          <h2>Resonance Conditions</h2>
          <p>
            The ESR phenomenon occurs when the resonance condition is satisfied:
          </p>
          <div className="equation-box">
            <p><strong>Equation 1:</strong></p>
            <div className="equation-display">
              <span className="equation-large">
                <em>ω</em> = <em>γB</em><sub>0</sub>
                <span style={{ margin: '0 2rem', color: '#0099cc' }}>or</span>
                <em>f</em> = <span className="fraction">
                  <span className="numerator"><em>g</em> μ<sub>B</sub></span>
                  <span className="denominator"><em>h</em></span>
                </span> <em>B</em><sub>0</sub>
              </span>
            </div>
            <p>where <em>ω</em> is the angular frequency, <em>γ</em> is the gyromagnetic ratio, <em>f</em> is the frequency, <em>g</em> is the Lande g-factor, μ<sub>B</sub> is the Bohr magneton, <em>h</em> is Planck's constant, and <em>B</em><sub>0</sub> is the magnetic field</p>
          </div>
          <p>
            For DPPH at microwave frequency 9370 MHz (3 cm wavelength), the required magnetic field 
            strength for resonance is approximately 3342 G. The experiment involved placing the DPPH 
            sample in a rectangular resonance cavity and adjusting the magnetic field to observe 
            resonance absorption peaks.
          </p>
          <p>
            The resonance frequency was precisely measured and tuned using the resonant cavity in the waveguide system. 
            The magnetic field strength was accurately determined using a gaussmeter, while the Bohr magneton (μ<sub>B</sub>) 
            is a known physical constant. Using these experimentally measured values in the resonance condition equation, 
            the Lande g-factor for the DPPH sample was calculated to be <strong>2.06 ± 0.03</strong>, which represents 
            the key experimental result of this investigation.
          </p>
        </section>

        <section className="project-section">
          <h2>Instrumentation & Equipment</h2>
          
          <div className="equipment-overview">
            <div className="equipment-image-container">
              <img src={`${import.meta.env.BASE_URL}media/ESR_full.jpg`} alt="Complete ESR Experimental Setup" className="equipment-image" />
            </div>
            <p>
              The ESR spectrometer setup consists of several integrated components working together to generate, manipulate, and detect microwave signals for electron spin resonance measurements. The complete system shown above includes the microwave source, waveguide assembly, resonance cavity, electromagnet, and detection electronics.
            </p>
          </div>

          <div className="equipment-grid">
            <div className="equipment-category">
              <h3>Microwave System</h3>
              <ul>
                <li><strong>Signal Source:</strong> Solid-state microwave generator operating at ~9.37 GHz for optimal DPPH resonance</li>
                <li><strong>Resonance Cavity:</strong> Rectangular waveguide cavity where the sample is placed for maximum microwave field interaction</li>
                <li><strong>Waveguide Assembly:</strong> Precision-machined components for efficient microwave transmission with minimal losses</li>
                <li><strong>Tuning Piston:</strong> Adjustable short-circuit element for cavity length optimization and resonance matching</li>
                <li><strong>Variable Attenuator:</strong> Power control element for signal level adjustment and sensitivity optimization</li>
              </ul>
            </div>
            <div className="equipment-category">
              <h3>Detection & Measurement</h3>
              <ul>
                <li><strong>Crystal Detector:</strong> Microwave diode for converting high-frequency signals to measurable DC voltages</li>
                <li><strong>Frequency Meter:</strong> Precision instrument for accurate microwave frequency measurement (8.6-9.6 GHz range)</li>
                <li><strong>Oscilloscope:</strong> Real-time signal analysis and waveform visualization for resonance peak detection</li>
                <li><strong>Magic Tee:</strong> 3 dB power splitter/combiner for signal routing and impedance matching</li>
                <li><strong>Stub Tuner:</strong> Impedance matching device for optimal power transfer and standing wave minimization</li>
              </ul>
            </div>
            <div className="equipment-category">
              <h3>Magnetic Field System</h3>
              <ul>
                <li><strong>Electromagnet:</strong> High-stability magnetic field generator with 0-411 mT range (0-2.5 A operation)</li>
                <li><strong>Field Sweep Generator:</strong> 50/60 Hz modulation source for continuous magnetic field scanning</li>
                <li><strong>Phase Controls:</strong> Precision adjustment for synchronization between field sweep and detection system</li>
                <li><strong>Current Control:</strong> High-precision power supply for stable and reproducible magnetic field generation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="project-section">
          <h2>Experimental Procedure</h2>
          <ol className="procedure-list">
            <li><strong>Initial Setup:</strong> I began by configuring the microwave signal source to operate at approximately 9370 MHz and allowed the system to warm up for 20 minutes to ensure stable operation and minimize frequency drift.</li>
            <li><strong>Sample Preparation:</strong> I carefully positioned the DPPH sample at the center of the magnetic field region (91 mm position) to ensure maximum field uniformity and optimal signal strength.</li>
            <li><strong>Cavity Optimization:</strong> Using the short-circuit piston, I adjusted the rectangular resonance cavity length to approximately 134 mm, fine-tuning until I achieved maximum power coupling and minimal reflection.</li>
            <li><strong>Frequency Measurement:</strong> I used the wavelength meter to precisely determine the actual microwave frequency, recording the exact value for subsequent g-factor calculations.</li>
            <li><strong>Resonance Detection:</strong> I swept the magnetic field current from 1.8 to 2.2 A while carefully monitoring the oscilloscope display, watching for the characteristic absorption peaks that indicate ESR resonance.</li>
            <li><strong>Data Collection:</strong> Once I identified the resonance peaks, I measured the g-factor using the resonance condition and analyzed the spectral line width to extract information about the spin relaxation processes.</li>
            <li><strong>Standing Wave Analysis:</strong> I determined the waveguide wavelength λg by systematically measuring the sample position intervals and observing the standing wave pattern variations in the cavity.</li>
          </ol>
        </section>

        <section className="project-section">
          <h2>Measurements & Results</h2>
          <p>
            The experiment successfully demonstrated several important ESR phenomena and measurements:
          </p>
          <ul>
            <li><strong>Lande g-factor determination</strong> for DPPH (expected: 1.95-2.05)</li>
            <li><strong>Spectral line width analysis</strong> for relaxation time calculations</li>
            <li><strong>Standing wave field distribution</strong> in the resonance cavity</li>
            <li><strong>Waveguide wavelength λg</strong> measurement through sample positioning</li>
          </ul> 
          
          <div className="results-placeholder">
            <h3>Experimental Results</h3>
            <div className="results-image-container">
              <img src="/media/ESR_result.jpg" alt="ESR Spectrum and Analysis Results" className="results-image" />
            </div>
          </div>
          
          <div className="error-analysis">
            <p>
              <strong>Error Analysis:</strong> The experimental g-factor of 2.06 ± 0.03 shows a 2.8% deviation from the 
              theoretical value of 2.0036 for a free electron. This slight discrepancy likely arises from environmental 
              factors such as magnetic field inhomogeneities, sample positioning variations, or minor instrumental 
              calibration differences. The precision achieved (±0.03) demonstrates good experimental technique despite 
              these systematic uncertainties.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ElectronSpinResonanceProject;