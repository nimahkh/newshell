import { Box, Text } from "ink";

export function DoomStatus({
  lang,
  category,
  source,
  count,
}: {
  lang: string;
  category: string;
  source: string;
  count: number;
}) {
  return (
    <Box borderStyle="single" borderColor="cyan" paddingX={2}>
      <Text color="cyan">LANG:</Text>
      <Text bold> {lang} </Text>

      <Text color="cyan">| CAT:</Text>
      <Text bold> {category} </Text>

      <Text color="cyan">| SRC:</Text>
      <Text bold> {source} </Text>

      <Text color="yellow">| {count} 🔥</Text>
    </Box>
  );
}
