import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

const GameCardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Card
      width={{
        base: "100%",
        md: "240px",
        lg: "270px",
        xl: "300px",
      }}
      borderRadius={6}
      overflow="hidden"
      shadow={"md"}
    >
      {children}
    </Card>
  );
};
export default GameCardContainer;
