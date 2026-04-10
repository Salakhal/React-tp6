import React, { useRef, useState } from 'react';

function CompteurRendu() {
  const compteur = useRef(0);
  const [count, setCount] = useState(0);
  const [renders, setRenders] = useState([]);

  // ⚠️ IMPORTANT: Pas de useEffect pour éviter la boucle infinie
  // On incrémente manuellement à chaque rendu
  compteur.current += 1;
  
  // On ajoute à l'historique uniquement quand count change
  React.useEffect(() => {
    const renderInfo = {
      number: compteur.current,
      time: new Date().toLocaleTimeString(),
      count: count
    };
    setRenders(prev => [renderInfo, ...prev].slice(0, 20));
  }, [count]); // Seulement quand count change

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const clearHistory = () => {
    setRenders([]);
  };

  return (
    <div>
      <h2 className="card-title">🔄 Compteur de Rendu</h2>
      
      <div style={{ display: 'flex', gap: '20px', margin: '20px 0' }}>
        <div style={{ flex: 1, background: '#f8f9fa', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
          <div style={{ fontSize: '0.8rem', color: '#6c757d' }}>Nombre de rendus</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#667eea' }}>{compteur.current}</div>
        </div>
        <div style={{ flex: 1, background: '#f8f9fa', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
          <div style={{ fontSize: '0.8rem', color: '#6c757d' }}>État count</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#48bb78' }}>{count}</div>
        </div>
      </div>
      
      <div className="btn-group">
        <button className="btn btn-primary" onClick={handleIncrement}>
          ➕ Incrémenter count
        </button>
        <button className="btn btn-warning" onClick={handleReset}>
          🔄 Reset count
        </button>
        <button className="btn btn-danger" onClick={clearHistory}>
          🗑️ Effacer historique
        </button>
      </div>
      
      {renders.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3 style={{ marginBottom: '10px', fontSize: '1rem' }}>Historique des rendus :</h3>
          <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
            {renders.map((render, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '8px',
                marginBottom: '5px',
                background: '#f8f9fa',
                borderRadius: '5px',
                fontSize: '0.85rem'
              }}>
                <span style={{ fontWeight: 'bold', color: '#667eea' }}>#{render.number}</span>
                <span style={{ color: '#6c757d' }}>{render.time}</span>
                <span>count: {render.count}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="info-box">
        💡 useRef persiste la valeur entre les rendus sans déclencher de re-rendu
      </div>
    </div>
  );
}

export default CompteurRendu;