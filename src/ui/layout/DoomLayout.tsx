import React from "react";
import { Box } from "ink";
import { DoomHeader } from "./DoomHeader.js";
import { DoomStatus } from "./DoomStatus.js";
import { DoomScreen } from "./DoomScreen.js";
import { DoomFooter } from "./DoomFooter.js";
import { Splash } from "../Splash.js";

export function DoomLayout({
  children,
  lang,
  category,
  source,
  count,
}: {
  children: React.ReactNode;
  lang: string;
  category: string;
  source: string;
  count: number;
}) {
  return (
    <Box flexDirection="column" height="100%">
      <Splash isLoading={false} />
      <DoomHeader />
      <DoomStatus
        lang={lang}
        category={category}
        source={source}
        count={count}
      />
      <DoomScreen>{children}</DoomScreen>
      <DoomFooter />
    </Box>
  );
}
