Softadastra Tasks

Softadastra Tasks est une application de gestion des tâches pour les équipes de l'écosystème Softadastra. Elle est développée avec Node.js pour le backend et React.js pour le frontend.

Structure du projet

softadastra_tasks/
│── backend/ # Code backend (Node.js, Express)
│── frontend/ # Code frontend (React.js)
│── bd.sql # Fichier SQL pour la base de données
│── README.md # Documentation du projet
│── package.json # Dépendances et scripts
│── .gitignore # Fichiers à ignorer dans Git

Installation et exécution

1️. Prérequis

Node.js (v16+ recommandé)

npm ou yarn

MySQL (pour la base de données)

2️. Cloner le projet

git clone https://github.com/softadastra/softadastra_tasks.git
cd softadastra_tasks

3️. Configuration du Backend

cd backend
cp .env.example .env # Configurer la base de données et les variables d'environnement
npm install # Installer les dépendances
npm run dev # Lancer le serveur en mode développement

4️. Configuration du Frontend

cd frontend
npm install # Installer les dépendances
npm start # Lancer l'application React

🛠 Base de données

Le fichier bd.sql contient la structure SQL optimisée. Assurez-vous de l'exécuter dans votre base MySQL :

mysql -u votre_utilisateur -p votre_base < bd.sql

Contributions

Forkez le projet

Créez une branche (feature/ma-fonctionnalité)

Committez vos modifications

Push et créez une pull request 🚀

Licence

Ce projet est sous licence SOFTADASTRA.

Contact

Pour toute question ou suggestion, contactez-nous sur softadastra.com ou ouvrez une issue sur GitHub !
