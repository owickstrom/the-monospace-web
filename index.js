function firstEvent(element, name) {
  return new Promise(resolve => {
    element.addEventListener(name, resolve);
  });
}

const defaultRatio = 16/9;

// Set the ratio variable on each media.
function setRatios() {
  const medias = document.querySelectorAll("img, video");
  for (media of medias) {
    function onLoaded() {
      var ratio = defaultRatio;
      switch (media.tagName) {
        case "IMG":
          ratio = media.naturalWidth / media.naturalHeight;
          break;
        case "VIDEO":
          if (media.videoWidth != 0 && media.videoHeight != 0) {
            ratio = media.videoWidth / media.videoHeight;
          }
          break;
      }
      console.log("Setting ratio", ratio, "for element", media);
      media.style.setProperty("--ratio", ratio);
    }
      switch (media.tagName) {
        case "IMG":
          if (!media.loaded) {
            media.style.setProperty("--ratio", defaultRatio); // default while loading
            firstEvent(media, "load").then(onLoaded);
            console.log("Image loaded", media);
          }
          break;
        case "VIDEO":
          if (media.readyState != 4) {
            media.style.setProperty("--ratio", defaultRatio); // default while loading
            firstEvent(media, "loadeddata").then(onLoaded);
            console.log("Video ready", media);
          }
          break;
      }
      onLoaded();
  }
}

setRatios();

function checkOffsets() {
  const targetNode = document.body;
  const config = { childList: true, subtree: true };

  const callback = () => {
    const elements = document.querySelectorAll("body :not(.debug-grid)");
    for (const element of elements) {
      const offset = element.offsetTop % 10;
      if(element.offsetParent == document.body && offset > 0) {
        element.classList.add("off-grid");
        console.error("Incorrect vertical offset:", element, element.offsetTop % 20);
      } else {
        element.classList.remove("off-grid");
      }
    }
  };

  callback();

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}

window.addEventListener("load", checkOffsets);

const debugButton = document.querySelector(".debug-toggle");
debugButton.addEventListener("click", () => {
  document.body.classList.toggle("debug");
});
