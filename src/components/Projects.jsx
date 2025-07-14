import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiCode, HiGlobeAlt, HiCube } from 'react-icons/hi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const projects = [
    {
      title: 'Music Genre Classification',
      description: 'A machine learning project to automatically classify music tracks into genres based on audio features using advanced ML algorithms.',
      tech: ['Python', 'Librosa', 'scikit-learn', 'TensorFlow'],
      github: 'https://github.com/kavinbalaji2005/MusicGenreClassification',
      icon: HiCode,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Library Management System',
      description: 'An application made using Python for managing all facets of library operations with intuitive GUI and data management.',
      tech: ['Python', 'Tkinter', 'Pandas', 'OpenPyXL'],
      github: 'https://github.com/kavinbalaji2005/LibraryManagementSystem',
      icon: HiCode,
      color: 'from-blue-500 to-teal-500'
    },
    {
      title: 'Cricket Player Manager',
      description: 'A full-stack web application designed to help cricket clubs and teams efficiently manage their player database and statistics.',
      tech: ['React.js', 'Node.js', 'Express.js', 'SQL'],
      github: 'https://github.com/kavinbalaji2005/PlayerManagementDB',
      icon: HiGlobeAlt,
      color: 'from-teal-500 to-green-500'
    },
    {
      title: 'Smart Appliance Manager',
      description: 'An IoT-based home automation system to automatically control and monitor appliances in real time with mobile integration.',
      tech: ['C++', 'MQTT', 'Node-RED', 'Blynk'],
      github: 'https://github.com/kavinbalaji2005/SmartApplianceManagerIoT',
      icon: HiCube,
      color: 'from-orange-500 to-red-500'
    },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-4">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for technology
            </p>
          </motion.div>

          <div className="projects-carousel mb-12">
            <Slider {...carouselSettings}>
              {projects.map((project, index) => (
                <div key={index} className="px-4">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="group backdrop-blur-md bg-gray-200/80 dark:bg-white/10 border border-gray-300/60 dark:border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:bg-gray-300/80 dark:hover:bg-white/15 hover:backdrop-blur-xl transition-all duration-300 h-full"
                  >
                    <div className="relative">
                      <div className={`h-20 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="absolute top-4 right-4">
                          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <project.icon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-300/70 dark:bg-white/15 backdrop-blur-sm border border-gray-400/50 dark:border-white/20 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                          <FaGithub className="w-5 h-5" />
                          <span className="text-sm font-medium">View Code</span>
                        </motion.a>
                      </div>
                    </div>
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

export default Projects;