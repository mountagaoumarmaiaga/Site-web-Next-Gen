# NextGen Malitech - Site Web

Ce projet est le site web officiel de NextGen Malitech, une entreprise spécialisée dans les solutions technologiques innovantes pour l'Afrique.

## Installation locale

### Prérequis
- Node.js (version 16 ou supérieure)
- npm (inclus avec Node.js)

### Étapes d'installation

1. Clonez le dépôt (si vous utilisez Git) ou téléchargez les fichiers source

```bash
git clone <url-du-depot>
```

2. Accédez au répertoire du projet

```bash
cd nextgen-malitech-website
```

3. Installez les dépendances

```bash
npm install
```

4. Lancez le serveur de développement

```bash
npm run dev
```

5. Ouvrez votre navigateur et accédez à `http://localhost:5173`

## Structure du projet

- `/src` - Code source du site
  - `/components` - Composants React réutilisables
  - `App.tsx` - Composant principal
  - `main.tsx` - Point d'entrée de l'application
- `/public` - Ressources statiques

## Déploiement sur Vercel

### Méthode 1: Déploiement via l'interface Vercel

1. Créez un compte sur [Vercel](https://vercel.com) si vous n'en avez pas déjà un
2. Cliquez sur "New Project" dans le tableau de bord Vercel
3. Importez votre dépôt Git ou téléchargez les fichiers du projet
4. Configurez les paramètres de build:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Cliquez sur "Deploy"

### Méthode 2: Déploiement via la CLI Vercel

1. Installez la CLI Vercel globalement

```bash
npm install -g vercel
```

2. Connectez-vous à votre compte Vercel

```bash
vercel login
```

3. Naviguez vers le répertoire du projet et déployez

```bash
cd nextgen-malitech-website
vercel
```

4. Suivez les instructions à l'écran pour configurer votre projet

### Méthode 3: Déploiement automatique avec Git

1. Connectez votre dépôt Git (GitHub, GitLab, Bitbucket) à Vercel
2. Configurez les paramètres de build comme dans la Méthode 1
3. Activez les déploiements automatiques

Chaque fois que vous pousserez des modifications vers votre branche principale, Vercel déploiera automatiquement les mises à jour.

## Personnalisation

Pour personnaliser le site:

- Modifiez les fichiers dans `/src/components` pour changer le contenu
- Ajustez les couleurs et le thème dans `tailwind.config.js`
- Remplacez les images par vos propres ressources

## Support

Pour toute question ou assistance, contactez l'équipe de développement à [votre-email@example.com].# Site-web-Next-Gen
