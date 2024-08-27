function firstEvent(element, name) {
  return new Promise(resolve => {
    element.addEventListener(name, resolve);
  });
}

function gridCellDimensions() {
  const element = document.createElement("div");
  element.style.position = "fixed";
  element.style.height = "var(--line-height)";
  element.style.width = "1ch";
  document.body.appendChild(element);
  const rect = element.getBoundingClientRect();
  document.body.removeChild(element);
  return { width: rect.width, height: rect.height };
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
          ratio = media.videoWidth / media.videoHeight;
          break;
      }
      if (ratio != NaN) {
        console.log("Setting ratio", ratio, "for element", media);
        media.style.setProperty("--ratio", ratio);
      }
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
  const ignoredTagNames = new Set([
    "THEAD",
    "TBODY",
    "TFOOT",
    "TR",
    "TD",
    "TH",
  ]);
  const cell = gridCellDimensions();
  const elements = document.querySelectorAll("body :not(.debug-grid, .debug-toggle)");
  for (const element of elements) {
    if (ignoredTagNames.has(element.tagName)) {
      continue;
    }
    const rect = element.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) {
      continue;
    }
    const top = rect.top + window.scrollY;
    const left = rect.left + window.scrollX;
    const offset = top % (cell.height / 2);
    if(offset > 0) {
      element.classList.add("off-grid");
      console.error("Incorrect vertical offset for", element, "with remainder", top % cell.height, "when expecting divisible by", cell.height / 2);
    } else {
      element.classList.remove("off-grid");
    }
  }
}

const debugToggle = document.querySelector(".debug-toggle");
function onDebugToggle() {
  document.body.classList.toggle("debug", debugToggle.checked);
}
debugToggle.addEventListener("change", onDebugToggle);
onDebugToggle();
