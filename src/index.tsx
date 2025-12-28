#!/usr/bin/env node
import { render, Text } from "ink";
import { sources } from "./config/sources.js";
import { fetchAllSources } from "./services/fetchNews.js";
import { App } from "./ui/App.js";

const enterAltScreen = () => {
  process.stdout.write("\x1b[?1049h");
  process.stdout.write("\x1b[2J");
  process.stdout.write("\x1b[H");
};

const exitAltScreen = () => {
  process.stdout.write("\x1b[?1049l");
};

enterAltScreen();

async function main() {
  try {
    const news = await fetchAllSources(sources);

    let unmountApp: () => void = () => {};

    const shutdown = (code = 0) => {
      process.stderr.write(`shutdown called with code=${code}\n`);
      unmountApp?.();
      exitAltScreen();
      process.exit(code);
    };

    const { unmount } = render(<App allNews={news} onQuit={shutdown} />);

    (globalThis as any).__APP_SHUTDOWN__ = shutdown;

    process.on("exit", () => exitAltScreen());
    process.on("SIGINT", () => shutdown(0));
    process.on("SIGTERM", () => shutdown(0));
  } catch (err: any) {
    exitAltScreen();
    render(<Text color="red">Failed: {String(err?.message ?? err)}</Text>);
    process.exit(1);
  }
}

main();
