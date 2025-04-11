// src/components/RewrittenBullet.jsx
import PropTypes from 'prop-types';
import './RewrittenBullet.css';
import { useState } from 'react';

const RewrittenBullet = ({ text }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rewritten-bullet-container">
      <h3>Your Improved Bullet Point</h3>
      <div className="bullet-content">
        <p>{text}</p>
      </div>
      <div className="action-buttons">
        <button 
          className="copy-button" 
          onClick={handleCopy}
        >
          {copied ? 'Copied!' : 'Copy to Clipboard'}
        </button>
      </div>
    </div>
  );
};

RewrittenBullet.propTypes = {
  text: PropTypes.string.isRequired
};

export default RewrittenBullet;