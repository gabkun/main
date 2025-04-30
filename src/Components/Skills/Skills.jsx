import React from 'react';
import { motion } from 'framer-motion';
import project1 from './img/project1.png';
import project2 from './img/project2.png';
import project3 from './img/project3.png';
import project4 from './img/project4.png';
import project5 from './img/project5.png';
import project6 from './img/project6.jpg';

const projects = [
  {
    image: project1,
    title: 'Eco Tagger Admin Page',
    description: 'This is my project as a part of the team EcoTagger by Deutsche Gesellschaft für Internationale Zusammenarbeit.',
    liveLink: 'https://ecotagger.vercel.app/',
    githubLink: 'https://github.com/gabkun/eco-tagger-admin'
  },
  {
    image: project2,
    title: 'Truck Hub System',
    description: 'Capstone Thesis output called TruckHub: A business to business web platform with e-commerce and live truck data.',
    liveLink: 'https://truckhub-frontend.vercel.app/',
    githubLink: 'https://github.com/gabkun/truckhub-frontend'
  },
  {
    image: project3,
    title: 'Family Farms Inc. Mobile Application',
    description: 'Private farm app for crop encoding, supports both offline and online use with backup features.',
    liveLink: 'https://www.mediafire.com/file/w2g7nlyuq20joll/Family-Inc.apk/file',
    githubLink: 'https://github.com/gabkun/questionaire-giz'
  },
  {
    image: project5,
    title: 'Canlandog Vaccination System',
    description: 'A freelance project used by health workers to vaccinate infants in Barangay Canlandog.',
    liveLink: 'https://vax-brgy-fe.vercel.app/',
    githubLink: 'https://github.com/gabkun/vax-brgy-fe'
  },
  {
    image: project6,
    title: 'BioFlyt-Mobile Application',
    description: 'Startup app tackling food waste in Bacolod City with rider pickups and tracking system.',
    liveLink: 'https://www.mediafire.com/file/uzvd6t463p8qd09/BioFlyt-Beta.apk/file',
    githubLink: 'https://github.com/Poorsaken/BioFlyt-BetaTest'
  },
  {
    image: project4,
    title: 'Promptly - Todo App',
    description: 'From my JSNAD DICT training — allows text and voice memo notes with a sleek UI.',
    liveLink: 'https://promptly-dict-ncl9.vercel.app/',
    githubLink: 'https://github.com/gabkun/promptly-dict'
  }
];

const Skills = () => {
  return (
    <section id="works" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-5">
        <motion.h2 
          className="text-4xl font-extrabold mb-12 text-center text-indigo-700"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Works
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-3xl" />
              <div className="p-6 flex flex-col justify-between h-64">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                  >
                    View Project
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 text-sm flex items-center gap-1"
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
