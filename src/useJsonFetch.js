import { useState, useEffect } from 'react';

export default function useJsonFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setError(response.statusText);
        }
        const data = await response.json();
        console.log(data)
        setData(data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchData();
    return () => {};
  }, [url]);

  return [{ data, loading, error }];
}
