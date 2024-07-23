import { useState, useEffect } from "react";

function useAPI(url, token) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    function fetchData() {
      fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        setError(error);
      });
    }

    fetchData();
  }, [url, token]); // Dependency array ensures fetchData runs when url or token changes

  return { data, error };
}

export default useAPI;
