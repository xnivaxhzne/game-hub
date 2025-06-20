import { Menu, Button, Icon, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="surface">
          Order by: Relevance <Icon as={BsChevronDown} />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="">Relevance</Menu.Item>
            <Menu.Item value="">Date added</Menu.Item>
            <Menu.Item value="">Name</Menu.Item>
            <Menu.Item value="">Release Date</Menu.Item>
            <Menu.Item value="">Popularity</Menu.Item>
            <Menu.Item value="">Average Rating</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
