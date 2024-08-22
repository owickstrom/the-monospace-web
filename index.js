// Set the ratio variable on each media.
document.querySelectorAll("img, video").forEach(media => {
  function onLoaded() {
    var ratio = 1;
    switch (media.tagName) {
      case "IMG":
        ratio = media.naturalWidth / media.naturalHeight;
        break;
      case "VIDEO":
        ratio = media.videoWidth / media.videoHeight;
        break;
    }
    media.style.setProperty("--ratio", ratio);
  }
    switch (media.tagName) {
      case "IMG":
        if (media.loaded) {
          onLoaded();
        } else {
          media.addEventListener("load", onLoaded);
        }
        break;
      case "VIDEO":
        if (media.readystate == 4) {
          onLoaded();
        } else {
          media.style.setProperty("--ratio", 16/9); // default while loading
          media.addEventListener("loadedmetadata", onLoaded);
        }
        break;
    }
});
