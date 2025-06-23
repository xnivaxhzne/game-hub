import { Grid, GridItem, HStack } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { type Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import type { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleGenreSelection = (genre: Genre) => {
    setGameQuery((prevQuery) => ({
      ...prevQuery,
      genreId: genre.id
    }));
  };

  const handlePlatformSelection = (platform: Platform) => {
    setGameQuery((prevQuery) => ({
      ...prevQuery,
      platformId: platform.id
    }));
  };

  const handleSortOrderSelection = (sortOrder: string) => {
    setGameQuery((prevQuery) => ({
      ...prevQuery,
      sortOrder
    }));
  };

  const handleSearch = (searchText: string) => {
    setGameQuery((prevQuery) => ({
      ...prevQuery,
      searchText
    }));
  };

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
        <NavBar onSearch={handleSearch} />
      </GridItem>
      <GridItem hideBelow="lg" area="aside" paddingX={5}>
        <GenreList
          onSelectGenre={handleGenreSelection}
          selectedGenreId={gameQuery.genreId}
        />
      </GridItem>
      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <HStack spaceX={5} paddingLeft="10px" marginBottom={5}>
          <PlatformSelector
            onSelectPlatform={handlePlatformSelection}
            selectedPlatformId={gameQuery.platformId}
          />
          <SortSelector
            selectedSortOrder={gameQuery.sortOrder}
            onSelectSortOrder={handleSortOrderSelection}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
