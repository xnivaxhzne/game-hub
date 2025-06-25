import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  threshold?: number;
}
const ExpandableText = ({ children, threshold = 300 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;

  if (children.length <= threshold) {
    return <Text>{children}</Text>;
  }

  const summary = expanded ? children : children.slice(0, 300) + "...";

  return (
    <Text>
      {summary}
      <Button
        marginLeft={3}
        colorPalette="yellow"
        fontWeight="bold"
        size="2xs"
        onClick={() => setExpanded(!expanded)}
      >
        Show {expanded ? "less" : "more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
