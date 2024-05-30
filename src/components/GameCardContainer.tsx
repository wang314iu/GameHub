import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

const GameCardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Card
      width={{
        base: "100%",
      }}
      borderRadius={6}
      overflow="hidden"
      shadow={"dark-lg"}
    >
      {children}
    </Card>
  );
};
export default GameCardContainer;
