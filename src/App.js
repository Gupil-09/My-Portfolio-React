// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [scrolled, setScrolled] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Thank you for reaching out!');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: 1,
      title: 'Tempestas',
      description: 'A weather forecasting website that provides real-time weather updates and forecasts for any location.',
      link: 'https://raman-0123.github.io/Tempestas/index.html',
      image: 'photo1.png',
    },
    {
      id: 2,
      title: 'Task Flow Solutions',
      description: 'A website that helps admins of a company to assign tasks to employees and keep track of their progress.',
      link: 'https://gupil-09.github.io/single-page-application/',
      image: 'photo2.png',
    },
    {
      id: 3,
      title: 'Card Guessing Game',
      description: 'An interactive card guessing game that randomly places cards and the player has to guess 2 same cards consecutively.',
      link: 'https://gupil-09.github.io/Card-Guessing-Game/',
      image: 'photo3.png',
    },
    
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo" onClick={() => scrollToSection('hero')}>MyPortfolio</div>
        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            <li onClick={() => scrollToSection('hero')}>Home</li>
            <li onClick={() => scrollToSection('about')}>About</li>
            <li onClick={() => scrollToSection('portfolio')}>Portfolio</li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
        </nav>
      </header>

      <section id="hero" className="hero-section">
        <div className="hero-content">
          <img
            src="my photo.jpg" 
            alt="Gupil Thappa"
            className="profile-pic"
          />
          <h1>Hi, I'm Gupil</h1>
          <p><span className="typing-effect">Web Designer & Developer</span></p>
          <button onClick={() => scrollToSection('portfolio')} className="cta-button">View My Work</button>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          Hi, I am Gupil, a Computer Science student at Chitkara University. I have experience in building responsive websites using HTML, CSS, JavaScript, and React. 
          I am passionate about creating beautiful and user-friendly websites that provide a seamless user experience. 
          I am constantly learning and improving my skills to stay up-to-date with the latest web technologies. 
          I am excited to work on new projects and collaborate with other creatives to bring ideas to life.
        </p>
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>Responsive Design</li>
            <li>UI/UX Design</li>
            <li>React</li>
          </ul>
        </div>
      </section>

      <section id="portfolio" className="portfolio-section">
        <h2>My Work</h2>
        <div className="projects-container">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fas fa-external-link-alt"></i> View Project
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <div className="contact-content">
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-label="Your Name"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-label="Your Email"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              aria-label="Your Message"
            ></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>

          <div className="contact-details">
            <h3>Get in Touch</h3>
            <p><i className="fas fa-user"></i> <strong>Name:</strong> Gupil Thappa</p>
            <p><i className="fas fa-phone"></i> <strong>Phone:</strong> +91 9878317337</p>
            <p><i className="fas fa-envelope"></i> <strong>Email:</strong> gupilthappa@gmail.com</p>
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <div className="social-links">
          <a href="https://github.com/Gupil-09" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/gupil-thappa-5629562b2/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Gupil. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
