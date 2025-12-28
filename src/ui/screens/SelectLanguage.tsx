import React from "react";
import SelectInput from "ink-select-input";
import { Box, Text } from "ink";
import { deriveLanguages } from "../../utils/deriveLanguages.js";
import { sources } from "../../config/sources.js";

export type LangChoice = "all" | string;

export function SelectLanguage({
  onSelect,
}: {
  onSelect: (lang: LangChoice) => void;
}) {
  const languages = deriveLanguages(sources);

  const items = [
    { label: "All", value: "all", key: "all" },
    ...languages.map((lang) => ({
      label: lang.toUpperCase(),
      value: lang,
      key: lang,
    })),
  ];

  return (
    <Box flexDirection="column">
      <Text>✔ Select language:</Text>
      <SelectInput items={items} onSelect={(item) => onSelect(item.value)} />
    </Box>
  );
}
