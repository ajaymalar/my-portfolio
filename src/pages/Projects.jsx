// src/pages/Projects.js
import './Projects.css';

const projects = [
  {
    title: 'Railway Assist Chatbot',
    description: 'An AI chatbot to guide users through Indian Railway schemes and benefits.',
    tech: 'React, Python, Ollama, ChromaDB',
    link: 'https://github.com/ajaymalar/Railway-assist-chatbot'
  },
  {
    title: 'House Price Prediction',
    description: 'ML app to predict house prices based on key features using Random Forest.',
    tech: 'Python, Gradio, Colab',
    link: 'https://github.com/ajaymalar/House_price_predictions'
  },
  {
    title: 'Sentiment Analysis for Marketing',
    description: 'Classifies user review sentiments using DistilBERT NLP model.',
    tech: 'Python, DistilBERT, Gradio',
    link: 'https://github.com/ajaymalar/Sentiment-analysis-for-marketting'
  },
  {
    title: 'Airline Management System',
    description: 'Java GUI app to manage airline bookings, cancellation, and user info.',
    tech: 'Java, MySQL, JDBC',
    link: '#'
  },
  {
    title: 'Supermarket Database',
    description: 'DBMS project for managing inventory and customer transactions.',
    tech: 'MariaDB, HeidiSQL, draw.io',
    link: '#'
  },
];

function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <p><strong>Tech:</strong> {proj.tech}</p>
            {proj.link !== '#' && (
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
