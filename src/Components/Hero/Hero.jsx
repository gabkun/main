import React from 'react';
import img from './img/bg.png';

const Hero = () => {
  return (
    <main className="dark:bg-gray-900 bg-white relative overflow-hidden h-screen">
      <div className="flex items-center relative z-20 overflow-hidden h-full">
        <div className="container mx-auto px-6 py-16 flex items-center">
          <div className="sm:w-2/3 lg:w-2/5 z-20">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-gray-800 dark:text-white leading-tight">
              This is my <span className="text-indigo-500">Portfolio</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Welcome to my portfolio! I’m Gabriel Malanday, a passionate full-stack developer with a flair for creating dynamic, user-centric web applications.
            </p>
            <div className="flex mt-8">
              <a
                href="#contact"
                className="py-3 px-6 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 uppercase text-sm font-semibold transition duration-200 ease-in-out"
              >
                Hire Me
              </a>
              <a
                href="#about"
                className="ml-4 py-3 px-6 bg-transparent border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white dark:text-white dark:border-white transition duration-200 ease-in-out text-sm font-semibold uppercase"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-75"></div>
              <img
                src={img}
                alt="Hero background"
                className="relative rounded-full object-cover z-10 shadow-md transform hover:scale-105 transition duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;