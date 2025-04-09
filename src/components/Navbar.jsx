// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#features' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Rules', href: '#rules' },
    { name: 'Support', href: '#support' },
    { name: 'Staff', href: '#staff' },
  ];

  return (
    <nav className="fixed w-full backdrop-blur-md bg-black/50 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent hover-glow inline-block">
                ASCRAFT
              </span>
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-400 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-300 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;