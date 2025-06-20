import { Menu, Button, Icon, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOrder: string | null;
}

const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortOrders = [
    {
      value: "",
      label: "Relevance"
    },
    {
      value: "-added",
      label: "Date added"
    },
    {
      value: "name",
      label: "Name"
    },
    {
      value: "-released",
      label: "Release Date"
    },
    {
      value: "-metacritic",
      label: "Popularity"
    },
    {
      value: "-rating",
      label: "Average Rating"
    }
  ];
  const currentSortOrder = sortOrders.find(
    ({ value }) => value === selectedSortOrder
  );
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="surface">
          Order by: {currentSortOrder?.label || "Relevance"}{" "}
          <Icon as={BsChevronDown} />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map(({ value, label }) => (
              <Menu.Item
                key={value}
                onClick={() => onSelectSortOrder(value)}
                value={value}
              >
                {label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
