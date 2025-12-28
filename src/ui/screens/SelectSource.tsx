import React from "react";
import { Box, Text } from "ink";
import SelectInput from "ink-select-input";

export type SourceChoice = "all" | string;

export function SelectSource({
  sources,
  onSelect,
}: {
  sources: { id: string; name: string }[];
  onSelect: (source: SourceChoice) => void;
}) {
  const items = [
    {
      label: "All sources",
      value: "all" as const,
      key: "all",
    },
    ...sources.map((s) => ({
      label: s.name,
      value: s.id,
      key: s.id,
    })),
  ];

  return (
    <Box flexDirection="column">
      <Text bold color="green">
        ✔ Select source:
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
