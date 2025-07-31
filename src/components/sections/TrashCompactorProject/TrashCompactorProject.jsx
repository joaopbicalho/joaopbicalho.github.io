import React from 'react';

export default function TrashCompactorProject() {
  return (
    <div className="design-project-container">
      <h1>Optimizing Municipal Waste Management in Bangladesh</h1>
      <p className="subtitle">Final Engineering Design Project – APS 112</p>

      <section>
        <h2>Project Overview</h2>
        <p>
          This project was developed as part of the final deliverable for APS112, the first-year Engineering Design course at the University of Toronto. Our team, 1012A, was challenged to solve a real-world infrastructure issue presented by Engineers Without Borders: the inefficiencies in municipal solid waste (MSW) management in Bangladesh. The final product was a design concept for an affordable and operable trash compaction solution tailored to Dhaka’s urban waste context.
        </p>
        <div className="image-placeholder">[Insert system overview diagram or contextual image]</div>
      </section>

      <section>
        <h2>Problem Context</h2>
        <p>
          Dhaka, the capital of Bangladesh, faces severe waste collection and management challenges due to rapid urbanization, insufficient infrastructure, and inefficiencies in collection logistics. A major issue is the low density of collected waste, which causes inefficient use of transport resources and increases operational costs.
        </p>
      </section>

      <section>
        <h2>Design Goals</h2>
        <ul>
          <li>Increase waste collection efficiency by reducing transport volume</li>
          <li>Minimize manual labor while maintaining accessibility and operability</li>
          <li>Ensure low cost and maintainability using locally available materials</li>
          <li>Integrate seamlessly with existing ward-level waste management infrastructure</li>
        </ul>
      </section>

      <section>
        <h2>Proposed Design: Manual Trash Compactor</h2>
        <p>
          The core of our solution is a lever-actuated mechanical trash compactor capable of doubling the density of municipal waste collected in carts. It operates without electricity and uses a simple mechanical advantage to allow workers to compress waste with minimal effort.
        </p>
        <ul>
          <li>Steel frame and sliding compaction plate</li>
          <li>Removable compaction chamber designed to fit ward-level collection trolleys</li>
          <li>Human-powered lever with adjustable fulcrum for force optimization</li>
          <li>Drainage tray to handle liquid runoff from organic waste</li>
        </ul>
        <div className="image-placeholder">[Insert CAD design or compactor rendering]</div>
      </section>

      <section>
        <h2>Feasibility Analysis</h2>
        <p>
          The team performed force analysis on the lever system, showing that a worker could apply a compaction force sufficient to halve the volume of the waste. The proposed materials were sourced locally, and assembly required no specialized tools, reducing barriers to implementation.
        </p>
      </section>

      <section>
        <h2>Impact & Implementation</h2>
        <p>
          By reducing waste volume prior to pickup, this compactor design enables more efficient trips by municipal trucks and helps reduce street overflow. Our design is scalable, suitable for other high-density urban areas in developing countries facing similar challenges.
        </p>
        <div className="image-placeholder">[Insert field application or prototype test image]</div>
      </section>

      <section>
        <h2>Skills & Tools Used</h2>
        <ul>
          <li>Mechanical design and prototyping</li>
          <li>Statics and force calculations</li>
          <li>Human-centered design principles</li>
          <li>Socioeconomic feasibility evaluation</li>
        </ul>
      </section>

      <footer>
        <p>Team 1012A – APS112 Engineering Design Project • University of Toronto</p>
      </footer>
    </div>
  );
}
