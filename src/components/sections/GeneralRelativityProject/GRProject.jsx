import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './GRProject.css';

const GRProject = () => {
  return (
    <div className="gr-project">
      <div className="project-header">
        <h1>General Relativity Tensor Calculator</h1>
        <div className="github-repo-link">
          <a 
            href="https://github.com/joaopbicalho/General-Relativity" 
            className="github-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span>View Repository</span>
          </a>
        </div>
      </div>

      <div className="project-content">
        <section className="project-section">
          <h2>Project Overview</h2>
          <p>
            As part of my coursework in <strong>General Relativity</strong>, I developed
            computational tools for tensor calculations and spacetime analysis. Calculations in 
            general relativity can be extremely long, tedious, and time-consuming, which is why 
            most researchers use mathematical tools and calculators for computing important quantities 
            such as Riemann curvature tensors and Christoffel coefficients. This project demonstrates 
            a simple Python script that can perform all these calculations automatically given a 
            specific spacetime metric being studied. I used this code extensively throughout my 
            coursework to solve and analyze different kinds of black holes and tidal forces 
            associated with them.
          </p>
        </section>

        <section className="project-section">
          <h2>Tensor Calculations & Field Equations</h2>
          
          <h3>Einstein Field Equations</h3>
          <p>The fundamental equation of General Relativity relates spacetime curvature to matter and energy:</p>
          <div className="equation-display">
            <span className="equation-large">
              <em>R</em><sub>μν</sub> - <span className="fraction">
                <span className="numerator">1</span>
                <span className="denominator">2</span>
              </span><em>g</em><sub>μν</sub><em>R</em> = <span className="fraction">
                <span className="numerator">8π<em>G</em></span>
                <span className="denominator"><em>c</em><sup>4</sup></span>
              </span><em>T</em><sub>μν</sub>
            </span>
          </div>
          <p className="equation-description">
            Where <em>R</em><sub>μν</sub> is the Ricci tensor, <em>g</em><sub>μν</sub> is the metric tensor, 
            <em>R</em> is the scalar curvature, and <em>T</em><sub>μν</sub> is the stress-energy tensor.
          </p>

          <h3>Christoffel Symbols</h3>
          <p>The connection coefficients that describe how coordinates change in curved spacetime:</p>
          <div className="equation-display">
            <span className="equation-large">
              Γ<sup>μ</sup><sub>αβ</sub> = <span className="fraction">
                <span className="numerator">1</span>
                <span className="denominator">2</span>
              </span><em>g</em><sup>μν</sup>(∂<sub>α</sub><em>g</em><sub>νβ</sub> + ∂<sub>β</sub><em>g</em><sub>να</sub> - ∂<sub>ν</sub><em>g</em><sub>αβ</sub>)
            </span>
          </div>

          <h3>Riemann Curvature Tensor</h3>
          <p>The fundamental measure of spacetime curvature:</p>
          <div className="equation-display">
            <span className="equation-large equation-compact">
              <em>R</em><sup>ρ</sup><sub>σμν</sub> = ∂<sub>μ</sub>Γ<sup>ρ</sup><sub>νσ</sub> - ∂<sub>ν</sub>Γ<sup>ρ</sup><sub>μσ</sub> + Γ<sup>ρ</sup><sub>μλ</sub>Γ<sup>λ</sup><sub>νσ</sub> - Γ<sup>ρ</sup><sub>νλ</sub>Γ<sup>λ</sup><sub>μσ</sub>
            </span>
          </div>
        </section>

        <section className="project-section">
          <h2>Computational Implementation</h2>
          
          <h3>Numerical Methods</h3>
          <p>
            Developed Python-based tools for symbolic and numerical tensor calculations:
          </p>
          <ul className="implementation-list">
            <li><strong>Symbolic Computation:</strong> SymPy for exact tensor manipulations</li>
            <li><strong>Metric Calculations:</strong> Automated computation of Christoffel symbols</li>
            <li><strong>Curvature Analysis:</strong> Riemann and Ricci tensor calculations</li>
            <li><strong>Geodesic Integration:</strong> Numerical solutions for particle trajectories</li>
          </ul>

          <h3>Key Calculations Performed</h3>
          <div className="calculation-grid">
            <div className="calc-item">
              <h4>Metric Components</h4>
              <p>Computation of g<sub>μν</sub> for various spacetime geometries</p>
            </div>
            <div className="calc-item">
              <h4>Connection Coefficients</h4>
              <p>Derivation of Γ<sup>μ</sup><sub>αβ</sub> from metric tensors</p>
            </div>
            <div className="calc-item">
              <h4>Curvature Tensors</h4>
              <p>Full Riemann tensor components and contractions</p>
            </div>
            <div className="calc-item">
              <h4>Field Equations</h4>
              <p>Verification of Einstein's equations for known solutions</p>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
};

export default GRProject;