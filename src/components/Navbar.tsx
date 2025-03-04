import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import img from '../img/Next-gen.png'; // Assurez-vous que le chemin est correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark-lighter shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo et nom de l'entreprise */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img
                src={img}
                alt="NextGen Malitech Logo"
                className="h-24 w-auto" // Taille augmentée
              />
            </div>
            <span className="ml-2 text-xl font-bold text-secondary">NEXTGEN</span>
            <span className="ml-1 text-xl font-bold text-accent">MALITECH</span>
          </div>

          {/* Liens de navigation (version desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-secondary px-3 py-2 text-sm font-medium">
              Accueil
            </a>
            <a href="#services" className="text-gray-300 hover:text-secondary px-3 py-2 text-sm font-medium">
              Services
            </a>
            <a href="#about" className="text-gray-300 hover:text-secondary px-3 py-2 text-sm font-medium">
              À propos
            </a>
            <a href="#portfolio" className="text-gray-300 hover:text-secondary px-3 py-2 text-sm font-medium">
              Portfolio
            </a>
            <a
              href="#contact"
              className="bg-primary text-secondary hover:bg-primary-dark border border-secondary px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Bouton du menu mobile */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-secondary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menu mobile (version mobile) */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-light shadow-lg">
              <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-secondary">
                Accueil
              </a>
              <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-secondary">
                Services
              </a>
              <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-secondary">
                À propos
              </a>
              <a href="#portfolio" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-secondary">
                Portfolio
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-base font-medium bg-primary text-secondary hover:bg-primary-dark border border-secondary"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;