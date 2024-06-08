import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Box,
} from "@chakra-ui/react";
import useGameDetails from "../hooks/useGameDetails";
interface Props {
  id: number | null;
  isOpen: boolean;
  onClose: () => void;
}
const GameDetails = ({ id, isOpen, onClose }: Props) => {
  if (!id) return null;

  const { data, loading, err } = useGameDetails(id);

  if (err) return null;

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent pt={4}>
        {!loading && (
          <>
            <DrawerCloseButton />
            <DrawerHeader>{data.name}</DrawerHeader>
            <DrawerBody>
              {data?.description && (
                <div dangerouslySetInnerHTML={{ __html: data?.description }} />
              )}
              <Divider marginY={4} />
              {data?.website && (
                <p>
                  <b>Website: </b>
                  <a href={data.website} target="_blank">
                    {data.website}
                  </a>
                </p>
              )}
              {data?.released && (
                <p>
                  <b> Release Date:</b> {data.released}
                </p>
              )}
            </DrawerBody>
          </>
        )}
        {loading && (
          <SkeletonText
            m="4"
            noOfLines={90}
            spacing="5"
            skeletonHeight="4"
            startColor="#cc99ff"
            endColor="#66ff66"
          />
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default GameDetails;
