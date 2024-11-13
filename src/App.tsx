import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCoaches from './components/FeaturedCoaches';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <FeaturedCoaches />
    </div>
  );
}

export default App;