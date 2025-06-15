// src/pages/Skills.js
import './Skills.css';

function Skills() {
  return (
    <div className="skills">
      <h2>My Skills</h2>

      <div className="skill-section">
        <h3>Programming Languages</h3>
        <ul>
          <li>C</li>
          <li>C++</li>
          <li>Java</li>
          <li>Python</li>
        </ul>
      </div>

      <div className="skill-section">
        <h3>Web & Frameworks</h3>
        <ul>
          <li>React</li>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
        </ul>
      </div>

      <div className="skill-section">
        <h3>Database & Tools</h3>
        <ul>
          <li>MySQL, Oracle SQL, MariaDB</li>
          <li>Git & GitHub</li>
          <li>VS Code</li>
          <li>Power BI, Excel</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
