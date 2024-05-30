import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  SkeletonText,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImgUrl from "../services/img-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null; // Instead of keeping a state within component, we pass it as a props
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, loading } = useGenre();
  return (
    <>
      {loading && (
        <SkeletonText
          noOfLines={30}
          spacing="3"
          skeletonHeight="9"
          startColor="#cc99ff"
          endColor="#66ff66"
          marginTop={2}
        />
      )}

      {!loading && (
        <List>
          {data.map((genre) => (
            <ListItem key={genre.id} marginY="10px" width="100%">
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
      )}
    </>
  );
};

export default GenreList;
