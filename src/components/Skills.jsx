import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  SiJavascript, SiReact, SiNodedotjs, SiPython, SiGit, 
  SiMysql, SiHtml5, SiCss3, SiCplusplus, SiC, SiArduino, SiAmazonwebservices,
  SiEspressif
} from 'react-icons/si';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');

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

  const filterVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const skills = [
    { name: 'HTML', icon: SiHtml5, color: '#E34F26', level: 95, category: 'frontend' },
    { name: 'CSS', icon: SiCss3, color: '#1572B6', level: 90, category: 'frontend' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 90, category: 'frontend' },
    { name: 'React', icon: SiReact, color: '#61DAFB', level: 85, category: 'frontend' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 75, category: 'backend' },
    { name: 'Python', icon: SiPython, color: '#3776AB', level: 80, category: 'programming' },
    { name: 'C++', icon: SiCplusplus, color: '#00599C', level: 70, category: 'programming' },
    { name: 'C', icon: SiC, color: '#A8B9CC', level: 75, category: 'programming' },
    { name: 'Arduino', icon: SiArduino, color: '#00979D', level: 80, category: 'iot' },
    { name: 'ESP32', icon: SiEspressif, color: '#E7352C', level: 75, category: 'iot' },
    { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900', level: 70, category: 'tools' },
    { name: 'Git', icon: SiGit, color: '#F05032', level: 85, category: 'tools' },
  ];

  const filterOptions = [
    { key: 'all', label: 'All Skills', count: skills.length },
    { key: 'frontend', label: 'Frontend', count: skills.filter(s => s.category === 'frontend').length },
    { key: 'backend', label: 'Backend', count: skills.filter(s => s.category === 'backend').length },
    { key: 'programming', label: 'Programming', count: skills.filter(s => s.category === 'programming').length },
    { key: 'iot', label: 'IoT', count: skills.filter(s => s.category === 'iot').length },
    { key: 'tools', label: 'Tools', count: skills.filter(s => s.category === 'tools').length },
  ];

  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  const carouselSettings = {
    dots: true,
    infinite: filteredSkills.length > 5,
    speed: 500,
    slidesToShow: Math.min(5, filteredSkills.length),
    slidesToScroll: 1,
    autoplay: filteredSkills.length > 5,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: Math.min(4, filteredSkills.length),
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, filteredSkills.length),
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(2, filteredSkills.length),
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(2, filteredSkills.length),
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

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
            {filterOptions.map((option) => (
              <button
                key={option.key}
                onClick={() => setActiveFilter(option.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === option.key
                    ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-200/80 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-300/80 dark:hover:bg-white/15 hover:scale-105'
                }`}
              >
                {option.label}
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeFilter === option.key
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-300/50 dark:bg-white/20 text-gray-600 dark:text-gray-400'
                }`}>
                  {option.count}
                </span>
              </button>
            ))}
          </motion.div>

          <motion.div 
            key={activeFilter}
            variants={filterVariants}
            initial="hidden"
            animate="visible"
            className="skills-carousel mb-12"
          >
            {filteredSkills.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-500 dark:text-gray-400">
                  <svg className="mx-auto h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-lg font-medium">No skills found</p>
                  <p className="text-sm">Try selecting a different filter</p>
                </div>
              </div>
            ) : filteredSkills.length <= 3 ? (
              // Grid layout for small number of skills
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {filteredSkills.map((skill, index) => (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.03,
                      y: -3,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative backdrop-blur-md bg-gray-200/80 dark:bg-white/10 border border-gray-300/60 dark:border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:bg-gray-250/70 dark:hover:bg-white/15 hover:backdrop-blur-xl transition-all duration-300 cursor-pointer h-full min-h-[160px]"
                  >
                    <div className="flex flex-col items-center text-center justify-center h-full">
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl backdrop-blur-sm" />
                  </motion.div>
                ))}
              </div>
            ) : (
              // Carousel layout for larger number of skills
              <Slider {...carouselSettings}>
                {filteredSkills.map((skill, index) => (
                  <div key={`${skill.name}-${index}`} className="px-3">
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.03,
                        y: -3,
                        transition: { duration: 0.2 }
                      }}
                      className="group relative backdrop-blur-md bg-gray-200/80 dark:bg-white/10 border border-gray-300/60 dark:border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:bg-gray-250/70 dark:hover:bg-white/15 hover:backdrop-blur-xl transition-all duration-300 cursor-pointer h-full min-h-[160px]"
                    >
                      <div className="flex flex-col items-center text-center justify-center h-full">
                        <div 
                          className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl backdrop-blur-sm" />
                    </motion.div>
                  </div>
                ))}
              </Slider>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;