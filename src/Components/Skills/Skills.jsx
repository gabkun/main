import React from 'react';
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
    description: 'This project is my Capstone Thesis output called TruckHub: A business to business web platform for truck companies, this app features an e-commerce platform with accurate tracking of subscriptions and live data such as trucks.',
    liveLink: 'https://truckhub-frontend.vercel.app/',
    githubLink: 'https://github.com/gabkun/truckhub-frontend'
  },
  {
    image: project3,
    title: 'Family Farms Inc. Mobile Application',
    description: 'This project is for a private farm this is for encoding of crops and other informations found in a farm land, the application offers offline and online use with backup.',
    liveLink: 'https://www.mediafire.com/file/w2g7nlyuq20joll/Family-Inc.apk/file',
    githubLink: 'https://github.com/gabkun/questionaire-giz'
  },
  {
    image: project5,
    title: 'Barangay Canlandog Vaccination System for infants',
    description: 'This project is a paid freelance for a capstone project, it features a vaccination system to be used by health workers to vaccinate infants in Barangay Canlandog.',
    liveLink: 'https://vax-brgy-fe.vercel.app/',
    githubLink: 'https://github.com/gabkun/vax-brgy-fe'
  },
  {
    image: project6,
    title: 'BioFlyt-Mobile Application',
    description: 'Bioflyt is a startup company that offers wide variety of services to help with the food waste issue in Bacolod City, the features of this app includes a door-to-door pickup by a rider to get your foodwaste.',
    liveLink: 'https://www.mediafire.com/file/uzvd6t463p8qd09/BioFlyt-Beta.apk/file',
    githubLink: 'https://github.com/Poorsaken/BioFlyt-BetaTest'
  },
  {
    image: project4,
    title: 'Promptly - A Todo Web Application',
    description: 'This project is from my JSNAD training certification in DICT, the web app features a wide variety of notes such as text and voice memos.',
    liveLink: 'https://promptly-dict-ncl9.vercel.app/',
    githubLink: 'https://github.com/gabkun/promptly-dict'
  }
];

const Skills = () => {
  return (
    <section id="works" className="py-20 bg-white">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold mb-5 text-center">My Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a href={project.liveLink} className="text-indigo-600 hover:text-indigo-800">View Project</a>
                  <a href={project.githubLink} className="text-gray-600 hover:text-gray-800">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;