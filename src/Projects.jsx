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
          <img src="/FUTURE_FS_01/library.png" alt="Library Portal" className="project-img" />
          <h3>Library Portal</h3>
          <p>
            A library Portal built using React.js, CSS, and SQL. Includes user-friendly components like book cards, navigation bar and guest access functionality.
          </p>
          <a
            href="https://github.com/Vishalsongara77/local-library-portal"
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
