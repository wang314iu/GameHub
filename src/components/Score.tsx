import { Badge } from "@chakra-ui/react";

const Score = ({ score }: { score: number }) => {
  const color = score >= 4 ? "purple" : score >= 3 ? "green" : "yellow";
  return (
    <Badge size={"sm"} colorScheme={color}>
      {score}
    </Badge>
  );
};
export default Score;
