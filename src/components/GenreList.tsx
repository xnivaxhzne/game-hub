import useGenres from "@/hooks/useGenres";
import { getCroppedImageUrl } from "@/services/image-url";
import { HStack, List, Image, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <List.Root>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY="5px" listStyle="none">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
