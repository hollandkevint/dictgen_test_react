import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">DictGen</h3>
            <p className="text-sm">Automated Data Dictionary Generator</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-blue-300">Home</a></li>
              <li><a href="#" className="hover:text-blue-300">Features</a></li>
              <li><a href="#" className="hover:text-blue-300">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-300">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-blue-300">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-300">LinkedIn</a></li>
              <li><a href="#" className="hover:text-blue-300">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} DictGen. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;