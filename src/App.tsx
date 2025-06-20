import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { type Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { type Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleGenreSelection = (genre: Genre) =>
    setGameQuery((prevQuery) => ({
      ...prevQuery,
      genre
    }));
  const handlePlatformSelection = (platform: Platform) =>
    setGameQuery((prevQuery) => ({
      ...prevQuery,
      platform
    }));

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
      templateColumns={{
        base: `1fr`,
        lg: `200px 1fr`
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem hideBelow="lg" area="aside" paddingX={5}>
        <GenreList
          onSelectGenre={handleGenreSelection}
          selectedGenre={gameQuery.genre}
        />
      </GridItem>
      <GridItem area="main">
        <PlatformSelector
          onSelectPlatform={handlePlatformSelection}
          selectedPlatform={gameQuery.platform}
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
