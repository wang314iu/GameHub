import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar, GameGrids, GenreList } from "./components";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "sidebar main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {/* only render on lg or bigger screen */}
      <Show above="lg">
        <GridItem area="sidebar">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrids />
      </GridItem>
    </Grid>
  );
}

export default App;
