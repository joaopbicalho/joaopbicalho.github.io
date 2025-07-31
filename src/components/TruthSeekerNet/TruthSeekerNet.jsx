import React from 'react';
import './TruthSeekerNet.css';

const TruthSeekerNet = () => {
  return (
    <div className="truthseeker-container">
      <h1>TruthSeekerNet: EEG-Based Lie Detection</h1>
      <p className="subtitle">Final Project Report for APS360 - Deep Learning (Group Project)</p>

      <section>
        <h2>Introduction</h2>
        <p>
          This project aimed to develop a deep learning model capable of detecting deception from EEG signals. Inspired by recent work in brainwave-based lie detection, we leveraged the LieWaves dataset to train our own model, TruthSeekerNet. The project was completed as a group final report for the University of Toronto course APS360 (Deep Learning).
        </p>
        <div className="image-placeholder-regular">
          <img src={`${import.meta.env.BASE_URL}media/overall_diagram.png`} alt="System Overview Diagram" />
        </div>
      </section>

      <section>
        <h2>Data Processing</h2>
        <p>
          EEG data from the LieWaves dataset (recorded from 27 subjects using a 5-channel Emotiv EEG headset) was preprocessed using MNE-Python. Signals were bandpass filtered (0.5–45Hz) and notch filtered (50/60Hz) to remove noise. Power Spectral Density (PSD) was computed using Welch's method across 90 frequency bins. The resulting 2-second segments were formatted into sequences of shape (5, 90, 1) for CNN+LSTM training. To test generalization, we also collected our own EEG data using a Muse headset and applied the same preprocessing pipeline with slight adjustments.
        </p>
      </section>

      <section>
        <h2>TruthSeekerNet Architecture</h2>
        <div className="image-placeholder-regular">
          <img src={`${import.meta.env.BASE_URL}media/lie_cnn.png`} alt="TruthSeekerNet Architecture Diagram" />
        </div>
        <p>
          TruthSeekerNet is a CNN+LSTM hybrid. It begins with two convolutional layers (16 and 32 filters) followed by max pooling. The output is reshaped and passed into an LSTM with 64 hidden units. Finally, a fully connected layer performs binary classification (lie/truth). Training used the Adam optimizer (lr=0.001) and Binary Cross-Entropy Loss. Early stopping with high patience helped mitigate overfitting.
        </p>
      </section>

      <section>
        <h2>Evaluation on New EEG Data</h2>
        <div className="image-placeholder">
          <img src={`${import.meta.env.BASE_URL}media/new_data_testing.jpg`} alt="Evaluation Results" />
        </div>
        <p>
          Data collected with the Muse EEG headset was processed similarly to LieWaves. Despite using different hardware, channel layout, and test protocols, the model generalized reasonably well. Accuracy on this new data exceeded the original dataset, suggesting improved detectability due to simplified conditions.
        </p>
      </section>

      <section>
        <h2>Results</h2>
        <p>
          On the LieWaves dataset, the model achieved 60.0% validation accuracy and 58.5% on the test set. When applied to newly collected EEG data, it achieved 65.85% accuracy, likely due to more consistent stimulus timing during the custom trials. The model exhibited a bias toward classifying responses as deceptive.
        </p>
        <div className="image-placeholder">
          <img src={`${import.meta.env.BASE_URL}media/confusion_matrix_lie.png`} alt="Confusion Matrix for Lie Detection" />
        </div>
      </section>

      <section>
        <h2>Discussion</h2>
        <p>
          EEG-based lie detection remains a difficult classification task due to signal noise, human variability, and dataset limitations. Our model faced challenges with overfitting and class imbalance but showed encouraging generalization with new data. Key takeaways include the importance of preprocessing and regularization. The project's difficulty also stems from the complexity of EEG signals and ethical implications in analyzing brainwave data.
        </p>
      </section>

      <footer>
        <a href="https://github.com/antoinevilain001/aps360project" target="_blank" rel="noopener noreferrer">
          View Project on GitHub
        </a>
      </footer>
    </div>
  );
};

export default TruthSeekerNet;
