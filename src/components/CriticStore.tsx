import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticStore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <Badge
      colorScheme={color}
      fontSize="0.9rem"
      paddingX={2}
      borderRadius="0.2rem"
    >
      {score}
    </Badge>
  );
};

export default CriticStore;
