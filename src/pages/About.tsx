import React from 'react';

const About: React.FC = () => {
  return (
    <main className="main-content about-main">
      <h1 className="about-title">How it Works</h1>
      <div className="about-container">
        <section className="about-section">
          <div className="about-card">
            <div className="about-icon">🚀</div>
            <h2>Transform Your Documentation</h2>
            <p>
              DocsGPT is an innovative tool that helps you understand and navigate through documentation
              with the power of AI. Simply provide a URL to your documentation, and we'll transform it
              into an interactive, searchable knowledge base.
            </p>
          </div>
        </section>
        <section className="about-section features-section">
          <div className="about-card">
            <div className="about-icon">✨</div>
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <span className="feature-icon">🧠</span>
                <h3>Intelligent Processing</h3>
                <p>Advanced document analysis and understanding</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💬</span>
                <h3>Natural Language</h3>
                <p>Human-like understanding and responses</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">⚡</span>
                <h3>Quick Responses</h3>
                <p>Fast and accurate information retrieval</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔄</span>
                <h3>Easy Integration</h3>
                <p>Seamless documentation integration</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About; 