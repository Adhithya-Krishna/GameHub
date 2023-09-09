import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <div>
      <Card borderRadius="0.5rem" overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
          <Heading size="lg ">{game.name}</Heading>
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </CardBody>
      </Card>
    </div>
  );
}

export default GameCard;
