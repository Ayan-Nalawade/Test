import React from 'react';

const About: React.FC = () => {
  return (
    <main className="main-content">
      <h1>How it Works</h1>
      <div className="about-container">
        <section className="about-section">
          <h2>Transform Your Documentation</h2>
          <p>
            DocsGPT is an innovative tool that helps you understand and navigate through documentation
            with the power of AI. Simply provide a URL to your documentation, and we'll transform it
            into an interactive, searchable knowledge base.
          </p>
        </section>
        <section className="about-section">
          <h2>Key Features</h2>
          <ul>
            <li>Intelligent document processing</li>
            <li>Natural language understanding</li>
            <li>Quick and accurate responses</li>
            <li>Easy integration with existing documentation</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default About; 