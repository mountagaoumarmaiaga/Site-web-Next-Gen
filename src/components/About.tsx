import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-dark-lighter relative">
      <div className="absolute inset-0 bg-circuit-pattern bg-cover bg-center opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl">
            À propos de <span className="text-secondary">NextGen</span> <span className="text-accent">Malitech</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Notre mission est de fournir des solutions technologiques innovantes qui transforment les entreprises africaines.
          </p>
        </div>

        <div className="mt-12 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8">
            <h3 className="text-2xl font-bold text-secondary mb-4">Notre Mission</h3>
            <p className="text-gray-300 mb-6">
              Chez NextGen Malitech, nous nous engageons à fournir des solutions technologiques de pointe qui permettent à nos clients de prospérer dans un monde numérique en constante évolution. Notre approche intégrée combine expertise technique et compréhension approfondie des besoins métier.
            </p>
            
            <h3 className="text-2xl font-bold text-secondary mb-4">Notre Vision</h3>
            <p className="text-gray-300 mb-6">
              Devenir le partenaire technologique de référence en Afrique en offrant des solutions innovantes qui transforment les défis en opportunités. Nous aspirons à créer un environnement où la technologie renforce la sécurité, l'efficacité et la croissance de nos clients.
            </p>
            
            <h3 className="text-2xl font-bold text-secondary mb-4">Nos Valeurs</h3>
            <ul className="list-disc pl-5 text-gray-300">
              <li className="mb-2">Innovation constante dans nos approches et solutions</li>
              <li className="mb-2">Excellence dans la qualité de nos services</li>
              <li className="mb-2">Intégrité dans toutes nos interactions</li>
              <li className="mb-2">Collaboration étroite avec nos clients</li>
              <li>Responsabilité envers nos engagements</li>
            </ul>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Notre équipe"
              className="w-full h-auto rounded-lg shadow-xl border border-dark-medium"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;