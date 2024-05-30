import { Heading } from "@chakra-ui/react";

interface Props {
  genre?: string;
  platform?: string;
}

const GameHeading = ({ genre = "", platform = "" }: Props) => {
  return (
    <Heading size="2xl" marginTop={5}>
      {`${platform} ${genre} Games`}{" "}
    </Heading>
  );
};
export default GameHeading;
