import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { Genre } from "../types";
import Genres from "../assets/genres.json";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null; // Instead of keeping a state within component, we pass it as a props
}
const GenreDropdown = ({ onSelectGenre, selectedGenre }: Props) => {
  return (
    <Menu>
      <MenuButton
        size={{ base: "sm", md: "md" }}
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        {selectedGenre?.name || "Genre"}
      </MenuButton>
      <MenuList>
        {Genres.map((genre: Genre) => (
          <MenuItem key={genre.id} onClick={() => onSelectGenre(genre)}>
            {genre.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GenreDropdown;
