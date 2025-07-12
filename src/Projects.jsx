import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projects = [
  {
    title: "Music Genre Classification",
    description: "A machine learning project to automatically classify music tracks into genres based on audio features.",
    technologies: ["Python", "Librosa", "scikit-learn", "TensorFlow"],
    githubUrl: "https://github.com/kavinbalaji2005/MusicGenreClassification"
  },
  {
    title: "Library Management System",
    description: "An application made using Python for managing all facets of library operations.",
    technologies: ["Python", "Tkinter", "Pandas", "OpenPyXL"],
    githubUrl: "https://github.com/kavinbalaji2005/LibraryManagementSystem"
  },
  {
    title: "Cricket Player Manager",
    description: "A full-stack web application designed to help cricket clubs and teams efficiently manage their player database.",
    technologies: ["React.js", "Node.js", "Express.js", "SQL", "Sequelize"],
    githubUrl: "https://github.com/kavinbalaji2005/PlayerManagementDB"
  },
  {
    title: "Smart Appliance Manager",
    description: "An IoT-based home automation system to automatically control and monitor appliances in real time.",
    technologies: ["C++", "MQTT", "Node-RED", "Blynk"],
    githubUrl: "https://github.com/kavinbalaji2005/SmartApplianceManagerIoT"
  }
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  };

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