import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-dark-lighter relative overflow-hidden">
      {/* Circuit background pattern with overlay */}
      <div className="absolute inset-0 bg-circuit-pattern bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-dark-lighter to-dark opacity-90"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100 leading-tight">
              Solutions technologiques <span className="text-secondary">innovantes</span> pour l'Afrique
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              Expertise en développement d'applications, systèmes de vidéosurveillance, contrôle d'accès et sécurité avancée.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 border border-secondary text-base font-medium rounded-md text-dark bg-secondary hover:bg-secondary-light transition-colors duration-300"
              >
                Nos services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-secondary text-base font-medium rounded-md text-secondary bg-transparent hover:bg-dark-medium transition-colors duration-300"
              >
                Contactez-nous
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Technologie de sécurité"
              className="w-4/5 h-auto rounded-lg shadow-2xl border border-dark-medium"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;