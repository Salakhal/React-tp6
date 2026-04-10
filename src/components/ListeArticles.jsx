import React, { useState, useEffect } from 'react';

function ListeArticles() {
  const [articles, setArticles] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    const fetchArticles = async () => {
      setChargement(true);
      setErreur(null);
      
      try {
        // Utiliser une API fiable et gratuite
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
        
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        setErreur(err.message);
        console.error('Erreur:', err);
      } finally {
        setChargement(false);
      }
    };
    
    fetchArticles();
  }, [limit]); // Re-fetch quand limit change

  if (chargement) {
    return (
      <div>
        <h2 className="card-title">📰 Articles de l'API</h2>
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            border: '3px solid #f3f3f3',
            borderTop: '3px solid #667eea',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 10px'
          }}></div>
          <p>Chargement des articles...</p>
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (erreur) {
    return (
      <div>
        <h2 className="card-title">📰 Articles de l'API</h2>
        <div style={{ 
          textAlign: 'center', 
          padding: '40px',
          background: '#fee',
          borderRadius: '10px'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '10px' }}>⚠️</div>
          <h3 style={{ color: '#e53e3e', marginBottom: '10px' }}>Erreur de chargement</h3>
          <p style={{ color: '#666', marginBottom: '20px' }}>{erreur}</p>
          <button 
            className="btn btn-primary"
            onClick={() => window.location.reload()}
          >
            🔄 Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="card-title">📰 Articles de l'API</h2>
      
      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <label style={{ fontWeight: '500' }}>Nombre d'articles :</label>
        <select 
          value={limit} 
          onChange={(e) => setLimit(Number(e.target.value))}
          style={{
            padding: '8px 12px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          <option value={3}>3 articles</option>
          <option value={5}>5 articles</option>
          <option value={10}>10 articles</option>
          <option value={20}>20 articles</option>
        </select>
        <span style={{ color: '#6c757d', fontSize: '0.85rem' }}>
          📊 Total: {articles.length} articles
        </span>
      </div>
      
      <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
        {articles.map((article, index) => (
          <div key={article.id} style={{
            padding: '15px',
            marginBottom: '10px',
            background: '#f8f9fa',
            borderRadius: '10px',
            transition: 'transform 0.2s'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px', 
              marginBottom: '10px' 
            }}>
              <span style={{
                background: '#667eea',
                color: 'white',
                padding: '2px 8px',
                borderRadius: '5px',
                fontSize: '0.75rem'
              }}>#{index + 1}</span>
              <h3 style={{ fontSize: '1rem', color: '#333' }}>{article.title}</h3>
            </div>
            <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.5' }}>
              {article.body.substring(0, 120)}...
            </p>
          </div>
        ))}
      </div>
      
      <div className="info-box">
        💡 Hook personnalisé useFetch serait idéal pour réutiliser cette logique
      </div>
    </div>
  );
}

export default ListeArticles;