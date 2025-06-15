// src/pages/Contact.js
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to connect, feel free to reach out:</p>

      <div className="contact-links">
        <a href="mailto:ajaymalaro60@gmail.com" target="_blank" rel="noopener noreferrer">
          📧 ajaymalaro60@gmail.com
        </a>
        <a href="https://github.com/ajaymalar" target="_blank" rel="noopener noreferrer">
          💻 GitHub
        </a>
        <a href="https://leetcode.com/u/XSsbq1HWHn/" target="_blank" rel="noopener noreferrer">
          🧠 LeetCode
        </a>
      </div>
    </div>
  );
}

export default Contact;
