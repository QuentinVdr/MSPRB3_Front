# React Template

Project front de la MSPR de 3ème année Arossa'je

## Installation et démarrage

- Clone le project
- Naviguer jusqu'au dossier du projet
- Ajouter un fichier .env.local à la racine du projet (regarder .env)
- Exécuté les commandes suivantes :

```bash
# 📦 Installer les dépendances
npm install
pnpm install
yarn install

# ▶️ Démarrez le serveur de développement
npm run dev
pnpm dev
yarn dev
```

## Architecture du Project

Ce projet suit une structure spécifique pour l'organisation et la facilité de navigation :

- 📁 `public`: This directory contains all static files like favicon, manifest, images, etc.
- 📁 `src`: This is the main directory that contains the project source code. It includes:
  - 📁 `api`: This directory contains all the requests (fetch).
  - 📁 `components`: This directory contains all the React components (business logic). Each component has its own directory with the following structure:
    - 📄 `{ComponentName}.jsx`: The main component file.
    - 📄 `{ComponentName}.module.scss`: The component's style file, scoped to the component.
  - 📁 `global`: This directory contains components used in multiple pages, such as headers & footers. Each global component has its own directory with the following structure:
    - 📄 `{ComponentName}.jsx`: The main component file.
    - 📄 `{ComponentName}.module.scss`: The component's style file, scoped to the component.
  - 📁 `pages`: This directory contains React pages. The business logic is in the components.
  - 📁 `routes`: This directory contains the routes (react-router).
  - 📁 `stores`: This directory contains the store keys (react-query).
  - 📁 `styles`: This directory contains global styles (variables, theme, etc.).
  - 📁 `translations`: This directory contains translations (i18n).
  - 📁 `utils`: This directory contains utilities (reusable functions, etc.).
  - 📄 `main.jsx`: This is the main project file and the entry point of the project.
- 📄 `package.json`: This is the project configuration file.

## Librairies

### Stack de Technologie utilisé:

- Library/Framework JS : [React](https://reactjs.org/)
- Language : [JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- Gestionnaire de Package : [pnpm](https://pnpm.io/)
- Builder : [Vite](https://vitejs.dev/)
- Linter/Code formatter : [EsLint](https://eslint.org/) / [Prettier](https://prettier.io/)

#### Librairie Majeur :

Gestionnaire des Data :

- [React-Query](https://tanstack.com/query/v4/docs/react/overview) → Gestionnaire de données asynchrones et de mise en cache (Cache, gestion de l'état des Promesses, etc)
- [Axios](https://axios-http.com/fr/docs/intro) → Client HTTP basé sur Promise pour communiquer avec la partie Back-end

Gestionnaire de formulaire :

- [React-Hook-Form](https://react-hook-form.com/) → Librairie de gestion de formulaire

Routing :

- [React-router-dom](https://reactrouter.com/web/guides/quick-start) → Libraire utilisée pour gérer le routage et la navigation entre les pages de l'application

CSS :

- [Material UI](https://mui.com/) → Librairie de composants UI React
- [Sass](https://sass-lang.com/) → Préprocesseur CSS qui ajoute des fonctionnalités au CSS. Il permet, entre autres, de mieux structurer et simplifier le code, d'éviter les répétitions, etc

Icons :

- [Material Icons](https://mui.com/components/material-icons/) → Librairie d'icônes

Map :

- [Leaflet](https://leafletjs.com/) → Librairie de cartographie interactive
- [React-Leaflet](https://react-leaflet.js.org/) → Wrapper de Leaflet pour React
