import React from 'react';

const Contact: React.FC = () => {
  const email = 'docsGPT@gmail.com';
  const subject = 'Inquiry about DocsGPT';
  const body = 'Hi DocsGPT team,\n\nI would like to inquire about...';
  
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <main className="main-content contact-main">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <a href={mailtoLink} className="contact-link">
              {email}
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <span className="contact-text">123-456-7890</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact; 