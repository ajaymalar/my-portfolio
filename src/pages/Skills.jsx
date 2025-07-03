import './Skills.css';
import { FaCode, FaTools, FaDatabase, FaLaptopCode } from 'react-icons/fa';

function Skills() {
  return (
    <div className="skills-container">
      <h2>🌟 My Skills</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <h3><FaCode className="icon" /> Programming Languages</h3>
          <ul>
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3><FaLaptopCode className="icon" /> Web & Frameworks</h3>
          <ul>
            <li>React</li>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3><FaDatabase className="icon" /> Databases</h3>
          <ul>
            <li>MySQL</li>
            <li>Oracle SQL</li>
            <li>MariaDB</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3><FaTools className="icon" /> Tools & Platforms</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Power BI</li>
            <li>Excel, Word, PowerPoint</li>
            <li>QGIS, draw.io</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Skills;
