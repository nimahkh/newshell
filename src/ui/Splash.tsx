import { Box, Text } from "ink";

const newsHellBanner = `
  ███╗   ██╗███████╗██╗    ██╗███████╗██╗  ██╗███████╗██╗     ██╗
  ████╗  ██║██╔════╝██║    ██║██╔════╝██║  ██║██╔════╝██║     ██║
  ██╔██╗ ██║█████╗  ██║ █╗ ██║███████╗███████║█████╗  ██║     ██║
  ██║╚██╗██║██╔══╝  ██║███╗██║╚════██║██╔══██║██╔══╝  ██║     ██║
  ██║ ╚████║███████╗╚███╔███╔╝███████║██║  ██║███████╗███████╗███████╗
  ╚═╝  ╚═══╝╚══════╝ ╚══╝╚══╝ ╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝
  `;

export function Splash({ isLoading = false }: { isLoading: boolean }) {
  return (
    <Box flexDirection="column" alignItems="center" justifyContent="center">
      <Text color="red">{newsHellBanner}</Text>
      {isLoading ? <Text dimColor>Initializing NEWSHELL…</Text> : null}
    </Box>
  );
}
