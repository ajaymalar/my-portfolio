// src/components/Footer.js
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Ajay Malar • All rights reserved</p>
      <div className="footer-links">
        <a href="mailto:ajaymalar0601@gmail.com">📧 Email</a>
        <a href="https://github.com/ajaymalar" target="_blank" rel="noreferrer">💻 GitHub</a>
        <a href="https://leetcode.com/u/XSsbq1HWHn/" target="_blank" rel="noreferrer">🧠 LeetCode</a>
      </div>
    </footer>
  );
}

export default Footer;
