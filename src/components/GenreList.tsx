import { List, ListItem, Image, Button } from "@chakra-ui/react";
import { Genre } from "../types";
import getCroppedImgUrl from "../services/img-url";
import Genres from "../assets/genres.json";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null; // Instead of keeping a state within component, we pass it as a props
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  return (
    <List>
      {Genres.map((genre) => (
        <ListItem key={genre.id} marginY="12px" width="100%">
          <Button
            fontSize="lg"
            variant="ghost"
            isTruncated
            onClick={() => onSelectGenre(genre)}
            justifyContent="flex-start"
            width="100%"
            isActive={genre.name === selectedGenre?.name}
          >
            <Image
              boxSize="32px"
              borderRadius={8}
              marginRight={2}
              src={getCroppedImgUrl(genre.image_background, 600, 400)}
            ></Image>
            {genre.name}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
