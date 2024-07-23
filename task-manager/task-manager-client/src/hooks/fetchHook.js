import { useState, useEffect } from "react";

function useAPI(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    function fetchData() {
      fetch(url)
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
  }, [url]); // Dependency array ensures fetchData runs when url changes

  return { data, error };
}

export default useAPI;
