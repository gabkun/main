import React from 'react';
import project1 from './img/project1.png'
import project2 from './img/project2.png'
import project3 from './img/project3.png'

const Skills = () => {
  return (
    <section id="works" className="py-20 bg-white">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold mb-5 text-center">My Works</h2>
        <div class="container mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="card bg-white rounded-lg overflow-hidden shadow-lg">
                        <img src={project1} alt="Project 1" class="w-full h-48 object-cover" />
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">Eco Tagger Admin Page</h3>
                            <p class="text-gray-600 mb-4">Short description of Project 1. This project demonstrates my
                                skills in XYZ.</p>
                            <div class="flex justify-between">
                                <a href="https://ecotagger.vercel.app/dashboard/analytics" class="text-indigo-600 hover:text-indigo-800">View Project</a>
                                <a href="https://github.com/gabkun/eco-tagger-admin" class="text-gray-600 hover:text-gray-800">
                                    <i class="fab fa-github"></i> GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="card bg-white rounded-lg overflow-hidden shadow-lg">
                        <img src={project2} alt="Project 2" class="w-full h-48 object-cover" />
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">Truck Hub System</h3>
                            <p class="text-gray-600 mb-4">Short description of Project 2. This project showcases my
                                expertise in ABC.</p>
                            <div class="flex justify-between">
                                <a href="https://truckhub-frontend.vercel.app/" class="text-indigo-600 hover:text-indigo-800">View Project</a>
                                <a href="https://github.com/gabkun/truckhub-frontend" class="text-gray-600 hover:text-gray-800">
                                    <i class="fab fa-github"></i> GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="card bg-white rounded-lg overflow-hidden shadow-lg">
                        <img src={project3} alt="Project 3" class="w-full h-48 object-cover" />
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">To-do AngularJS Application</h3>
                            <p class="text-gray-600 mb-4">Short description of Project 3. This project highlights my
                                skills in DEF.</p>
                            <div class="flex justify-between">
                                <a href="https://gab-gwapo.vercel.app/" class="text-indigo-600 hover:text-indigo-800">View Project</a>
                                <a href="https://github.com/gabkun/gab-gwapo" class="text-gray-600 hover:text-gray-800">
                                    <i class="fab fa-github"></i> GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
      </div>
    </section>
  );
}

export default Skills;