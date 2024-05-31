import { useEffect, useState } from "react";
import { apiClient } from "../services";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, params: object = {}, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          params,
        })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          if (err instanceof CanceledError) return;
          setErr(() => err.message);
        });

      //abort the fetch request if the component unmounts or if a new request is initiated
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return {
    data,
    err,
    loading,
  };
};
export default useData;
