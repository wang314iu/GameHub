import { useEffect, useState } from "react";
import { apiClient } from "../services";
import { CanceledError } from "axios";
export interface Platform {
  name: string;
  slug: string;
  id: number;
  metacritic: number;
}
export interface Game {
  name: string;
  id: number;
  background_image: string;
  rating: number;
  parent_platforms: { platform: Platform }[];
}

export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const uesGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (err instanceof CanceledError) return;
        setErr(() => err.message);
      });

    //abort the fetch request if the component unmounts or if a new request is initiated
    return () => controller.abort();
  }, []);

  return {
    games,
    err,
    loading,
  };
};
export default uesGames;
