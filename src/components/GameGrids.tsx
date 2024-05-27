import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "../hooks";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrids = () => {
  const { games, err, loading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  console.log(skeletons, loading);
  return (
    <>
      {err && <Text>{err}</Text>}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
        spacing={10}
      >
        {loading && skeletons.map((_) => <GameCardSkeleton />)}
        {!loading &&
          games.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  );
};
export default GameGrids;
