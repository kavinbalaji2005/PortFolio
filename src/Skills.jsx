import Slider from "react-slick";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaBootstrap,
  FaPython,
  FaJava,
  FaNodeJs
} from "react-icons/fa";
import { SiMysql, SiVite, SiCplusplus, SiMongodb, SiExpress, SiTailwindcss, SiPostgresql } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
  { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
  { name: "React", icon: <FaReact color="#61dafb" /> },
  { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
  { name: "Express", icon: <SiExpress color="#000000" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "MySQL", icon: <SiMysql color="#00758f" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
  { name: "Python", icon: <FaPython color="#3776ab" /> },
  { name: "Java", icon: <FaJava color="#007396" /> },
  { name: "C++", icon: <SiCplusplus color="#00599C" /> },
  { name: "Git", icon: <FaGitAlt color="#f34f29" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
  { name: "Vite", icon: <SiVite color="#646cff" /> },
];


const Skills = () => {

    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,        // show 6 at once
    slidesToScroll: 2,
    
    arrows: true,
    
  };

 return (
    <div  className="skills-section">
      <h2 id="skills" className="skills-title">My Skills</h2>
      <Slider {...settings} className="skills-carousel">
        {skills.map((skill, index) => (
            <div className="skill-container" key={index}>
                <div className="skill-card">
                    <div className="skill-icon">{skill.icon}</div>
                    <p className="skill-name">{skill.name}</p>
                </div>
            </div>
        ))}
      </Slider>
    </div>
  );
};

export default Skills;