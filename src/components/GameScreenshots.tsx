import useScreenshots from "@/hooks/useScreenshots";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2
      }}
      gap={3}
    >
      {screenshots?.results
        .filter(({ is_deleted }) => !is_deleted)
        .map(({ id, image }) => (
          <Image key={id} src={image} />
        ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
