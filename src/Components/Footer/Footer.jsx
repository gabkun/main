import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 MyPortfolio. All rights reserved.</p>
        <div className="mt-2">
          <a href="https://linkedin.com" className="px-3">LinkedIn</a>
          <a href="https://github.com" className="px-3">GitHub</a>
          <a href="https://twitter.com" className="px-3">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;