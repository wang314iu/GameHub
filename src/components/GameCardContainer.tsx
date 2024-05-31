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
      boxShadow={"dark-lg"}
      minHeight="270px"
      _hover={{ boxShadow: "0 4px 12px #D9D1EE", cursor: "pointer" }}
    >
      {children}
    </Card>
  );
};
export default GameCardContainer;
