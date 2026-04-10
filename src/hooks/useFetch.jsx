import { useState, useEffect, useCallback } from 'react';

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
  const [status, setStatus] = useState(null);

  const fetchData = useCallback(async () => {
    setChargement(true);
    setErreur(null);
    
    try {
      const response = await fetch(url, options);
      setStatus(response.status);
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status} ${response.statusText}`);
      }
      
      const result = await response.json();
      setData(result);
    } catch (err) {
      setErreur({
        message: err.message,
        status: status
      });
      console.error('Erreur de fetch:', err);
    } finally {
      setChargement(false);
    }
  }, [url, options, status]);

  useEffect(() => {
    fetchData();
    
    return () => {
      // Annuler les requêtes en cours si nécessaire
    };
  }, [fetchData]);

  const refetch = () => {
    fetchData();
  };

  return { data, chargement, erreur, refetch, status };
}

export default useFetch;