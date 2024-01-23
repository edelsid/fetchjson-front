import { useState, useEffect } from "react";

export function useJsonFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    try {
      fetch(url).then(response => {
        if (!response.ok) {
          response.json().then(data => {
            setError(data.status);
            setLoading(false);
          })
        } else {
          response.json().then(data => {
            setLoading(false)
            setData(data);
            setError(null);
          });
        }
      });
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }, [url]);

  return [ data, loading, error ]
}
