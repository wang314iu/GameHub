import { SimpleGrid, Text, useDisclosure } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Platform, SortBy, Genre } from "../types";
import GameDetails from "./GameDetails";
import { useState } from "react";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  sortBy: SortBy | null;
  searchBy: string;
  page: number;
}
const GameGrids = ({
  selectedPlatform,
  selectedGenre,
  sortBy,
  searchBy,
  page,
}: Props) => {
  const reqParams = {
    genres: selectedGenre?.id,
    parent_platforms: selectedPlatform?.id,
    ordering: sortBy?.value,
    search: searchBy,
    page,
    page_size: 100,
  };
  const useEffectDeps = [
    selectedGenre,
    selectedPlatform,
    sortBy,
    searchBy,
    page,
  ];
  const { data, err, loading } = useGames(reqParams, useEffectDeps);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [gameId, setGameId] = useState<number | null>(null);

  return (
    <>
      {err && <Text>{err}</Text>}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, xl: 5 }} spacing={4}>
        {loading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {!loading &&
          data.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard
                game={game}
                onClick={() => {
                  setGameId(game.id);
                  onOpen();
                }}
              />
            </GameCardContainer>
          ))}
      </SimpleGrid>

      <GameDetails id={gameId} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
export default GameGrids;
