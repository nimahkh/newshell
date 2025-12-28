import { useMemo, useState } from "react";
import { Box, Text, useApp, useInput } from "ink";
import SelectInput from "ink-select-input";
import type { NewsItem } from "../../types.js";
import { rtlFriendly } from "../../utils/rtl.js";
import { openArticle } from "../../services/openArticle.js";

export function NewsList({
  items,
  onBack,
}: {
  items: NewsItem[];
  onBack: () => void;
}) {
  const { exit } = useApp();
  const [selected, setSelected] = useState<NewsItem | null>(null);

  const selectItems = useMemo(
    () =>
      items.map((n, index) => ({
        label: rtlFriendly(`${n.title}  (${n.sourceName})\n`),
        value: n,
        key: `${n}-${index}`,
      })),
    [items],
  );

  useInput(async (input, key) => {
    if (input === "q") exit();
    if (input === "b") onBack();

    if (input === "o" && selected?.link) {
      await openArticle(selected.link);
    }
  });

  return (
    <Box flexDirection="column" gap={1}>
      <Text>
        <Text bold>Latest News</Text>{" "}
        <Text dimColor>(Enter/o=open, b=back, q=quit)</Text>
      </Text>

      <Box marginTop={1}>
        <SelectInput
          limit={8}
          items={selectItems}
          onSelect={(item) => setSelected(item.value)}
        />
      </Box>

      <Box marginTop={1} flexDirection="column" gap={1}>
        {selected ? (
          <>
            <Text bold>{rtlFriendly(selected.title)}</Text>
            {selected.summary ? (
              <Text dimColor>{rtlFriendly(selected.summary)}</Text>
            ) : null}
            {selected.publishedAt ? (
              <Text dimColor>{selected.publishedAt}</Text>
            ) : null}
            {selected.link ? <Text underline>{selected.link}</Text> : null}
          </>
        ) : (
          <Text dimColor>Select a headline…</Text>
        )}
      </Box>
    </Box>
  );
}
