# Configuration d'EmailJS pour le formulaire de contact

Pour que le formulaire de contact envoie des emails à votre adresse `mountagaoumarmaiga@gmail.com`, vous devez configurer EmailJS. Voici les étapes à suivre :

## 1. Créer un compte EmailJS

1. Rendez-vous sur [EmailJS](https://www.emailjs.com/) et créez un compte gratuit
2. Connectez-vous à votre tableau de bord

## 2. Ajouter un service email

1. Dans le tableau de bord, cliquez sur "Email Services" puis "Add New Service"
2. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
3. Suivez les instructions pour connecter votre compte email
4. Notez l'ID du service (par exemple `service_dd1ec2e`)

## 3. Créer un modèle d'email

1. Dans le tableau de bord, cliquez sur "Email Templates" puis "Create New Template"
2. Donnez un nom à votre modèle
3. Configurez le modèle avec les variables suivantes :
   - `{{from_name}}` - Nom de l'expéditeur
   - `{{from_email}}` - Email de l'expéditeur
   - `{{subject}}` - Sujet du message
   - `{{message}}` - Contenu du message
4. Dans le champ "To Email", vous pouvez mettre directement `mountagaoumarmaiga@gmail.com` ou utiliser `{{to_email}}`
5. Notez l'ID du modèle (par exemple `template_pb51ji6`)

## 4. Obtenir votre clé publique

1. Dans le tableau de bord, allez dans "Account" > "API Keys"
2. Copiez votre clé publique (par exemple `WdvF8xeFjBFDN4xW-`)

## 5. Mettre à jour le code

Ouvrez le fichier `src/components/Contact.tsx` et remplacez les valeurs suivantes :

```javascript
const EMAILJS_SERVICE_ID = "service_id"; // Remplacez par votre ID de service
const EMAILJS_TEMPLATE_ID = "template_id"; // Remplacez par votre ID de modèle
const EMAILJS_PUBLIC_KEY = "public_key"; // Remplacez par votre clé publique
```

## 6. Tester le formulaire

Une fois ces modifications effectuées, testez le formulaire en envoyant un message test. Vous devriez recevoir l'email à l'adresse `mountagaoumarmaiga@gmail.com`.

## Limitations du plan gratuit

Le plan gratuit d'EmailJS permet d'envoyer jusqu'à 200 emails par mois. Si vous avez besoin d'envoyer plus d'emails, vous devrez passer à un plan payant.