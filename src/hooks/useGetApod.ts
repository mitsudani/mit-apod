import { useEffect, useState } from "react";
import { APOD } from "../constants/endpoints";
import { APOD_KEY } from "../constants/env";
//import mock from "../components/Apod/datamock.json";

type TApodResponse = {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  title: string;
  url: string;
};

const useGetApod = (params?: Record<string, string>) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState<TApodResponse>({
    copyright: "",
    date: "",
    explanation: "",
    hdurl: "",
    title: "",
    url: "",
  });

  useEffect(() => {
    fetch(`${APOD}?api_key=${APOD_KEY}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`Error: ${response.status} - Something went wrong`);
      })
      .then((result) => setData(result))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [params]);

  return {
    data: data,
    isLoading,
    error,
  };
};

export default useGetApod;
