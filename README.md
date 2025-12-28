<div align="center">
<img src="https://raw.githubusercontent.com/Nimahkh/newshell/main/newshell.png" width="400" />
</div>

# 📰 NewsHell 

**NewsHell** is a terminal-based RSS news reader with a nostalgic Doom-inspired interface. It's designed for developers and terminal enthusiasts who want to stay updated with the latest news without leaving their command line.

## Key Features

- **Doom-inspired Terminal UI**: A nostalgic and fun way to read your news.
- **Customizable News Sources**: Easily add and categorize your own RSS feeds.
- **Filter & Sort**: Quickly find news by language, category, or source.
- **Vim-style Navigation**: Navigate through news with familiar keybindings.
- **Browser Integration**: Open full articles in your default browser.

## Usage

To run the project locally, clone the repository and install the dependencies:

```bash
git clone https://github.com/Nimahkh/newshell.git
cd newshell
npm install
npm run dev
```

## Technologies Used

- [React](https://reactjs.org/)
- [Ink](https://github.com/vadimdemedes/ink)
- [TypeScript](https://www.typescriptlang.org/)
- [RSS Parser](https://github.com/rbren/rss-parser)

## Adding Your Own Sources

To add your own news sources, open the `src/config/sources.ts` file and add a new source object to the `sources` array. Each source object should have the following structure:

```typescript
{
  id: "your-source-id", // a unique identifier for the source
  name: "Your Source Name", // the name of the source to be displayed
  lang: "en", // the language of the source (e.g., "en", "fa", "nl")
  rss: "https://your-source-rss-feed.com/rss", // the URL of the RSS feed
  categories: {
    // a map of categories to keywords
    politics: ["government", "parliament", "minister"],
    economy: ["economy", "inflation", "market"],
    culture: ["movie", "festival", "art"],
  },
}
```


## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please [open an issue](https://github.com/Nimahkh/newshell/issues).

If you want to contribute code, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-new-feature`
3. Make your changes.
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Open a pull request.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Crafted with ❤️ by [NimaHKH](https://github.com/Nimahkh)
