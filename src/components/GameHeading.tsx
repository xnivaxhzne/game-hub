import type { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { genre, platform } = gameQuery;
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading size="3xl" paddingLeft="10px" marginBottom={3}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
