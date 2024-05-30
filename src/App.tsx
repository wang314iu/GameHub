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
import { Platform, SortBy, Genre } from "./types";

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
        lg: "260px 1fr",
      }}
    >
      <GridItem area="nav" position="sticky" top={0} zIndex={999}>
        <NavBar onSearch={setSearchBy} />
      </GridItem>
      {/* only render on lg or bigger screen */}
      {/* genre list */}
      <Show above="lg">
        <GridItem
          area="sidebar"
          paddingX={1}
          paddingBottom={8}
          position="fixed"
          maxHeight="calc(100vh - 70px)"
          overflowY="auto"
          top="70px"
        >
          <GenreList
            onSelectGenre={setSelectedGenre}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      {/* Main content */}
      <GridItem
        area="main"
        paddingX={4}
        paddingBottom={8}
        position={{ lg: "fixed" }}
        maxHeight="calc(100vh - 70px)"
        overflowY="auto"
        top="70px"
        left="260px"
        right="0"
      >
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
