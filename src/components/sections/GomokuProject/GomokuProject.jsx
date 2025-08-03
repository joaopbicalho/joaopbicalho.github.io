import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './GomokuProject.css';

const GomokuAIProject = () => {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>Gomoku AI</h1>
        <p className="project-subtitle">
          A Python-based implementation of a Gomoku-playing AI with evaluation logic, board search heuristics, and game loop handling.
        </p>
      </div>

      <div className="project-content">
        <section className="project-section">
          <h2>Project Overview</h2>
          <p>
            This project involved building a Gomoku AI player capable of competing against a human in a terminal-based interface. 
            The AI uses heuristic evaluation strategies to detect board states, evaluate move options, and search for the most promising plays.
          </p>
        </section>

        <section className="project-section">
          <h2>Core Functionality</h2>
          <ul>
            <li><strong>Board Setup:</strong> A dynamic 8x8 board is generated and rendered as a text-based grid.</li>
            <li><strong>Move Evaluation:</strong> The AI uses heuristic evaluation functions to prioritize moves based on open, semi-open, and closed sequences.</li>
            <li><strong>Win Detection:</strong> Game state is constantly evaluated to detect winning patterns using custom-defined logic.</li>
            <li><strong>Player Interaction:</strong> Human players input their move, after which the AI plays automatically.</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Heuristic Scoring System</h2>
          <div className="equation-box">
            <p>Score =</p>
            <p>
              -10000 × (open<sub>w</sub><sup>4</sup> + semi_open<sub>w</sub><sup>4</sup>) +
              500 × open<sub>b</sub><sup>4</sup> +
              50 × semi_open<sub>b</sub><sup>4</sup> −
              100 × open<sub>w</sub><sup>3</sup> −
              30 × semi_open<sub>w</sub><sup>3</sup> +
              50 × open<sub>b</sub><sup>3</sup> +
              10 × semi_open<sub>b</sub><sup>3</sup> +
              (open<sub>b</sub><sup>2</sup> + semi_open<sub>b</sub><sup>2</sup>) −
              (open<sub>w</sub><sup>2</sup> + semi_open<sub>w</sub><sup>2</sup>)
            </p>
          </div>
          <p>
            The AI evaluates all potential positions and selects the one with the highest score as the next move. This score is based on a custom-designed function penalizing the opponent's threats and maximizing its own opportunities.
          </p>
        </section>

        <section className="project-section">
          <h2>Testing and Validation</h2>
          <p>
            A set of unit tests was implemented to ensure correctness of each function:
          </p>
          <ul className="procedure-list">
            <li><code>test_is_empty</code>: Validates board state detection.</li>
            <li><code>test_is_bounded</code>: Ensures sequence boundary recognition.</li>
            <li><code>test_detect_row</code> and <code>test_detect_rows</code>: Verify row detection and classification.</li>
            <li><code>test_search_max</code>: Checks if the AI selects the optimal move.</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Skills Demonstrated</h2>
          <ul>
            <li>Python programming and object-oriented design</li>
            <li>Heuristic algorithm design</li>
            <li>Test-driven development (TDD)</li>
            <li>Terminal-based UI for interactive gameplay</li>
            <li>Logical reasoning for board game strategy</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Sample Board Output</h2>
          <div className="setup-image-container">
            <img
              className="setup-image"
              src="media/gomoku_board.png"
              alt="Text-based Gomoku board in terminal"
            />
          </div>
          <p>
            The board is displayed in a grid format, with players taking turns to place their pieces, b and w represent black and white pieces, respectively. The AI evaluates the board after each move and responds accordingly.
          </p>
        </section>

        <div className="github-repo-link">
          <a 
            href="https://github.https://github.com/joaopbicalho/CSC180/tree/adf73afda18e91f912d649b915118af9e9a6a69f/gomoku/joaopbicalho/CodingInPython/tree/adf73afda18e91f912d649b915118af9e9a6a69f/gomoku" 
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
};

export default GomokuAIProject;
