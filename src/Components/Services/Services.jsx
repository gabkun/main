import React from 'react';
import { Cloud, Smartphone, Code, Video, Server, Database } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-3xl font-bold text-start mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-white rounded-lg p-6 text-center">
            <Cloud className="text-4xl text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Cloud Computing</h3>
            <p className="text-gray-600">Utilizing cloud platforms to deploy, manage, and scale applications efficiently, leveraging services like databases, storage, and computing resources.</p>
          </div>
          <div className="card bg-white rounded-lg p-6 text-center">
            <Smartphone className="text-4xl text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Mobile Application Development</h3>
            <p className="text-gray-600">Designing and developing mobile applications, including cross-platform and native apps, using frameworks like React Native.</p>
          </div>
          <div className="card bg-white rounded-lg p-6 text-center">
            <Code className="text-4xl text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Javascript Development</h3>
            <p className="text-gray-600">Building dynamic and interactive web applications using JavaScript, including frontend frameworks (React.js, Angular) and backend (Node.js, Express.js).</p>
          </div>
          <div className="card bg-white rounded-lg p-6 text-center">
            <Video className="text-4xl text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Video Editing</h3>
            <p className="text-gray-600">Editing and enhancing video content using professional software tools for storytelling, marketing, or content creation.</p>
          </div>
          <div className="card bg-white rounded-lg p-6 text-center">
            <Server className="text-4xl text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Backend Development</h3>
            <p className="text-gray-600">Developing and maintaining server-side logic, APIs, and databases, ensuring efficient communication between the frontend and backend.</p>
          </div>
          <div className="card bg-white rounded-lg p-6 text-center">
            <Database className="text-4xl text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Database Integration</h3>
            <p className="text-gray-600">Connecting applications with databases (MySQL, SQL-based, and NoSQL Based systems) to store, retrieve, and manage data efficiently.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
