import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import useParentPlatforms from "../hooks/useParentPlatforms";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../types";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformDropdown = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, err } = useParentPlatforms();

  if (err) return null;

  return (
    <Menu>
      <MenuButton
        size={{ base: "sm" }}
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformDropdown;
