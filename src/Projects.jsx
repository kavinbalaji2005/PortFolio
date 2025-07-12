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
    <div className="projects-section">
      <h2 id="projects" className="projects-title text-heading-1">Projects</h2>
      <div className="projects-carousel-container">
        <Slider {...settings} className="projects-carousel">
          {projects.map((project, index) => (
            <div key={index} className="project-container">
              <div className="project-card">
                <h3 className="project-title text-heading-3">{project.title}</h3>
                <p className="text-body">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag text-caption">{tech}</span>
                  ))}
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <FontAwesomeIcon icon={faGithub} /> View Code
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;