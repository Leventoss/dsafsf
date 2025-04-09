// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Rules from './components/Rules';
import Staff from './components/Staff';
import Footer from './components/Footer';

import Support from './components/Support';
import Gallery from './components/Gallery';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] pointer-events-none" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <Rules />
        <Support />
        <Staff />
      </main>
      <Footer />
    </div>
  );
}

export default App;