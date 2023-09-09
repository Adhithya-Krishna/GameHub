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
          <Heading size="lg ">{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformIconsList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticStore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </div>
  );
}

export default GameCard;
