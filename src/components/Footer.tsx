import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import img from '../img/Next-gen.png'; 
const Footer = () => {
  return (
    <footer className="bg-dark-lighter text-gray-300 border-t border-dark-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
            <img
                src={img}
                alt="NextGen Malitech Logo"
                className="h-24 w-auto" // Taille augmentée
              />
              <div className="ml-2">
                <span className="text-xl font-bold text-secondary">NEXTGEN</span>
                <span className="block text-accent text-sm">MALITECH</span>
              </div>
            </div>
            <p className="mt-4 text-gray-400">
              Solutions technologiques innovantes pour l'Afrique. Expertise en développement, sécurité et systèmes intégrés.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300">Développement d'applications</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300">Vidéosurveillance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300">Contrôle d'accès</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300">Systèmes de sécurité</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300">Analyse de données</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-secondary transition-colors duration-300">Accueil</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-secondary transition-colors duration-300">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-secondary transition-colors duration-300">À propos</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-secondary transition-colors duration-300">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-secondary transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Abonnez-vous à notre newsletter pour recevoir nos dernières actualités et offres.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-secondary bg-dark-medium border-0 text-gray-200"
              />
              <button
                type="submit"
                className="bg-secondary hover:bg-secondary-light text-dark px-4 py-2 rounded-r-md transition-colors duration-300 font-medium"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-medium text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NextGen Malitech. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;