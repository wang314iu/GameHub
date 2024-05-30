import { Game } from "../types";
import { CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";
import Score from "./Score";
import getCroppedImgUrl from "../services/img-url";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <>
      <Image
        src={getCroppedImgUrl(game.background_image, 600, 400)}
        // height={{ base: "65%" }}
      />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={4}>
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Score score={game.rating} />
        </HStack>
        <Heading marginLeft="4px" fontSize={"xl"}>
          {game.name}
        </Heading>
      </CardBody>
    </>
  );
};

export default GameCard;
