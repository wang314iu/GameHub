import {
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import useParentPlatforms from "../hooks/useParentPlatforms";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useParentPlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformDropdown = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, err } = useParentPlatforms();

  if (err) return null;

  return (
    <Menu>
      <MenuButton marginY={3} as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem onClick={() => onSelectPlatform(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformDropdown;
