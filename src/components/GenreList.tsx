import useGenres from "@/hooks/useGenres";
import { getCroppedImageUrl } from "@/services/image-url";
import useGameQueryStore from "@/store";
import { Heading, HStack, Image, Link, List, Spinner } from "@chakra-ui/react";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List.Root>
        {data.results.map((genre) => (
          <List.Item key={genre.id} paddingY="5px" listStyle="none">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit="cover"
              />
              <Link
                fontSize="lg"
                fontWeight={genre.id === genreId ? "bold" : "normal"}
                onClick={() => setGenreId(genre.id)}
              >
                {genre.name}
              </Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
