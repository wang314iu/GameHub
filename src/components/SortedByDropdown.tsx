import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { SortBy } from "../hooks/useGames";
interface Props {
  onSelectSortOrder: (sortOrder: SortBy) => void;
  selectedSortOrder: SortBy | null;
}

const SortedByDropdown = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortBy = [
    { name: "Rating", value: "-rating" },
    { name: "Release Date", value: "-released" },
    { name: "Popularity", value: "-metacritic" },
    { name: "Data Added", value: "-added" },
  ];
  return (
    <Menu>
      <MenuButton
        size={{ base: "sm", md: "md" }}
        // marginY={3}
        as={Button}
        rightIcon={<BsChevronDown />}
        width="220px"
      >
        Sort By: {selectedSortOrder?.name || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortBy.map(({ name, value }) => (
          <MenuItem
            key={value}
            onClick={() => onSelectSortOrder({ name, value })}
          >
            {name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default SortedByDropdown;
