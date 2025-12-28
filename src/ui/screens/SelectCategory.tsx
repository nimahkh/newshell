import SelectInput from "ink-select-input";
import { Box, Text } from "ink";

export type CategoryChoice = "all" | string;

/**
 * Turn a raw category key into a readable label.
 * Example:
 *   "world" -> "World"
 *   "middle_east" -> "Middle East"
 */
function formatCategoryLabel(category: string) {
  return category
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function SelectCategory({
  available,
  onSelect,
}: {
  available: string[];
  onSelect: (category: CategoryChoice) => void;
}) {
  const items = [
    { label: "All categories", value: "all" as const, key: "all" },

    ...available.map((category) => ({
      label: formatCategoryLabel(category),
      value: category,
      key: category,
    })),
  ];

  return (
    <Box flexDirection="column">
      <Text bold color="green">
        ✔ Select category:
      </Text>

      <Box marginTop={1}>
        <SelectInput
          items={items}
          limit={8}
          onSelect={(item) => onSelect(item.value)}
        />
      </Box>
    </Box>
  );
}
