import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";
import Score from "./Score";
import getCroppedImgUrl from "../services/img-url";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card borderRadius={6} overflow={"hidden"} boxShadow="lg">
      <Image src={getCroppedImgUrl(game.background_image, 600, 400)} />
      <CardBody>
        <Heading marginLeft="4px" fontSize={"xl"}>
          {game.name}
        </Heading>
        <HStack justifyContent={"space-between"} marginTop={1}>
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Score score={game.rating} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
