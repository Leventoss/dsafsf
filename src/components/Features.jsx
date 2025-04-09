// src/components/Features.jsx
import React from 'react';
import { ShieldCheckIcon, UserGroupIcon, SparklesIcon, CubeIcon } from '@heroicons/react/24/outline';

const Features = () => {
  const features = [
    {
      title: 'Enhanced Survival',
      description: 'Experience survival with custom mechanics and challenges',
      icon: SparklesIcon,
    },
    {
      title: 'Active Community',
      description: 'Join our friendly and growing player base',
      icon: UserGroupIcon,
    },
    {
      title: 'Custom Events',
      description: 'Weekly events and special competitions',
      icon: CubeIcon,
    },
    {
      title: 'Anti-Cheat',
      description: 'Fair gameplay guaranteed',
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-glow">Server Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg hover:transform hover:-translate-y-1 transition-all duration-300 hover-glow relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10"
            >
              <feature.icon className="h-12 w-12 mb-4 text-gray-300" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;