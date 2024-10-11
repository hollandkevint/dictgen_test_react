import React from 'react';
import { Database } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Database className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">DictGen</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-blue-200">Home</a></li>
            <li><a href="#" className="hover:text-blue-200">Features</a></li>
            <li><a href="#" className="hover:text-blue-200">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;