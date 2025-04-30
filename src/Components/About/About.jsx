import React from 'react';
import { motion } from 'framer-motion';
import img from './img/img.jpg';

const techLogos = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
  { src: 'https://vitejs.dev/logo-with-shadow.png', alt: 'Vite' }, 
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', alt: 'TypeScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', alt: 'Firebase' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', alt: 'Google Cloud' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg', alt: 'Android Studio' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', alt: 'MongoDB' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', alt: 'MySQL' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', alt: 'Angular' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', alt: 'Next.js' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-5">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10">
          {/* Profile Image */}
          <motion.div
            className="w-full md:w-1/3 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={img}
              alt="Gabriel Malanday"
              className="rounded-lg shadow-lg w-full h-auto hover:scale-105 transition duration-300"
              whileHover={{ rotate: [0, 3, -3, 0] }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full md:w-2/3 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Hey, I'm Gab
            </h3>
            <p className="mb-4 leading-relaxed">
            I am a Fullstack developer with hands on experiences with cloud services to make your website from concept to reality, I am profiencent with the said languages such as 
            Javascript, Typescript, and Python. I also do this with a framework such as ReactJS, AngularJS, and nextJS. I also use vite to do fast paced and fast performance loading. 
            My database specialties are based on mySQL and noSQL databases such as Firebase, MongoDB, and mySQL. With this I am able to create a fullstack development website with possibilities.
            I am willing to work individually, and as well with a Team. I am eager to do multitasking and I am specific with details especially with website building and design.
            </p>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-6">
              <a
                href="https://github.com/gabkun"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-lg flex items-center transition duration-300"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                  className="w-5 h-5 mr-2"
                />
                Visit my GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-malanday-18619b178/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-lg flex items-center transition duration-300"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                  className="w-5 h-5 mr-2"
                />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Logos with Labels & Animation */}
        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center group"
              variants={itemVariants}
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-12 h-12 mb-2"
              />
              <span className="text-sm text-gray-800 dark:text-white group-hover:underline transition duration-200">
                {logo.alt}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
