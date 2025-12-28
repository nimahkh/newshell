import { Box, Text } from "ink";

export function DoomFooter() {
  return (
    <Box borderStyle="single" borderColor="gray" paddingX={2}>
      <Text dimColor>↑↓ MOVE • ENTER OPEN • O OPEN • B BACK • Q QUIT</Text>
    </Box>
  );
}
