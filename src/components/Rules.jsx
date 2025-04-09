// src/components/Rules.jsx
import React from 'react';

const Rules = () => {
  const rules = [
    {
      title: 'No Griefing',
      description: 'Respect other players builds and properties',
    },
    {
      title: 'No Hacking',
      description: 'Use of unauthorized modifications or cheats is prohibited',
    },
    {
      title: 'Be Respectful',
      description: 'Treat all players with respect, no harassment or bullying',
    },
    {
      title: 'No Spam',
      description: 'Avoid spamming chat or using excessive caps',
    },
  ];

  return (
    <section id="rules" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Server Rules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rules.map((rule, index) => (
            <div
              key={rule.title}
              className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-gray-700"
            >
              <div className="flex items-start">
                <span className="text-3xl font-bold text-gray-500 mr-4">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{rule.title}</h3>
                  <p className="text-gray-400">{rule.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rules;