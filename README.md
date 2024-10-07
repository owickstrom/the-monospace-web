# The Monospace Web

Monospace fonts are dear to many of us. Some find them more readable, consistent, and beautiful, than their proportional alternatives. Maybe we’re just brainwashed from spending years in terminals? Or are we hopelessly nostalgic? I’m not sure. But I like them, and that’s why I started experimenting with all-monospace Web.

Here are a few example websites built using the Monospace Web:
* Official Website: https://owickstrom.github.io/the-monospace-web/
* Lucien Hinderling's Website : https://hinderling.github.io/
* AZETTL Websolutions: https://azettl.net/

## Installation & Usage

### 👩‍💻 Advanced Users
1. Clone the repository.
2. Build using Nix:
```
nix develop # or `direnv allow .`
make
```

### [🙍‍♂️](https://pbs.twimg.com/media/GYWlOmEXQAA9nWF?format=png&name=small) <!-- + People won't notice that the emoji is a link, makes for a good easter egg + --> Regular Users
1. Install [Pandoc](https://pandoc.org/). If you are running Windows, the version of the installer that you want is `windows-x86_64`.
2. Ignore the other dependency. It has no easy install method and all it does is automatically refresh your website when you make edits.
3. From this repository, download the following files:
	* reset.css (This file ensures everything works, don't touch it)
	* index.css (This file controls the visual style for the website, modify only if you understand [CSS](https://www.youtube.com/watch?v=OEV8gMkCHXQ))
	* template.html (This defines the structural layout for Monospace Web, don't touch it unless you understand [HTML](https://www.youtube.com/watch?v=ok-plXXHlWw))
	* To download files from a repository, click on its name and it will allow you to inspect the individual file, then, on the right side of the page there should be a tiny button (next to a button that says "RAW") to download it.
4.  Create a folder anywhere in your computer and place the downloaded files inside. Your website will live here.
5. Create your website as a markdown file, using Pandoc's markdown formattng. [Here is an example file](https://raw.githubusercontent.com/owickstrom/the-monospace-web/refs/heads/main/index.md), compare it to the [live website](https://owickstrom.github.io/the-monospace-web/) to figure out what makes what. You can also [click here](https://garrettgman.github.io/rmarkdown/authoring_pandoc_markdown.html) to see a more in-depth formatting guide.
6. Open your command line, navigate to your project's folder, and write the following command `pandoc --toc -s --css reset.css --css index.css -i yoursourcefile.md -o output.html --template=template.html`
	* You'll need to replace the file names with your own.
	* You can and should automate this process with a batch script.
7. Congratulations! Open `output.html` to see your built website!
8. There is also a video guide here: XXX todo XXX

## License

[MIT](LICENSE.md)
