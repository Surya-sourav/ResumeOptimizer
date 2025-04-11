// src/components/Footer.jsx
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Smart Resume Rewriter</p>
      </div>
    </footer>
  );
};

export default Footer;