// src/pages/Contact.js
import './Contact.css';
import { FaEnvelope, FaGithub, FaCode } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-container">
      <h2>📬 Get in Touch</h2>
      <p>I'm always open to new connections, collaborations, or just a good tech chat!</p>

      <div className="contact-cards">

        <a
          href="mailto:ajaymalar0601@gmail.com"
          className="contact-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="icon" />
          <span>ajaymalar0601@gmail.com</span>
        </a>

        <a
          href="https://github.com/ajaymalar"
          className="contact-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
          <span>GitHub Profile</span>
        </a>

        <a
          href="https://leetcode.com/u/XSsbq1HWHn/"
          className="contact-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCode className="icon" />
          <span>LeetCode Practice</span>
        </a>

      </div>
    </div>
  );
}

export default Contact;
