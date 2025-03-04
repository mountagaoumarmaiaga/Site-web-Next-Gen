import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

// Remplacez ces valeurs par vos propres identifiants EmailJS
const EMAILJS_SERVICE_ID = "service_dd1ec2e"; // À remplacer
const EMAILJS_TEMPLATE_ID = "template_rqstulc"; // À remplacer
const EMAILJS_PUBLIC_KEY = "WdvF8xeFjBFDN4xW-"; // À remplacer

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    try {
      setIsSubmitting(true);
      
      // Configuration pour envoyer à votre email
      const templateParams = {
        to_email: 'mountagaoumarmaiga@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      };
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );
      
      toast.success('Message envoyé avec succès! Nous vous contacterons bientôt.');
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      toast.error('Une erreur est survenue. Veuillez réessayer plus tard.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-dark-lighter relative">
      <div className="absolute inset-0 bg-circuit-pattern bg-cover bg-center opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl">
            <span className="text-secondary">Contactez</span>-nous
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Vous avez un projet ou une question ? N'hésitez pas à nous contacter.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-dark rounded-lg shadow-lg p-8 border border-dark-medium">
            <h3 className="text-2xl font-bold text-secondary mb-6">Envoyez-nous un message</h3>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-dark-medium border border-dark-light rounded-md focus:ring-secondary focus:border-secondary text-gray-200"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-dark-medium border border-dark-light rounded-md focus:ring-secondary focus:border-secondary text-gray-200"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-dark-medium border border-dark-light rounded-md focus:ring-secondary focus:border-secondary text-gray-200"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-dark-medium border border-dark-light rounded-md focus:ring-secondary focus:border-secondary text-gray-200"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary text-dark py-2 px-4 rounded-md hover:bg-secondary-light transition-colors duration-300 font-medium flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  'Envoyer'
                )}
              </button>
            </form>
          </div>

          <div className="bg-primary text-white rounded-lg shadow-lg p-8 border border-primary-light">
            <h3 className="text-2xl font-bold text-secondary mb-6">Informations de contact</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 mt-1 text-secondary" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-100">Adresse</h4>
                  <p className="text-gray-300">Bacodjicororni-ACI, Bamako, Mali</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-3 mt-1 text-secondary" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-100">Téléphone</h4>
                  <p className="text-gray-300">+223 70 56 46 40</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-3 mt-1 text-secondary" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-100">Email</h4>
                  <p className="text-gray-300">contact@nextgen-malitech.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-gray-100">Heures d'ouverture</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex justify-between">
                  <span>Lundi - Vendredi:</span>
                  <span>9h00 - 18h00</span>
                </li>
                <li className="flex justify-between">
                  <span>Samedi:</span>
                  <span>10h00 - 15h00</span>
                </li>
                <li className="flex justify-between">
                  <span>Dimanche:</span>
                  <span>Fermé</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;