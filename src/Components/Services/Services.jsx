import React from 'react';
import { Cloud, Smartphone, Code, Video, Server, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "Utilizing cloud platforms to deploy, manage, and scale applications efficiently, leveraging services like databases, storage, and computing resources.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Designing and developing mobile applications, including cross-platform and native apps, using frameworks like React Native.",
  },
  {
    icon: Code,
    title: "Javascript Development",
    description:
      "Building dynamic and interactive web applications using JavaScript, including frontend frameworks and backend APIs.",
  },
  {
    icon: Video,
    title: "Video Editing",
    description:
      "Editing and enhancing video content using professional software tools for storytelling, marketing, or content creation.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Developing and maintaining server-side logic, APIs, and databases, ensuring efficient communication between the frontend and backend.",
  },
  {
    icon: Database,
    title: "Database Integration",
    description:
      "Connecting applications with databases (MySQL, SQL-based, and NoSQL Based systems) to store, retrieve, and manage data efficiently.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <section id="services" className="relative py-28 bg-gradient-to-br from-slate-50 to-indigo-100 overflow-hidden">
      {/* Floating Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-300 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200 opacity-20 rounded-full blur-2xl animate-bounce-slow"></div>

      <motion.div
        className="container mx-auto px-6 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Title */}
        <motion.h2
          className="text-5xl font-extrabold text-center text-indigo-700 mb-4 tracking-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, type: 'spring' }}
        >
          My Skills
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          These are the technologies and capabilities I specialize in across development and multimedia.
        </motion.p>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="group bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotate: [0, 3, -3, 1, 0] }}
              transition={{ type: "tween", duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.3 }}
                className="flex justify-center items-center mb-4"
              >
                <skill.icon className="w-10 h-10 text-indigo-600 group-hover:animate-bounce" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{skill.title}</h3>
              <p className="text-gray-600 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
