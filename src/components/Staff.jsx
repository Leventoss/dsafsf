// src/components/Staff.jsx
import React from 'react';

const Staff = () => {
  const staffMembers = [
    {
      name: 'Alex',
      role: 'Owner',
      image: 'https://api.dicebear.com/7.x/minecraft/svg?seed=Alex&backgroundColor=gray',
    },
    {
      name: 'Sarah',
      role: 'Admin',
      image: 'https://api.dicebear.com/7.x/minecraft/svg?seed=Sarah&backgroundColor=gray',
    },
    {
      name: 'Mike',
      role: 'Moderator',
      image: 'https://api.dicebear.com/7.x/minecraft/svg?seed=Mike&backgroundColor=gray',
    },
    {
      name: 'Emma',
      role: 'Helper',
      image: 'https://api.dicebear.com/7.x/minecraft/svg?seed=Emma&backgroundColor=gray',
    },
  ];

  return (
    <section id="staff" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Our Staff Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {staffMembers.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-lg gradient-animation p-6 text-center hover:transform hover:-translate-y-1 transition-all duration-300 hover-glow"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;