import React from "react";
import { FaGithub } from 'react-icons/fa';
import "./MuseEEGProject.css";

export default function MuseEEGProject() {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>Real-Time EEG Acquisition with Muse Headband</h1>
        <p className="project-subtitle">Real-time EEG data acquisition and processing from Muse headband via UDP/OSC</p>
      </div>

      <div className="project-content">
        <section className="project-section">
          <h2>Overview</h2>
          <p>
            This project enables real-time acquisition and processing of raw EEG signals from the Muse Headband using Python. 
            Although Muse's mobile app uses proprietary signal processing, it does not expose raw EEG data to users. 
            This solution bypasses that limitation by capturing OSC-formatted EEG packets via UDP and processing them in Python.
          </p>
        </section>

        <section className="project-section">
          <h2>Technologies Used</h2>
          <ul>
            <li><strong>Python</strong> – Core implementation</li>
            <li><strong>UDP + OSC</strong> – Data reception</li>
            <li><strong>MNE-Python</strong> – Filtering and spectral analysis</li>
            <li><strong>NumPy</strong> – Signal manipulation</li>
            <li><strong>Muse Headband</strong> – EEG hardware</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Motivation & Applications</h2>
          <p>
            The Muse Headband is a consumer-grade EEG device capable of capturing brain activity via four electrodes (TP9, AF7, AF8, TP10). 
            However, access to this data is restricted within their ecosystem. This project opens up direct access to EEG signals, 
            enabling applications such as brain-computer interfaces (BCIs), neurofeedback, meditation tracking, and real-time machine learning pipelines.
          </p>
        </section>

        <section className="project-section">
          <h2>Architecture & Data Flow</h2>
          <p>
            EEG data from the Muse Headband is broadcast to a phone via BLE (Bluetooth Low Energy) and forwarded over Wi-Fi to a PC using the Muse app's
            OSC streaming functionality. A custom Python script listens on a UDP socket, decodes OSC messages, and extracts EEG samples from each channel.
          </p>
        </section>

        <section className="project-section">
          <h2>Filtering & Spectral Analysis</h2>
          <p>
            After capturing the data, the system applies:
          </p>
          <ul>
            <li>Band-pass filtering (0.1–15 Hz) using an IIR filter</li>
            <li>Notch filtering at 60 Hz to remove powerline noise</li>
            <li>Welch's method to estimate the power spectral density (PSD)</li>
            <li>Computation of average band powers: theta (4–8 Hz), alpha (8–12 Hz), beta (12–15 Hz), gamma (30–40 Hz)</li>
          </ul>
          <div className="equation-box">
            <p><strong>Power Spectral Density (PSD):</strong> Estimated using Welch's method</p>
            <div className="equation-display">
              <span className="equation-large">
                <em>P</em>(<em>f</em>) = <span className="fraction">
                  <span className="numerator">1</span>
                  <span className="denominator"><em>N</em></span>
                </span> ∑<sub><em>i</em>=1</sub><sup><em>N</em></sup> |<em>FFT</em>(segment<sub><em>i</em></sub>)|²
              </span>
            </div>
            <p className="equation-explanation">
              Where <em>N</em> is the number of segments, and each segment is windowed and transformed to the frequency domain.
            </p>
          </div>
        </section>

        <section className="project-section">
          <h2>Output Example</h2>
          <p>
            Every few seconds (an epoch), the script outputs updated brainwave band power estimates:
          </p>
          <div className="example-box">
            <pre>
{`Frequency band power (uV^2/Hz):
Theta (4–8 Hz): 3.42
Alpha (8–12 Hz): 5.01
Beta (12–15 Hz): 2.76
Gamma (30–40 Hz): 1.88`}
            </pre>
          </div>
        </section>

        <section className="project-section">
          <h2>Potential Extensions</h2>
          <ul>
            <li>Real-time visualization dashboard with matplotlib or Plotly</li>
            <li>BCI control using SSVEP or motor imagery detection</li>
            <li>Online integration with deep learning models (e.g., for mental state classification)</li>
          </ul>
        </section>

          <div className="github-repo-link">
            <a 
              href="https://github.com/joaopbicalho/EEG-Muse" 
              className="github-link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span>View Repository</span>
            </a>
          </div>
      </div>
    </div>
  );
}
