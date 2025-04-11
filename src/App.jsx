// src/App.jsx
import { useState } from 'react';
import './App.css';
import ResumeForm from './components/ResumeForm';
import RewrittenBullet from './components/RewrittenBullet';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [rewrittenBullet, setRewrittenBullet] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (bulletPoint, tone) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch('http://localhost:5000/api/resume/rewrite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bulletPoint, tone }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to rewrite bullet point');
      }
      
      setRewrittenBullet(data.data.rewrittenBullet);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <Header />
      <main className="container">
        <ResumeForm onSubmit={handleSubmit} isLoading={isLoading} />
        {error && <div className="error-message">{error}</div>}
        {rewrittenBullet && !error && (
          <RewrittenBullet text={rewrittenBullet} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;