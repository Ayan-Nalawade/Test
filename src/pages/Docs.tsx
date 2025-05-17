import React from 'react';

const Docs: React.FC = () => {
  return (
    <main className="main-content">
      <div className="docs-container">
        <input
          type="url"
          placeholder="Enter documentation URL"
          className="docs-input"
        />
        <button className="custom-button">
          Process Documentation
        </button>
      </div>
    </main>
  );
};

export default Docs; 