import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold mb-5 text-center">Get In Touch</h2>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Message" className="w-full p-3 border border-gray-300 rounded"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 px-6 py-3 rounded-full text-white font-bold hover:bg-blue-700 transition">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;