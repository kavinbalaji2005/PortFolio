import Slider from "react-slick";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaBootstrap
} from "react-icons/fa";
import { SiMysql, SiVite, SiCplusplus } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
  { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
  { name: "React", icon: <FaReact color="#61dafb" /> },
  { name: "MySQL", icon: <SiMysql color="#00758f" /> },
  { name: "C++", icon: <SiCplusplus color="#00599C" /> },
  { name: "Git", icon: <FaGitAlt color="#f34f29" /> },
  { name: "Vite", icon: <SiVite color="#646cff" /> },
];


const Skills = () => {

    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,        // show 5 at once
    slidesToScroll: 2,
    
    arrows: true,
    
  };

 return (
    <div  className="skills-section">
      <h2 id="skills" className="skills-title">My Skills</h2>
      <Slider {...settings} className="skills-carousel">
        {skills.map((skill, index) => (
            <div className="skill-container">
                <div key={index} className="skill-card">
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
