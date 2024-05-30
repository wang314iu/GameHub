import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import {
  NavBar,
  GameGrids,
  GenreList,
  PlatformDropdown,
  SortedByDropdown,
  GameHeading,
} from "./components";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import { Platform } from "./hooks/useParentPlatforms";
import { SortBy } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [sortBy, setSortBy] = useState<SortBy | null>(null);
  const [searchBy, setSearchBy] = useState("");

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "sidebar main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={setSearchBy} />
      </GridItem>
      {/* only render on lg or bigger screen */}
      <Show above="lg">
        <GridItem area="sidebar" paddingX={1}>
          <GenreList
            onSelectGenre={setSelectedGenre}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading
          genre={selectedGenre?.name}
          platform={selectedPlatform?.name}
        />
        <HStack justifyContent="space-between" marginY={6}>
          <PlatformDropdown
            onSelectPlatform={setSelectedPlatform}
            selectedPlatform={selectedPlatform}
          />
          <SortedByDropdown
            selectedSortOrder={sortBy}
            onSelectSortOrder={setSortBy}
          />
        </HStack>
        <GameGrids
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          sortBy={sortBy}
          searchBy={searchBy}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
