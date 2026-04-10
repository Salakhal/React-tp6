import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

function Compteur() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2 className="card-title">📊 Compteur avec useReducer</h2>
      
      <div style={{ 
        textAlign: 'center', 
        fontSize: '4rem', 
        fontWeight: 'bold',
        color: '#667eea',
        margin: '30px 0'
      }}>
        {state.count}
      </div>
      
      <div className="btn-group">
        <button className="btn btn-primary" onClick={() => dispatch({ type: 'decrement' })}>
          ➖ -1
        </button>
        <button className="btn btn-danger" onClick={() => dispatch({ type: 'reset' })}>
          🔄 Reset
        </button>
        <button className="btn btn-primary" onClick={() => dispatch({ type: 'increment' })}>
          ➕ +1
        </button>
      </div>
      
      <div className="info-box">
        💡 useReducer est parfait pour gérer des états complexes avec des actions
      </div>
    </div>
  );
}

export default Compteur;