import { VStack } from "@chakra-ui/react";
import useGameDetails from "../hooks/useGameDetails";
interface Props {
  id: number;
}
const GameDetails = ({ id }: Props) => {
  const { data, loading, err } = useGameDetails(id);

  return (
    <VStack>
      {/* {data?.description && <p> Description: {data.description} </p>} */}
      {data?.website && <p> Website: {data.website} </p>}
      {data?.released && <p> Release Date: {data.released} </p>}
    </VStack>
  );
};

export default GameDetails;
