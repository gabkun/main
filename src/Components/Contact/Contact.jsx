import React from "react";
import img from "../About/img/img.jpg";

const certifications = [
  { title: "Leading with Generative AI", issuer: "Harvard" },
  { title: "Google IT Support", issuer: "Google" },
  { title: "Google Cloud Computing Foundations", issuer: "Google" },
  { title: "DevOps Foundations", issuer: "LinkedIn" },
  { title: "AI Pair Programming with GitHub Copilot", issuer: "LinkedIn" },
  { title: "AI Augmented Engineer for Developer", issuer: "Level Up" },
  { title: "Understanding ChatGPT", issuer: "DataCamp" },
  { title: "Introduction to AI Agents", issuer: "DataCamp" },
  { title: "Understanding Prompt Engineering", issuer: "DataCamp" },
  {
    title: "Using AI in the Design to Full-Stack Development Life Cycle",
    issuer: "LinkedIn",
  },
  { title: "Responsive Web Design", issuer: "freeCodeCamp" },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
  },
  {
    title: "Operating Systems and You: Becoming a Power User",
    issuer: "Google",
  },
  {
    title: "Technical Support Fundamentals",
    issuer: "Google",
  },
  {
    title: "IT Security: Defense Against the Digital Dark Arts",
    issuer: "Google",
  },
  {
    title: "System Administration and IT Infrastructure Services",
    issuer: "Google",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
  },
  {
    title: "Accelerate Development with Artificial Intelligence and Cursor",
    issuer: "LinkedIn",
  },
  {
    title: "Agile Teams in the Age of AI",
    issuer: "LinkedIn",
  },
];

const Contact = () => {
  return (
    <section
      id="contacts"
      className="py-24 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
            Certifications & Contact
          </h2>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Continuous learning, innovation, and practical experience across
            Full Stack Development, Cloud Technologies, DevOps, AI, and IT
            Infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-[3fr_1fr] gap-10">

          {/* LEFT SIDE */}
          <div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-5 mb-10">
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-2xl p-6 text-white shadow-xl">
                <h3 className="text-4xl font-bold">19+</h3>
                <p className="mt-2">Professional Certificates</p>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-6 text-white shadow-xl">
                <h3 className="text-4xl font-bold">6</h3>
                <p className="mt-2">Learning Platforms</p>
              </div>

              <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-6 text-white shadow-xl">
                <h3 className="text-4xl font-bold">AI</h3>
                <p className="mt-2">Cloud & Development Focus</p>
              </div>
            </div>

            {/* Certifications Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white leading-snug">
                        {cert.title}
                      </h4>

                      <span className="inline-block mt-4 px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-semibold">
                        {cert.issuer}
                      </span>
                    </div>

                    <div className="text-3xl group-hover:scale-125 transition duration-300">
                      🏆
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT SIDE CONTACT CARD */}
          <div>

            <div className="sticky top-24">

              <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl">

                <img
                  src={img}
                  alt="Gabriel Malanday"
                  className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-white"
                />

                <h3 className="text-2xl font-bold text-center mt-5">
                  Gabriel Malanday
                </h3>

                <p className="text-center text-indigo-100">
                  Full Stack Developer | End User Support Specialist
                </p>

                <div className="border-t border-white/30 my-6"></div>

                <div className="space-y-4 text-sm">

                  <div className="flex items-center gap-3">
                    <span>📧</span>
                    <span>g760332@gmail.com</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span>📱</span>
                    <span>+63 922 293 2404</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span>🌏</span>
                    <span>Philippines</span>
                  </div>

                </div>

                <div className="mt-8 space-y-3">

                  <a
                    href="https://github.com/gabkun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-white text-indigo-700 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/gabriel-malanday-18619b178/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-black/20 py-3 rounded-xl font-semibold hover:bg-black/30 transition"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="/resume.pdf"
                    className="block text-center bg-yellow-400 text-black py-3 rounded-xl font-bold hover:bg-yellow-300 transition"
                  >
                    Download Resume
                  </a>

                </div>

                <div className="mt-8 text-center text-sm text-indigo-100">
                  Available for freelance, contract, and full-time opportunities.
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;