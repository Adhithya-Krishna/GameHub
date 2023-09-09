import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import CriticStore from "./CriticStore";

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
