// Set the ratio variable on each image.
document.querySelectorAll("img").forEach(img => {
  function onLoaded() {
    const ratio = img.naturalWidth / img.naturalHeight;
    img.style.setProperty("--ratio", ratio);
  }
  if (img.loaded) {
    onLoaded();
  } else {
    img.addEventListener("load", onLoaded);
  }
});
