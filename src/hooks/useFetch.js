import { useState, useEffect, useCallback } from "react";
import { getRequest } from "../axios";

const useFetch = ({ url, onError, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getRequest(url);
      setData(result.data);
      if (onSuccess) {
        const returnedData = onSuccess(result.data);
        if (returnedData) {
          setData(returnedData);
        }
      }
    } catch (err) {
      setError(err);
      if (onError) {
        onError(err);
      }
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { loading, data, error, refetch: fetchData };
};

export default useFetch;
