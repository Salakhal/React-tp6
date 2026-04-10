import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h2 className="card-title">🎯 Focus Input avec useRef</h2>
      
      <div style={{ margin: '20px 0' }}>
        <input 
          ref={inputRef}
          type="text" 
          placeholder="Cliquez sur le bouton pour focus..."
          style={{
            width: '100%',
            padding: '12px',
            border: '2px solid #ddd',
            borderRadius: '8px',
            fontSize: '1rem'
          }}
        />
      </div>
      
      <button className="btn btn-primary" onClick={handleFocus}>
        🎯 Mettre le focus
      </button>
      
      <div className="info-box">
        💡 useRef permet de manipuler le DOM sans re-rendu
      </div>
    </div>
  );
}

export default FocusInput;