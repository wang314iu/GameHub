import { useState, useEffect } from "react";
import { apiClient } from "../services";
import { Text } from "@chakra-ui/react";

interface Game {
  name: string;
  id: number;
  background_image: string;
  rating: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrids = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setErr(err.message));
  });

  return (
    <>
      {err && <Text>{err}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};
export default GameGrids;
