import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  return (
    <div  className="projects-container">
      <div id="projects" className="projects-title">
        <h1>Projects</h1>
      </div>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card">
          <img src="/FUTURE_FS_01/library.png" alt="E-commerce Platform" className="project-img" />
          <h3>E-commerce Platform</h3>
          <p>
            A full-stack e-commerce application built with React.js, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.
          </p>
          <a
            href="https://github.com/kavinbalaji/ecommerce-platform"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FontAwesomeIcon icon={faGithub} /> View Code
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src="/FUTURE_FS_01/portfolio.png" alt="Task Management App" className="project-img" />
          <h3>Task Management App</h3>
          <p>
            A collaborative task management application with real-time updates, built using React, Express.js, and Socket.io for seamless team collaboration.
          </p>
          <a
            href="https://github.com/kavinbalaji/task-manager"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FontAwesomeIcon icon={faGithub} /> View Code
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img src="/FUTURE_FS_01/ProfilePic.png" alt="Weather Dashboard" className="project-img" />
          <h3>Weather Dashboard</h3>
          <p>
            A responsive weather application that provides real-time weather data and forecasts using OpenWeather API, built with React and styled with Tailwind CSS.
          </p>
          <a
            href="https://github.com/kavinbalaji/weather-dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FontAwesomeIcon icon={faGithub} /> View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;