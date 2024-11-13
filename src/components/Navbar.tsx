import React from 'react';
import { Menu, X, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">VisaCoach</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600">Find a Coach</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">How It Works</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Success Stories</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
              Get Started
            </button>
            <button className="flex items-center text-gray-700 hover:text-indigo-600">
              <User className="h-5 w-5 mr-1" />
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Find a Coach</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">How It Works</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Success Stories</a>
            <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600">
              Sign In
            </button>
            <button className="w-full mt-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}