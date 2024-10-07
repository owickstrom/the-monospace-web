# The Monospace Web

Monospace fonts are dear to many of us. Some find them more readable, consistent, and beautiful, than their proportional alternatives. Maybe we’re just brainwashed from spending years in terminals? Or are we hopelessly nostalgic? I’m not sure. But I like them, and that’s why I started experimenting with all-monospace Web.

Here are a few example websites built using the Monospace Web:
* Official Website: https://owickstrom.github.io/the-monospace-web/
* Lucien Hinderling's Website : https://hinderling.github.io/
* AZETTL Websolutions: https://azettl.net/

## Installation & Usage

### Advanced Users
1. Clone the repo
2. Build using nix
```
nix develop # or `direnv allow .`
make
```
3. You can figure out the rest from there idk I'm not doing this


### [Regular Users](https://pbs.twimg.com/media/GYWlOmEXQAA9nWF?format=png&name=small)
1. Install [Pandoc](https://pandoc.org/), if you are running Windows, the version of the installer that you want is "windows-x86_64".
2. Ignore the other dependency. It has no easy install method and all it does is automatically refresh your website when you make edits. You can just close the tab and open the html file when you make an edit.
3. Create your website as a markdown file, using Pandoc's markdown formattng. [(Here is an example file)](https://raw.githubusercontent.com/owickstrom/the-monospace-web/refs/heads/main/index.md), compare it to the [live website](https://owickstrom.github.io/the-monospace-web/) to figure out what makes what. You can also [click here](https://garrettgman.github.io/rmarkdown/authoring_pandoc_markdown.html) to see a more in-depth formatting guide.

## License

[MIT](LICENSE.md)
