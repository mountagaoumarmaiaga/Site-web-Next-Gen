import React from 'react';
import { Code, Database, Camera, Lock, Shield, Wifi } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-8 w-8 text-secondary" />,
    title: "Développement d'applications",
    description: "Création d'applications web et mobiles sur mesure pour répondre aux besoins spécifiques de votre entreprise."
  },
  {
    icon: <Camera className="h-8 w-8 text-secondary" />,
    title: "Vidéosurveillance",
    description: "Installation de systèmes de vidéosurveillance avancés pour sécuriser vos locaux et vos actifs."
  },
  {
    icon: <Lock className="h-8 w-8 text-secondary" />,
    title: "Contrôle d'accès",
    description: "Solutions de contrôle d'accès intelligentes pour gérer et sécuriser les entrées de vos bâtiments."
  },
  {
    icon: <Shield className="h-8 w-8 text-secondary" />,
    title: "Systèmes de sécurité",
    description: "Mise en place de systèmes de sécurité complets pour protéger votre entreprise contre les menaces."
  },
  {
    icon: <Database className="h-8 w-8 text-secondary" />,
    title: "Analyse de données",
    description: "Exploitation et analyse de vos données pour optimiser vos processus et prendre des décisions éclairées."
  },
  {
    icon: <Wifi className="h-8 w-8 text-secondary" />,
    title: "Solutions intégrées",
    description: "Intégration de technologies complémentaires pour créer un écosystème technologique cohérent et efficace."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl">
            Nos <span className="text-secondary">Services</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Des solutions technologiques complètes pour répondre à tous vos besoins.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-dark-lighter rounded-lg p-6 border border-dark-medium hover:border-secondary transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-dark-medium mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;