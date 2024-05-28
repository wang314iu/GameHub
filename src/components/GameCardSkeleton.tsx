import { CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
const GameCardSkeleton = () => {
  return (
    <>
      <Skeleton height="194px" startColor="#cc99ff" endColor=" #66ff66" />
      <CardBody>
        <SkeletonText startColor="#cc99ff" endColor="#66ff66" />
      </CardBody>
    </>
  );
};
export default GameCardSkeleton;
