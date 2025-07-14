import { motion } from 'framer-motion';
import { 
  SiJavascript, SiReact, SiNodedotjs, SiPython, SiGit, 
  SiMysql, SiHtml5, SiCss3, SiCplusplus, SiC, SiArduino
} from 'react-icons/si';
import { SiEspressif } from 'react-icons/si';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const skills = [
    { name: 'HTML', icon: SiHtml5, color: '#E34F26', level: 95 },
    { name: 'CSS', icon: SiCss3, color: '#1572B6', level: 90 },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 90 },
    { name: 'React', icon: SiReact, color: '#61DAFB', level: 85 },
    { name: 'Python', icon: SiPython, color: '#3776AB', level: 80 },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 75 },
    { name: 'C++', icon: SiCplusplus, color: '#00599C', level: 70 },
    { name: 'C', icon: SiC, color: '#A8B9CC', level: 75 },
    { name: 'Arduino', icon: SiArduino, color: '#00979D', level: 80 },
    { name: 'ESP32', icon: SiEspressif, color: '#E7352C', level: 75 },
    { name: 'Git', icon: SiGit, color: '#F05032', level: 85 },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="skills-carousel mb-12">
            <Slider {...carouselSettings}>
              {skills.map((skill, index) => (
                <div key={index} className="px-3">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative backdrop-blur-md bg-gray-200/80 dark:bg-white/10 border border-gray-300/60 dark:border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:bg-gray-300/80 dark:hover:bg-white/15 hover:backdrop-blur-xl transition-all duration-300 cursor-pointer h-full min-h-[160px]"
                  >
                    <div className="flex flex-col items-center text-center justify-center h-full">
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200"
                        style={{ backgroundColor: `${skill.color}20` }}
                      >
                        <skill.icon 
                          className="w-14 h-14" 
                          style={{ color: skill.color }}
                        />
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                        {skill.name}
                      </h3>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl backdrop-blur-sm" />
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;