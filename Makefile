VERSION=$(shell jq -r .version package.json)
DATE=$(shell date +%F)
SRCDIR ?= demo

all: index.html

clean:
	rm -f index.html

index.html: $(SRCDIR)/index.md $(SRCDIR)/template.html Makefile
	pandoc --toc -s --css src/reset.css --css src/index.css -Vversion=v$(VERSION) -Vdate=$(DATE) -i $< -o $@ --template=$(SRCDIR)/template.html

.PHONY: all clean
