import React, { useState } from 'react';

const Docs: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsLoading(true);
    setProgress(0);

    // Simulate loading progress for ~1.5 seconds
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 99) {
          clearInterval(interval);
          return 99;
        }
        // Increment by ~33% every 500ms to reach ~99% in 1.5s
        return prev + 33;
      });
    }, 500);
  };

  return (
    <main className="main-content">
      <div className="docs-container">
        <form onSubmit={handleUrlSubmit}>
          <input
            type="url"
            placeholder="Enter documentation URL"
            className="docs-input"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <button type="submit" className="custom-button">
            Process Documentation
          </button>
        </form>
        {isLoading && (
          <div className="loading-bar-container">
            <div 
              className="loading-bar" 
              style={{ width: `${progress}%` }}
            />
            <div className="loading-text">{Math.round(progress)}%</div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Docs; 