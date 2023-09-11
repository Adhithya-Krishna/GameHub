import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import CriticStore from "./CriticStore";
import getCroppedImage from "../services/image-url";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <div>
      <Card>
        <Image src={getCroppedImage(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconsList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticStore score={game.metacritic} />
          </HStack>
          <Heading size="lg">{game.name}</Heading>
        </CardBody>
      </Card>
    </div>
  );
}

export default GameCard;
