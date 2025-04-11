// src/components/ResumeForm.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import './ResumeForm.css';

const ResumeForm = ({ onSubmit, isLoading }) => {
  const [bulletPoint, setBulletPoint] = useState('');
  const [tone, setTone] = useState('action-oriented');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bulletPoint.trim()) {
      onSubmit(bulletPoint, tone);
    }
  };

  return (
    <div className="resume-form-container">
      <div className="form-header">
        <h2>Transform Your Resume Bullets</h2>
        <p>Paste your current resume bullet point and select a tone to make it more impactful</p>
      </div>

      <form onSubmit={handleSubmit} className="resume-form">
        <div className="form-group">
          <label htmlFor="bulletPoint">Resume Bullet Point</label>
          <textarea
            id="bulletPoint"
            value={bulletPoint}
            onChange={(e) => setBulletPoint(e.target.value)}
            placeholder="Example: Managed a team of designers to create website mockups"
            required
            rows={5}
          />
        </div>

        <div className="form-group">
          <label htmlFor="tone">Select Tone</label>
          <div className="select-wrapper">
            <select
              id="tone"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
            >
              <option value="action-oriented">Action-Oriented</option>
              <option value="recruiter-friendly">Recruiter-Friendly</option>
              <option value="technical">Technical</option>
            </select>
          </div>
        </div>

        <div className="tone-description">
          {tone === 'action-oriented' && (
            <p>Emphasizes strong action verbs and dynamic achievements</p>
          )}
          {tone === 'recruiter-friendly' && (
            <p>Uses industry terminology and keywords that appeal to recruiters and ATS systems</p>
          )}
          {tone === 'technical' && (
            <p>Highlights technical skills, tools, and methodologies with specific terminology</p>
          )}
        </div>

        <button 
          type="submit" 
          className="submit-button" 
          disabled={isLoading || !bulletPoint.trim()}
        >
          {isLoading ? 'Rewriting...' : 'Rewrite Bullet Point'}
        </button>
      </form>
    </div>
  );
};

ResumeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default ResumeForm;