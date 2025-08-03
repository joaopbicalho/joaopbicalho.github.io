import React from "react";
import { FaGithub } from 'react-icons/fa';
import "./SemanticSimilarityProject.css";

export default function SemanticSimilarityProject() {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>Semantic Similarity System</h1>
       
        <p className="project-subtitle">
          Natural Language Processing – SAT style vocabulary question solver
        </p> 
        <div className="github-repo-link">
          <a 
            href="https://github.com/joaopbicalho/CSC180/tree/adf73afda18e91f912d649b915118af9e9a6a69f/synonym" 
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
            This project implements an intelligent system that can solve
            vocabulary questions similar to those found in standardized exams
            like the SAT or TOEFL. Specifically, the system selects the word
            most semantically similar to a given target word among multiple
            choices. It does this by computing the semantic similarity between
            the target and each option using a cosine similarity metric on
            context-based word vectors.
          </p>
        </section>

        <section className="project-section">
          <h2>Building Semantic Descriptors</h2>
          <p>
            The training process begins by splitting each book into individual
            sentences. Each sentence is further broken down into lowercase words
            with punctuation removed. A semantic descriptor dictionary is then
            constructed, where each key is a unique word from the corpus, and
            the corresponding value is a dictionary of co-occurrence counts —
            how many times other words have appeared in the same sentence.
          </p>
          <p>
            For example, given the sentence:{" "}
            <code>"The quick brown fox jumps over the lazy dog"</code>, the
            system processes the sentence and adds the following (simplified)
            entries:
          </p>
          <div className="example-box">
            <code>
              semantic_descriptors["quick"] = {"{"} "the": 1, "brown": 1, "fox":
              1, "jumps": 1, "over": 1, "lazy": 1, "dog": 1 {"}"}
            </code>
            <br />
            <code>
              semantic_descriptors["fox"] = {"{"} "quick": 1, "the": 1, "brown":
              1, "jumps": 1, "over": 1, "lazy": 1, "dog": 1 {"}"}
            </code>
          </div>
          <p>
            This means "quick" and "fox" are associated with one another because
            they co-occurred in the same sentence, and their co-occurrence
            frequency is incremented each time this happens again.
          </p>
        </section>

        <section className="project-section">
          <h2>Semantic Similarity Metric</h2>
          <p>
            The similarity between two words is determined by comparing their
            context vectors using cosine similarity. This technique measures the
            angle between two vectors: the closer the angle, the more similar
            the meanings.
          </p>
          <div className="equation-box">
            <em>sim</em>(<strong>u</strong>, <strong>v</strong>) = 
            <span className="fraction">
              <span className="numerator"><strong>u</strong> • <strong>v</strong></span>
              <span className="denominator">||<strong>u</strong>|| × ||<strong>v</strong>||</span>
            </span>
          </div>
          <p className="equation-explanation">
            For example, if <strong>u</strong> represents the word "fox" and <strong>v</strong> represents "quick":
          </p>
          <ul className="explanation-list">
            <li>The <strong>dot product</strong> (<strong>u</strong> • <strong>v</strong>) counts shared contexts—how many words appear in sentences with both "fox" and "quick"</li>
            <li>The <strong>magnitude</strong> ||<strong>u</strong>|| represents the square root of the sum of squared co-occurrence counts for "fox" with all words</li>
            <li>Dividing by the magnitudes normalizes for common words, preventing frequent words from dominating the similarity scores</li>
          </ul>
          <p>
            This approach captures semantic relationships even when words rarely appear together directly. For instance, "wolf" and "fox" might have high similarity by sharing contexts like "forest," "hunt," and "animal," even if they rarely co-occur in the same sentence.
          </p>
          <p>
            The result is a numerical score — higher values indicate greater similarity. For unknown words not found in the dictionary, a default low score is assigned.
          </p>
        </section>

        <section className="project-section">
          <h2>Training Data</h2>
          <p>
            The system was trained using a small number of large, publicly
            available text corpora — specifically, full-text classic books
            downloaded from open sources like Project Gutenberg. Examples of
            training books include <em>Pride and Prejudice</em> by Jane Austen
            and <em>Frankenstein</em> by Mary Shelley. These books were
            processed entirely as plain <code>.txt</code> files.
          </p>
        </section>

        <section className="project-section">
          <h2>Evaluation and Accuracy</h2>
          <p>
            The system is evaluated using a test file containing vocabulary
            questions in the format:
          </p>
          <div className="example-box">
            <code>word correct_answer option1 option2 option3 option4</code>
          </div>
          <p>
            For each line, the system chooses the option with the highest
            similarity score and compares it to the correct answer. Overall
            accuracy is calculated based on the number of correct predictions.
            An implementation using only Pride and Prejudice and Frankenstein was able to 
            achieve an accuracy of approximately <strong>87%</strong> on a
            test set of 100 questions.
          </p>
        
        </section>

        <section className="project-section">
          <h2>Reflections</h2>
          <p>
            Despite its simplicity, the system shows how distributional semantics
            can be applied to infer relationships between words. It is
            interpretable, scalable to large corpora, and a strong introduction
            to more advanced vector-space NLP models.
          </p>
        </section>
      </div>
    </div>
  );
}
