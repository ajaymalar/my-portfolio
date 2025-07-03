import './About.css';

function About() {
  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: 'auto', lineHeight: '1.8' }}>
      <h2>About Me</h2>

      <p>
        Hello! I'm <strong>Ajay Malar M</strong>, a passionate and motivated Computer Science and Engineering student at
        <strong> Madras Institute of Technology (MIT), Anna University</strong>. With a CGPA of 9.22, I strive for academic
        excellence and constantly push myself to explore the practical side of computer science.
      </p>

      <p>
        I'm proficient in languages like <strong>C, C++, Java, and Python</strong>, and enjoy building meaningful projects.
        I’ve worked on AI-driven applications, full-stack platforms, and database systems. My toolkit includes
        <strong> React, MySQL, Oracle SQL, JavaScript, Bootstrap, Git, Gradio, and more</strong>.
      </p>

      <h3>Projects & Passion</h3>
      <p>
        I love building things that solve real-world problems. Some of my notable works include:
      </p>
      <ul>
        <li><strong>Railway Assist</strong> – A chatbot using Ollama & ChromaDB to recommend Indian Railway schemes based on user input</li>
        <li><strong>House Price Prediction System</strong> – Built with ML models, evaluated on Colab using Gradio interface</li>
        <li><strong>Sentiment Analysis for Marketing</strong> – DistilBERT-based review analyzer for gaming product sentiment</li>
        <li><strong>Airline Management System</strong> – Java and MySQL based end-to-end airline booking interface</li>
      </ul>

      <h3>Events, Leadership & Volunteering</h3>
      <p>
        I'm a core organizer of the department symposium <strong>Prayatna</strong>, and proudly led the flagship coding event
        <strong> Code Heist</strong>, which saw over 100 participants and stood out as the top-ranked technical event.
      </p>
      <p>
        My leadership also extends to community service—I served as an <strong>NSS volunteer</strong> at Govt. Hr. Sec. School,
        Somangalam, and was the <strong>Design Coordinator</strong> for a motivational art initiative for orphaned children.
      </p>

      <h3>Achievements & Personality</h3>
      <p>
        Beyond academics, I’m a <strong>two-time state-level karate medalist</strong> 🥈—a testament to my discipline, focus,
        and commitment. I approach both coding and martial arts with the same intensity and respect.
      </p>

      <h3>Looking Ahead</h3>
      <p>
        My interests lie at the intersection of <strong>Web Development, AI, and Data Engineering</strong>. I'm currently exploring
        tools like QGIS and Power BI to complement my technical toolkit. My goal is to become a well-rounded engineer
        capable of contributing meaningfully to cutting-edge innovations and impactful software solutions.
      </p>

      <p>
        I believe in teamwork, continuous learning, and building solutions that create value. Let's connect and build something awesome!
      </p>
    </div>
  );
}

export default About;
