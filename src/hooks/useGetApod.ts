import { useEffect, useState } from "react";
import { APOD } from "../constants/endpoints";

const useGetApod = (params?: Record<string, string>) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetch(APOD)
      .then((response) => response.json())
      .then(console.log)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};

export default useGetApod;
