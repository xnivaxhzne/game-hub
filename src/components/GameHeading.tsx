import type { GameQuery } from "@/App";
import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { genreId, platformId } = gameQuery;

  const { data: platforms } = usePlatforms();
  const { data: genres } = useGenres();

  const platformName = platforms.results.find(
    ({ id }) => id === platformId
  )?.name;
  const genreName = genres.results.find(({ id }) => id === genreId)?.name;

  const heading = `${platformName || ""} ${genreName || ""} Games`;

  return (
    <Heading size="3xl" paddingLeft="10px" marginBottom={3}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
