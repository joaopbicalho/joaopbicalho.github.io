import React from 'react';
import './MuonLifetimeProject.css';

const MuonLifetimeProject = () => {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>Muon Lifetime Measurement</h1>
        <p className="project-subtitle">Advanced Physics Laboratory - Winter 2025</p>
      </div>

      <div className="project-content">
        <section className="project-section">
          <h2>Introduction & Background</h2>
          <p>
            Muons are second-generation leptons—heavier cousins of electrons—that decay via the weak nuclear force. 
            With a rest-frame lifetime of about 2.2 µs, muons serve as ideal probes for studying weak interaction dynamics and testing the Standard Model of particle physics.
          </p>
          <p>
            In this experiment, muons produced by cosmic rays were detected using a liquid scintillator, and their decay times were recorded. The goal was to extract their lifetime by analyzing the statistical distribution of the time between muon arrivals and decay events. 
          </p>
          <p>
            Cosmic rays—primarily high-energy protons and helium nuclei—collide with atoms in the Earth's atmosphere and generate secondary particles like pions, which then decay into muons:
          </p>
          <div className="equation-box">
            <p><strong>Equation 1:</strong></p>
            <p>π<sup>+</sup> → µ<sup>+</sup> + ν<sub>µ</sub>, &nbsp;&nbsp; π<sup>−</sup> → µ<sup>−</sup> + ν̄<sub>µ</sub></p>
          </div>
          <p>
            The primary decay mode of the muon itself is also mediated by the weak force:
          </p>
          <div className="equation-box">
            <p><strong>Equation 2:</strong></p>
            <p>µ<sup>+</sup> → e<sup>+</sup> + ν<sub>e</sub> + ν̄<sub>µ</sub></p>
          </div>
        </section>

        <section className="project-section">
          <h2>Experimental Setup</h2>
          <div className="equipment-overview">
            <div className="equipment-image-container">
              <img src="/media/Muon_full3.jpg" alt="Liquid Scintillator Muon Detection Setup" className="equipment-image" />
            </div>
            <p>
              The detection system consisted of a large <strong>liquid scintillator</strong> cylinder connected to <strong>three photomultiplier tubes (PMTs)</strong> and powered by a +1600V supply via a high-voltage potentiometer. 
              The signals from all PMTs were summed and sent to a <strong>Siglent SDS1204X-E oscilloscope</strong>, which was connected to a PC for real-time waveform acquisition.
            </p>
          </div>

          <ul>
            <li><strong>Signal detection:</strong> Muons and decay electrons excite the scintillator, producing light pulses captured by the PMTs</li>
            <li><strong>Waveform processing:</strong> A Python script identified valid muon decay events from oscilloscope frames using amplitude and timing thresholds</li>
            <li><strong>Trigger conditions:</strong> Two pulses within 8 µs above -4.8 mV threshold, captured at 500 MSa/s with 1 µs/div</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Data Acquisition</h2>
          <p>
            Data collection ran continuously for approximately three days. Each detected muon event was logged by the Python-LabVIEW interface, resulting in a text file containing hundreds of valid decay intervals. 
            These were binned into a histogram and fit to an exponential decay model to extract the characteristic muon lifetime.
          </p>
          <p>
            The decay process follows a probability distribution described by:
          </p>
          <div className="equation-box">
            <p><strong>Equation 3:</strong></p>
            <p>N(t) = N<sub>0</sub> · e<sup>−t/τ</sup> + b</p>
          </div>
          <p>Where N(t) is the number of decays at time t, τ is the muon lifetime, and b accounts for background noise.</p>
        </section>

        <section className="project-section">
          <h2>Results & Analysis</h2>
          <ul>
            <li><strong>Measured muon lifetime:</strong> τ = 2.03 ± 0.19 µs</li>
            <li><strong>Theoretical value:</strong> τ = 2.1969811 ± 0.0000022 µs</li>
            <li>The result is consistent with the accepted value, especially accounting for effects such as nuclear capture in the scintillator medium.</li>
          </ul>

          <div className="project-section">
            <h3>Decay Histogram</h3>
            <div className="results-image-container">
              <img src="/media/muon_result.png" alt="Muon Decay Time Histogram with Fit" className="results-image" />
            </div>
          </div>

          <p>
            The primary source of systematic error is due to <strong>muon capture by nuclei</strong> in the scintillator, which shortens the apparent lifetime for negative muons. Reflections or noise in the oscilloscope cable may also contribute to false positives, though these are mitigated by trigger thresholds and amplitude filters.
          </p>
        </section>

        <section className="project-section">
          <h2>Key Takeaways</h2>
          <p>
            This experiment demonstrated that even without a particle accelerator, fundamental particle physics can be probed using natural sources such as cosmic rays. 
            The accurate extraction of the muon's lifetime confirms our understanding of weak decay processes and showcases practical skills in:
          </p>
          <ul>
            <li>Scintillation and photomultiplier-based detection</li>
            <li>Oscilloscope configuration and digital triggering</li>
            <li>Python automation for event detection and peak-finding</li>
            <li>Statistical fitting of exponential decay models</li>
          </ul>
          <p>
            Overall, the experiment validates the Standard Model prediction for the muon lifetime and reinforces the use of liquid scintillators in subatomic physics research.
          </p>
        </section>

        <section className="project-section">
          <h2>Formal Report</h2>
          <p>
            For complete experimental details, methodology, and comprehensive analysis, please refer to the formal laboratory report:
          </p>
          <div className="report-link-container">
            <a href="/media/muon_report.pdf" target="_blank" rel="noopener noreferrer" className="report-link">
              View Formal Report
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MuonLifetimeProject;
