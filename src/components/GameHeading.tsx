import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";
import { Heading } from "@chakra-ui/react";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);

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
