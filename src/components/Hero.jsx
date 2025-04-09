// src/components/Hero.jsx
import React from 'react';
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import ParticleBackground from './ParticleBackground';
import ServerStats from './ServerStats';

const Hero = () => {
  const [copied, setCopied] = React.useState(false);
  const serverIP = 'play.mcserver.com';

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-animation">
      <ParticleBackground />
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1607425814902-652c7f65c614?q=80&w=2070")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
          Welcome to Ascraft
          <span className="block text-2xl md:text-3xl mt-4 text-glow">Experience the Ultimate Survival</span>
        </h1>
        <ServerStats />
        <div className="bg-black/50 backdrop-blur-md p-6 rounded-lg inline-block hover-glow">
          <p className="text-xl mb-4">Join our server at</p>
          <div className="flex items-center justify-center space-x-3">
            <code className="text-2xl md:text-3xl font-mono bg-black/30 px-4 py-2 rounded">
              {serverIP}
            </code>
            <button
              onClick={copyIP}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 relative"
              title="Copy IP"
            >
              <ClipboardDocumentIcon className="h-6 w-6" />
              {copied && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white text-black text-sm py-1 px-2 rounded shadow-lg">
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;