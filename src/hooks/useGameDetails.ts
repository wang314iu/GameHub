import { GameInfo } from "../types";
import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import { apiClient } from "../services";

const useGameDetails = (id: number) => {
  const [data, setData] = useState({} as GameInfo);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<GameInfo>("/games/" + id, {
        signal: controller.signal,
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (err instanceof CanceledError) return;
        setErr(() => err.message);
      });

    //abort the fetch request if the component unmounts or if a new request is initiated
    return () => controller.abort();
  }, [id]);

  return { data, err, loading };
};

export default useGameDetails;
