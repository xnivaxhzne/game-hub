import type Game from "@/entities/Game";
import { getCroppedImageUrl } from "@/services/image-url";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router";
import CriticScore from "./CriticScore";
import Emojis from "./Emojis";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map(({ platform }) => platform)}
          />
          {game.metacritic && <CriticScore score={game.metacritic} />}
        </HStack>
        <Heading fontSize="2xl">
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
        </Heading>
        <Emojis rating={game.rating_top} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
