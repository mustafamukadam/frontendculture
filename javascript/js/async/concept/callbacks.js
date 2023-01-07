function loadScript(src, callback) {
  console.log("inside loadScripts");
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
  (script) => {
    console.log(`Cool, the script ${script.src} is loaded`);
    console.log(_); // _ is a function declared in the loaded script
  }
);
