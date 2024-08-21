
all: index.html

clean:
	rm -f index.html

index.html: index.md template.html Makefile
	pandoc -s --css reset.css --css index.css -i $< -o $@ --template=template.html

.PHONY: all clean
