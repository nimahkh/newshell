import { Box, Text } from "ink";
import { getPackageVersion } from "../../utils/fn.js";
import { useEffect, useState } from "react";

export function DoomHeader() {
  const [version, setVersion] = useState("");
  useEffect(() => {
    getPackageVersion().then(setVersion);
  }, []);

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      borderStyle="double"
      borderColor="red"
      paddingX={2}
    >
      <Text bold color="red">
        ███ NEWS TERMINAL ███
      </Text>
      {version && <Text color="yellow"> {version} </Text>}
    </Box>
  );
}
