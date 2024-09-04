import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold mb-5 text-center">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Project 1</h3>
            <p className="text-gray-700">A brief description of the project goes here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Project 2</h3>
            <p className="text-gray-700">A brief description of the project goes here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Project 3</h3>
            <p className="text-gray-700">A brief description of the project goes here.</p>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
    </section>
  );
}

export default Projects;