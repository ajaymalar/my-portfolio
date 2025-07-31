// src/pages/Home.js
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Hello, I'm Ajay Malar 👋</h1>
      <p>A passionate Computer Science student at MIT, Anna University</p>
      <p>I build web apps, explore AI, and solve problems with code.</p>

      <a
        href="https://drive.google.com/file/d/1zVa4vDtUjc6Iv9XltlMHzR36mTbpPGJl/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
      >
        📄 View Resume
      </a>
    </div>
  );
}

export default Home;
