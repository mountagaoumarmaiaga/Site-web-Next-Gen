#!/bin/bash

# Script de déploiement pour NextGen Malitech

echo "Préparation du déploiement..."

# Vérification de Node.js et npm
if ! command -v node &> /dev/null; then
    echo "Node.js n'est pas installé. Veuillez l'installer avant de continuer."
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "npm n'est pas installé. Veuillez l'installer avant de continuer."
    exit 1
fi

# Installation des dépendances
echo "Installation des dépendances..."
npm install

# Construction du projet
echo "Construction du projet..."
npm run build

# Vérification de l'installation de Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "Vercel CLI n'est pas installé. Installation en cours..."
    npm install -g vercel
fi

# Déploiement sur Vercel
echo "Déploiement sur Vercel..."
vercel --prod

echo "Déploiement terminé!"