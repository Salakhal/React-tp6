# TP6 - Découverte des Hooks Avancés React

## 📋 Description

Ce projet pratique permet d'apprendre et de maîtriser les Hooks avancés de React :
- `useReducer` pour la gestion d'état complexe
- `useRef` pour la manipulation du DOM
- `useEffect` avec nettoyage
- Création de Hooks personnalisés

## 🎯 Objectifs Pédagogiques

- Comprendre le fonctionnement de `useReducer` vs `useState`
- Savoir manipuler le DOM avec `useRef` sans provoquer de re-rendu
- Maîtriser les effets de bord et leur nettoyage avec `useEffect`
- Créer des Hooks personnalisés réutilisables

## 🚀 Technologies Utilisées

- **React 18+** - Bibliothèque UI
- **Vite** - Outil de build rapide
- **FontAwesome** - Icônes
- **CSS3** - Styles modernes

## 📦 Installation

### Prérequis
- Node.js (version 14 ou supérieure)
- npm (inclus avec Node.js)

### Étapes d'installation

1. **Cloner ou créer le projet**
```bash
npx create-react-app tp6-hooks-debutant
# ou avec Vite
npm create vite@latest tp6-hooks-debutant -- --template react
```
 ## 2. Accéder au dossier
```
cd tp6-hooks-debutant
```
 ## .Installer les dépendances

```
npm install
npm install @fortawesome/fontawesome-free

```
## 4.Lancer l'application

```
npm run dev
# ou avec Create React App
npm start
```
## 5. Ouvrir dans le navigateur

```
http://localhost:5173

```
# 📁 Structure du Projet

```
tp6-hooks-debutant/
├── src/
│   ├── components/
│   │   ├── Compteur.jsx          # useReducer
│   │   ├── FocusInput.jsx        # useRef
│   │   ├── CompteurRendu.jsx     # useRef + useEffect
│   │   ├── ListeArticles.jsx     # Hook personnalisé
│   │   ├── Timer.jsx             # useEffect avec nettoyage
│   │   └── styles/
│   │       └── components.css
│   ├── hooks/
│   │   └── useFetch.jsx          # Hook personnalisé
│   ├── App.jsx                   # Composant principal
│   ├── App.css                   # Styles globaux
│   └── main.jsx                  # Point d'entrée
├── public/
├── package.json
└── README.md
```


## 🎨 Fonctionnalités

* ✅ Interface moderne et responsive
* ✅ Onglets pour naviguer entre les composants
* ✅ Animations CSS
* ✅ Messages d'information pédagogiques
* ✅ Gestion des erreurs API
* ✅ Design épuré et professionnel

---

## 📚 Concepts Clés Expliqués

* **`useReducer`** : Utilisez `useReducer` quand vous avez plusieurs façons de modifier un état ou quand l'état suivant dépend de l'état précédent de manière complexe.
* **`useRef`** : `useRef` persiste la valeur entre les rendus sans déclencher de re-rendu. Parfait pour référencer des éléments DOM ou stocker des valeurs qui ne doivent pas provoquer de mise à jour.
* **`useEffect` avec nettoyage** : La fonction retournée dans `useEffect` s'exécute quand le composant est démonté. Essentiel pour nettoyer les abonnements, timers, ou annuler des requêtes.
* **Hooks Personnalisés** : Permet d'extraire et de réutiliser la logique stateful entre plusieurs composants.

---

## 🧪 Tests et Validation

Pour vérifier que tout fonctionne dans l'application :

* **Compteur :** Cliquez sur +1, -1, Reset, Ajouter.
* **Focus Input :** Cliquez sur "Mettre le focus" → le curseur doit apparaître instantanément dans la barre.
* **Compteur Rendu :** Cliquez sur "Incrémenter count" → le compteur de rendus augmente.
* **Articles API :** Les articles doivent se charger depuis l'API.
* **Timer :** Le compteur doit s'incrémenter, les boutons pause et reset doivent fonctionner.

 ## 📖 Ressources

* [Documentation React - useReducer](https://react.dev/reference/react/useReducer)
* [Documentation React - useRef](https://react.dev/reference/react/useRef)
* [Documentation React - useEffect](https://react.dev/reference/react/useEffect)
* [Créer des Hooks personnalisés](https://react.dev/learn/reusing-logic-with-custom-hooks)




## 🎥 Vidéo de  Démonstration


 la démonstration vidéo de l'application :




https://github.com/user-attachments/assets/3d47cce8-e1e2-4e88-acd0-fbfe0f3b7ce4




## 👤 Auteur

* **École Normale Supérieure de Marrakech**
  
* **Réalisé par :** SALMA LAKHAL
  
* **Filière  :** CLE_INFO_S5

  
* **Encadré par :** Pr. Mohamed LACHGAR

* **Module :** `Développement Front-End moderne avec React`
 




