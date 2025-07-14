import { FaAws, FaGoogle, FaMicrosoft, FaReact } from 'react-icons/fa';
import { SiCoursera, SiUdemy, SiHackerrank, SiCodecademy } from 'react-icons/si';
import { HiExternalLink } from 'react-icons/hi';

const Certifications = () => {
  
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
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'March 2024',
      icon: FaAws,
      color: '#FF9900',
      progress: 100,
      link: 'https://aws.amazon.com/certification/',
      skills: ['Cloud Architecture', 'AWS Services', 'Infrastructure Design']
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      date: 'February 2024',
      icon: FaReact,
      color: '#61DAFB',
      progress: 100,
      link: 'https://developers.facebook.com/docs/react/',
      skills: ['React.js', 'Component Design', 'State Management']
    },
    {
      title: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      date: 'January 2024',
      icon: FaGoogle,
      color: '#4285F4',
      progress: 95,
      link: 'https://cloud.google.com/certification',
      skills: ['GCP Services', 'Cloud Computing', 'DevOps']
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'Coursera',
      date: 'December 2023',
      icon: SiCoursera,
      color: '#0056D3',
      progress: 100,
      link: 'https://coursera.org',
      skills: ['MERN Stack', 'Database Design', 'API Development']
    },
    {
      title: 'Python Data Science',
      issuer: 'Udemy',
      date: 'November 2023',
      icon: SiUdemy,
      color: '#EC5252',
      progress: 100,
      link: 'https://udemy.com',
      skills: ['Python', 'Data Analysis', 'Machine Learning']
    },
    {
      title: 'JavaScript Algorithms',
      issuer: 'HackerRank',
      date: 'October 2023',
      icon: SiHackerrank,
      color: '#2EC866',
      progress: 90,
      link: 'https://hackerrank.com',
      skills: ['Algorithm Design', 'Problem Solving', 'JavaScript']
    },
    {
      title: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      date: 'September 2023',
      icon: FaMicrosoft,
      color: '#0078D4',
      progress: 100,
      link: 'https://docs.microsoft.com/en-us/learn/azure/',
      skills: ['Azure Services', 'Cloud Fundamentals', 'Security']
    },
    {
      title: 'Node.js Development',
      issuer: 'Codecademy',
      date: 'August 2023',
      icon: SiCodecademy,
      color: '#1F4056',
      progress: 95,
      link: 'https://codecademy.com',
      skills: ['Node.js', 'Express.js', 'Backend Development']
    },
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-4">
              Certifications & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              Continuous learning and professional development through industry-recognized certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:bg-white/20 dark:hover:bg-white/10 hover:backdrop-blur-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${cert.color}20` }}
                    >
                      <cert.icon 
                        className="w-6 h-6" 
                        style={{ color: cert.color }}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <HiExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Progress
                    </span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {cert.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full h-2 border border-white/10">
                    <div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: cert.color, width: `${cert.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-white/30 dark:bg-white/10 backdrop-blur-sm border border-white/20 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="text-right">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {cert.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;