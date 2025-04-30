import React from 'react';
import { motion } from 'framer-motion';
import img from './img/bg.png';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <main className="relative h-screen overflow-hidden bg-white dark:bg-gray-900">
      {/* Background Blobs */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-400 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-indigo-400 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-20 flex h-full items-center">
        <div className="container mx-auto px-6 py-16 flex items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="sm:w-2/3 lg:w-2/5 z-20"
          >
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-gray-800 dark:text-white leading-tight">
            This is my{' '}
            <span className="text-indigo-500">
              <Typewriter
                words={['Portfolio', 'Website', 'Workspace', 'Code', 'Repository']}
                loop={true}
                cursor
                cursorStyle="l"
                typeSpeed={200}
                deleteSpeed={200}
                delaySpeed={1200}
              />
            </span>
          </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="mt-4 text-lg text-gray-600 dark:text-gray-300"
            >
              Welcome! I’m <span className="text-indigo-600 font-semibold">Gabriel Malanday</span>, a full-stack developer with a passion for building dynamic, user-centered web experiences. I am well built for both user friendly interface and advanced user experience. 
            </motion.p>

            <motion.div
              className="flex mt-8 space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="py-3 px-6 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 uppercase text-sm font-semibold transition-all duration-300"
              >
                Hire Me
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#about"
                className="py-3 px-6 border-2 border-indigo-600 text-indigo-600 dark:text-white dark:border-white rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 text-sm font-semibold uppercase"
              >
                Read More
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Image Content */}
          <motion.div
            className="hidden sm:block sm:w-1/3 lg:w-3/5 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative flex items-center justify-center">
              <motion.div
                className="absolute inset-0 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0.9, 0.7] }}
                transition={{ duration: 6, repeat: Infinity }}
              ></motion.div>

              <motion.img
                src={img}
                alt="Gabriel Malanday Hero"
                className="relative rounded-full object-cover z-10 shadow-2xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
