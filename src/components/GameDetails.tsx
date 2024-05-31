import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider,
} from "@chakra-ui/react";
import useGameDetails from "../hooks/useGameDetails";
import PlatformIcons from "./PlatformIcons";
interface Props {
  id: number | null;
  isOpen: boolean;
  onClose: () => void;
}
const GameDetails = ({ id, isOpen, onClose }: Props) => {
  if (!id) return null;

  const { data } = useGameDetails(id);

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
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

        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default GameDetails;
