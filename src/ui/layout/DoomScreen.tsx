import React from "react";
import { Box } from "ink";

export function DoomScreen({ children }: { children: React.ReactNode }) {
  return (
    <Box
      flexDirection="column"
      flexGrow={1}
      borderStyle="round"
      borderColor="white"
      paddingX={2}
      paddingY={1}
    >
      {children}
    </Box>
  );
}
