import React, { useState } from 'react';
import './App.css';
import Compteur from './components/Compteur';
import FocusInput from './components/FocusInput';      // ← UNE SEULE FOIS
import CompteurRendu from './components/CompteurRendu';
import ListeArticles from './components/ListeArticles';
import Timer from './components/Timer';

function App() {
  const [activeTab, setActiveTab] = useState('compteur');

  const tabs = [
    { id: 'compteur', name: '📊 Compteur', component: <Compteur /> },
    { id: 'focus', name: '🎯 Focus Input', component: <FocusInput /> },
    { id: 'rendu', name: '🔄 Compteur Rendu', component: <CompteurRendu /> },
    { id: 'articles', name: '📰 Articles API', component: <ListeArticles /> },
    { id: 'timer', name: '⏱️ Timer', component: <Timer /> }
  ];

  return (
    <div className="app">
      <header>
        <h1>⚛️ TP Hooks Avancés - React</h1>
        <p>useReducer • useRef • useEffect • Hooks personnalisés</p>
      </header>

      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="content">
        {tabs.find(tab => tab.id === activeTab)?.component}
      </div>

      <footer>
        <p>© 2026 - TP React Hooks</p>
      </footer>
    </div>
  );
}

export default App;