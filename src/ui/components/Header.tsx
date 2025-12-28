import React from "react";
import { Box, Text } from "ink";
import { getPackageName } from "../../utils/fn.js";

export function Header({ subtitle }: { subtitle?: string }) {
  const [packageName, setPackageName] = React.useState<string | null>(null);

  React.useEffect(() => {
    getPackageName().then(setPackageName);
  }, []);

  return (
    <Box flexDirection="column" marginBottom={2}>
      {packageName ? <Text bold>📰 {packageName.toUpperCase()}</Text> : null}
      {subtitle ? <Text dimColor>{subtitle}</Text> : null}
    </Box>
  );
}
