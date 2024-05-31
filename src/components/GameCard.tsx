import { Game } from "../types";
import { CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";
import Score from "./Score";
import getCroppedImgUrl from "../services/img-url";

const GameCard = ({ game, onClick }: { game: Game; onClick: () => void }) => {
  return (
    <CardBody padding={0} onClick={onClick}>
      <Image src={getCroppedImgUrl(game.background_image, 600, 400)} />
      <HStack justifyContent={"space-between"} margin={2}>
        <PlatformIcons
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <Score score={game.rating} />
      </HStack>
      <Heading margin={3} fontSize={"xl"}>
        {game.name}
      </Heading>
    </CardBody>
  );
};

export default GameCard;
