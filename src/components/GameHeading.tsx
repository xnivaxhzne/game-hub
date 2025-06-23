import type { GameQuery } from "@/App";
import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { genreId, platformId } = gameQuery;

  const platformName = usePlatform(platformId)?.name;
  const genreName = useGenre(genreId)?.name;

  const heading = `${platformName || ""} ${genreName || ""} Games`;

  return (
    <Heading size="3xl" paddingLeft="10px" marginBottom={3}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
