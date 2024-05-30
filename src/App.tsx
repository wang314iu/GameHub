import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar, GameGrids, GenreList, PlatformDropdown } from "./components";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import { Platform } from "./hooks/useParentPlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
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
      <GridItem area="nav" paddingX={5}>
        <NavBar />
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
        <PlatformDropdown
          onSelectPlatform={setSelectedPlatform}
          selectedPlatform={selectedPlatform}
        />
        <GameGrids
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
