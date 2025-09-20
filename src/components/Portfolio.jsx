import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, User, Briefcase, GraduationCap, ChevronDown, Home, FileText } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page) => {
    setCurrentPage(page);
  };

  const projects = [
    {
      title: "WeatherNow",
      tech: "React.js, CSS, OpenWeatherMap API",
      description: "Responsive React.js application that fetches real-time weather data with live updates for temperature, humidity, and wind conditions. Features location-based search functionality.",
      link: "https://weather-now1-0i9r.onrender.com",
      highlights: ["Real-time weather data", "State management with Hooks", "Location-based search"]
    },
    {
      title: "Crypto Price Tracker",
      tech: "React.js, CSS, Coin API",
      description: "Real-time cryptocurrency price tracking app with interactive search and display interface for efficient price information discovery.",
      link: "https://cryptoapplive.onrender.com",
      highlights: ["Live cryptocurrency data", "Interactive search interface", "Dynamic UI updates"]
    },
    {
      title: "E-Commerce Platform",
      tech: "React.js, React Router DOM, CSS",
      description: "Responsive e-commerce application with smooth product management, dynamic routing for product details, and seamless navigation between pages.",
      link: "https://react-e-martapp.onrender.com",
      highlights: ["Product management", "Dynamic routing", "Responsive design"]
    }
  ];

  const skills = {
    "Programming Languages": ["C", "Python"],
    "Web Technologies": ["HTML", "CSS", "JavaScript", "React.js", "Redux", "React Router DOM", "REST API"],
    "Version Control": ["Git", "GitHub"]
  };

  // Navigation Component
  const Navigation = () => (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-logo">Shaik Karimulla</h1>
        
        <div className="nav-menu">
          {[
            { id: 'home', label: 'Home', icon: Home },
            { id: 'about', label: 'About', icon: User },
            { id: 'education', label: 'Education', icon: GraduationCap },
            { id: 'skills', label: 'Skills', icon: Code },
            { id: 'projects', label: 'Projects', icon: Briefcase },
            { id: 'contact', label: 'Contact', icon: Mail }
          ].map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`nav-btn ${currentPage === item.id ? 'nav-btn-active' : ''}`}
              >
                <IconComponent size={18} />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );

  // Home Page
  const HomePage = () => (
    <div className="home-page">
      <div className="home-container">
        {/* Profile Image Container */}
        <div className="profile-image-container">
          <img 
            src="/Photo.jpg" 
            alt="Shaik Karimulla"
            className="profile-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentNode.innerHTML = '<div class="profile-fallback"><svg width="80" height="80" fill="white" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>';
            }}
          />
        </div>
        
      
        
        <h1 className="home-title">Shaik Karimulla</h1>
        <h2 className="home-subtitle">Aspiring Software Developer</h2>
        <p className="home-description">
          Passionate about creating responsive web applications using React.js and modern web technologies. 
          Ready to contribute to innovative projects and grow in the software development industry.
        </p>
        
        <div className="home-buttons">
          <a href="mailto:karimulla9673@gmail.com" className="btn btn-primary">
            <Mail size={20} />
            Contact Me
          </a>
          <a href="https://github.com/karimulla9673-oss" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <Github size={20} />
            GitHub
          </a>
          <button onClick={() => navigate('projects')} className="btn btn-secondary">
            <Briefcase size={20} />
            View My Work
          </button>
        </div>
        
        <button onClick={() => navigate('about')} className="scroll-btn">
          <ChevronDown size={30} />
        </button>
      </div>
    </div>
  );

  // About Page
  const AboutPage = () => (
    <div className="page about-page">
      <div className="container">
        <h2 className="page-title">About Me</h2>
        <div className="about-grid">
          <div className="about-card">
            <User size={80} />
            <h3>Software Developer</h3>
            <p>Passionate about clean code and user experience</p>
          </div>
          
          <div className="about-content">
            <h3 className="about-heading">Hello! I'm Karimulla</h3>
            <p className="about-text">
              I'm an aspiring software developer with hands-on experience in creating responsive web applications. 
              My expertise lies in React.js and modern web technologies, with a strong foundation in integrating 
              RESTful APIs and collaborative development using Git.
            </p>
            <p className="about-text">
              Currently pursuing B.Tech in Electronics and Communication Engineering, I'm passionate about 
              combining my technical knowledge with creative problem-solving to build innovative web solutions.
            </p>
            
            <div className="contact-links">
              <a href="mailto:karimulla9673@gmail.com" className="contact-link">
                <Mail size={20} />
                karimulla9673@gmail.com
              </a>
              <a href="tel:+919515275291" className="contact-link">
                <Phone size={20} />
                +91 9515275291
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Education Page
  const EducationPage = () => (
    <div className="page education-page">
      <div className="container">
        <h2 className="page-title">Education</h2>
        
        <div className="education-container">
          <div className="education-primary">
            <div className="education-header">
              <GraduationCap size={30} />
              <h3>B.Tech in Electronics and Communication Engineering</h3>
            </div>
            <p className="education-institute">Sree Venkateswara College of Engineering, Nellore</p>
            <p className="education-year">2021 - 2025</p>
          </div>
          
          <div className="education-grid">
            <div className="education-card">
              <h3>Intermediate (MPC)</h3>
              <p className="education-institute">Krishna Chaitanya Junior College, Nellore</p>
              <p className="education-year">2019 - 2021</p>
            </div>
            
            <div className="education-card">
              <h3>SSC</h3>
              <p className="education-institute">Sri Vivekananda E.M High School, Buchireddypalem</p>
              <p className="education-year">2018 - 2019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Skills Page
  const SkillsPage = () => (
    <div className="page skills-page">
      <div className="container">
        <h2 className="page-title">Technical Skills</h2>
        
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h3 className="skill-category-title">{category}</h3>
              <div className="skill-tags">
                {skillList.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Projects Page
  const ProjectsPage = () => (
    <div className="page projects-page">
      <div className="container">
        <h2 className="page-title">My Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  <ExternalLink size={20} />
                </a>
              </div>
              
              <p className="project-tech">{project.tech}</p>
              <p className="project-description">{project.description}</p>
              
              <div className="project-highlights">
                <h4>Key Features:</h4>
                <ul>
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
              
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-btn">
                <Code size={16} />
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Contact Page
  const ContactPage = () => (
    <div className="page contact-page">
      <div className="contact-container">
        <h2 className="page-title">Get In Touch</h2>
        <p className="contact-description">
          I'm always open to discussing new opportunities, interesting projects, or just having a friendly chat about technology.
        </p>
        
        <div className="contact-grid">
          <a href="mailto:karimulla9673@gmail.com" className="contact-card">
            <Mail size={30} />
            <span>karimulla9673@gmail.com</span>
          </a>
          
          <a href="tel:+919515275291" className="contact-card">
            <Phone size={30} />
            <span>+91 9515275291</span>
          </a>
          
          <a href="https://github.com/karimulla9673-oss" target="_blank" rel="noopener noreferrer" className="contact-card">
            <Github size={30} />
            <span>GitHub</span>
          </a>
          
          <a href="https://linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="contact-card">
            <Linkedin size={30} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );

  // Main render function
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'education': return <EducationPage />;
      case 'skills': return <SkillsPage />;
      case 'projects': return <ProjectsPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="portfolio">
      <Navigation />
      {renderCurrentPage()}
      
      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Shaik Karimulla. Built with React.js and passion for clean code.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
