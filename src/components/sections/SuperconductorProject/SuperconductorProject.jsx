import React from 'react';

// High Temperature Superconductor Experiment Page

export default function SuperconductorProject() {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>High-T<sub>c</sub> Superconductors</h1>
        <p className="project-subtitle">
          Exploring zero-resistance quantum states and the Meissner effect in YBCO-based materials.
        </p>
      </div>

      <div className="project-content">
        <section className="project-section">
          <h2>Theoretical Background</h2>
          <p>
            Superconductivity is a quantum mechanical phenomenon where certain materials exhibit exactly zero electrical resistance
            and expel magnetic fields (the <em>Meissner effect</em>) below a critical temperature <em>T<sub>c</sub></em>. In high-T<sub>c</sub>
            superconductors like YBa<sub>2</sub>Cu<sub>3</sub>O<sub>7-δ</sub> (YBCO), Cooper pairs form due to lattice distortions creating
            effective electron-electron attraction.
          </p>
          <div className="equation-box">
            <p>BCS Energy Gap Relation</p>
            <p>2E<sub>g</sub>(T, H) ≈ (7/2)k<sub>B</sub>T<sub>c</sub></p>
          </div>
          <p>
            These materials are Type II superconductors, which support a mixed phase between two critical fields:
          </p>
          <div className="equation-box">
            <p>Critical Fields for Type II Superconductors</p>
            <p>H<sub>c1</sub> ≈ Φ<sub>0</sub> / πλ², &nbsp;&nbsp; H<sub>c2</sub> ≈ Φ<sub>0</sub> / πξ²</p>
          </div>
          <p>
            Where Φ<sub>0</sub> = h/2e is the magnetic flux quantum, λ is the London penetration depth, and ξ is the coherence length.
          </p>
        </section>

        <section className="project-section">
          <h2>Goals of the Experiment</h2>
          <ul>
            <li>Test for superconductivity in YBCO and BSCCO samples using magnetic levitation.</li>
            <li>Measure electrical resistance as a function of temperature using a 4-probe setup.</li>
            <li>Familiarize with lock-in amplifier techniques for low-signal AC measurements.</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Instrumentation</h2>
          <ul>
            <li><strong>Lock-in Amplifier:</strong> For precise resistance measurements using AC signals.</li>
            <li><strong>Sand Cryostat:</strong> Maintains stable low temperatures using liquid nitrogen.</li>
            <li><strong>Four-Probe Setup:</strong> Eliminates lead/contact resistance for accurate measurements.</li>
            <li><strong>Thermocouple:</strong> Measures temperature directly at the sample surface.</li>
          </ul>
          
          {/* Simplified image container similar to Muon project */}
          <div className="project-image-wrapper">
            <img 
              src="/media/htck_full.jpg" 
              alt="HTCK Overview" 
              className="project-image"
            />
            <p className="image-caption">
              An overview of the high-temperature superconducting setup, showcasing the cryostat and measurement instruments.
            </p>
          </div>
        </section>

        <section className="project-section">
          <h2>Results & Observations</h2>
          <p>
            Due to hardware malfunctions, a complete temperature vs. resistance curve could not be acquired. However, levitation of
            the YBCO sample above a strong neodymium magnet was observed when cooled with liquid nitrogen, confirming the presence
            of the Meissner effect.
          </p>
          <p>
            Lock-in amplifier measurements showed clear signal extraction at low frequencies (&lt; 100 Hz), verifying setup functionality
            and contributing to familiarity with AC-based resistance detection.
          </p>
        </section>

        <section className="project-section">
          <h2>Key Takeaways</h2>
          <ul>
            <li>Gained hands-on experience with cryogenic safety protocols and liquid nitrogen handling.</li>
            <li>Learned to operate a lock-in amplifier and interpret phase-sensitive AC measurements.</li>
            <li>Confirmed Type II superconductivity via levitation and partial magnetic expulsion effects.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
