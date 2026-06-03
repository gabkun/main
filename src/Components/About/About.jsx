import React from "react";
import { motion } from "framer-motion";
import img from "./img/img.jpg";

const webDevelopmentSkills = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "React",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    alt: "Vite",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    alt: "TypeScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    alt: "Angular",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    alt: "Next.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "Node.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    alt: "Express.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    alt: "Firebase",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    alt: "MongoDB",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    alt: "MySQL",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    alt: "Python",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    alt: "Google Cloud",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
    alt: "Android Studio",
  },
];

const technicalTools = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    alt: "Jira",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
    alt: "Trello",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg",
    alt: "Magento",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/sap.svg",
    alt: "SAP",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/looker.svg",
    alt: "Looker",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/servicenow.svg",
    alt: "ServiceNow",
  },
  {
    src: "https://developer.apple.com/assets/elements/icons/testflight/testflight-128x128_2x.png",
    alt: "TestFlight",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    alt: "Firebase App Distribution",
  },

  // Use custom text badges for these
  {
    src: null,
    alt: "WebEngage",
  },
  {
    src: null,
    alt: "uCube.ai",
  },
];

const professionalSkills = [
  "Full Stack Development",
  "Responsive Web Design",
  "REST API Integration",
  "UI/UX Collaboration",
  "Agile Methodology",
  "Scrum",
  "Problem Solving",
  "Project Management",
  "Cross-functional Teamwork",
  "Quality Assurance",
  "Cloud Deployment",
  "Mobile App Distribution",
  "Technical Documentation",
  "Stakeholder Communication",
  "Multitasking",
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
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10">
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
              I am a Full Stack Developer with experience in building scalable
              web and mobile applications. My expertise includes JavaScript,
              TypeScript, and Python, along with modern frameworks such as
              React, Angular, and Next.js. I have hands-on experience with cloud
              platforms, databases, analytics tools, project management
              platforms, and enterprise solutions.
            </p>

            <p className="mb-4 leading-relaxed">
              I enjoy transforming concepts into production-ready applications
              while focusing on performance, usability, maintainability, and
              business value. I thrive both independently and in collaborative
              Agile environments, bringing strong problem-solving and
              communication skills to every project.
            </p>

            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Professional Skills
              </h4>

              <div className="flex flex-wrap gap-3">
                {professionalSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-8">
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

        <h3 className="text-2xl font-bold text-center mt-16 mb-8 text-gray-800 dark:text-white">
          Web Development Skills
        </h3>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {webDevelopmentSkills.map((logo, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center group"
              variants={itemVariants}
              whileHover={{ scale: 1.15 }}
            >
              <img src={logo.src} alt={logo.alt} className="w-12 h-12 mb-2" />
              <span className="text-sm text-gray-800 dark:text-white">
                {logo.alt}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <h3 className="text-2xl font-bold text-center mt-16 mb-8 text-gray-800 dark:text-white">
          Technical Tools & Platforms
        </h3>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {technicalTools.map((tool, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center group"
              variants={itemVariants}
              whileHover={{ scale: 1.15 }}
            >
              <img src={tool.src} alt={tool.alt} className="w-12 h-12 mb-2" />
              <span className="text-sm text-center text-gray-800 dark:text-white">
                {tool.alt}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
