import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
const GameCardSkeleton = () => {
  return (
    <Card width="100%" borderRadius={6}>
      <Skeleton height="194px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};
export default GameCardSkeleton;
