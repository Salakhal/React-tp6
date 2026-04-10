import React, { useState, useEffect } from 'react';

function Timer() {
  const [secondes, setSecondes] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;
    
    if (isRunning) {
      interval = setInterval(() => {
        setSecondes(s => s + 1);
      }, 1000);
    }
    
    // Nettoyage important !
    return () => {
      if (interval) {
        clearInterval(interval);
        console.log('Timer nettoyé !');
      }
    };
  }, [isRunning]);

  const formatTime = (sec) => {
    const mins = Math.floor(sec / 60);
    const seconds = sec % 60;
    return mins > 0 ? `${mins}m ${seconds}s` : `${seconds}s`;
  };

  return (
    <div>
      <h2 className="card-title">⏱️ Timer avec nettoyage</h2>
      
      <div style={{ 
        textAlign: 'center', 
        fontSize: '3rem', 
        fontWeight: 'bold',
        fontFamily: 'monospace',
        color: '#667eea',
        margin: '30px 0'
      }}>
        {formatTime(secondes)}
      </div>
      
      <div className="btn-group">
        {isRunning ? (
          <button className="btn btn-warning" onClick={() => setIsRunning(false)}>
            ⏸️ Pause
          </button>
        ) : (
          <button className="btn btn-success" onClick={() => setIsRunning(true)}>
            ▶️ Reprendre
          </button>
        )}
        <button className="btn btn-danger" onClick={() => {
          setSecondes(0);
          setIsRunning(true);
        }}>
          🔄 Reset
        </button>
      </div>
      
      <div className="info-box">
        💡 useEffect avec fonction de nettoyage évite les fuites mémoire
      </div>
    </div>
  );
}

export default Timer;