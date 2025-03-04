import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Système de sécurité intégré",
    category: "Sécurité",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Mise en place d'un système de sécurité complet incluant vidéosurveillance et contrôle d'accès pour un complexe d'entreprises."
  },
  {
    id: 2,
    title: "Application de gestion",
    category: "Développement",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Développement d'une application web sur mesure pour la gestion des opérations d'une entreprise de logistique."
  },
  {
    id: 3,
    title: "Analyse de données client",
    category: "Analyse",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Mise en place d'une solution d'analyse de données pour optimiser l'expérience client d'une entreprise de commerce électronique."
  },
  {
    id: 4,
    title: "Réseau sécurisé",
    category: "Sécurité",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Conception et déploiement d'une infrastructure réseau sécurisée pour une institution financière."
  },
  {
    id: 5,
    title: "Application mobile",
    category: "Développement",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Création d'une application mobile innovante permettant la gestion à distance des systèmes de sécurité."
  },
  {
    id: 6,
    title: "Système de surveillance",
    category: "Sécurité",
    image: "https://images.unsplash.com/photo-1477244075012-5cc28286e465?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Installation d'un système de vidéosurveillance avancé avec analyse d'image pour un centre commercial."
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('Tous');
  const categories = ['Tous', 'Sécurité', 'Développement', 'Analyse'];

  const filteredProjects = filter === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-16 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl">
            Notre <span className="text-secondary">Portfolio</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Découvrez nos réalisations et projets récents.
          </p>
        </div>

        <div className="mt-8 flex justify-center space-x-4 flex-wrap">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-md m-2 transition-colors duration-300 ${
                filter === category
                  ? 'bg-secondary text-dark'
                  : 'bg-dark-medium text-gray-300 hover:bg-dark-light border border-dark-medium hover:border-secondary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project.id} className="overflow-hidden rounded-lg bg-dark-lighter border border-dark-medium hover:border-secondary transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-dark bg-secondary rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;