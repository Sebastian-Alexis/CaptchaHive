let confidenceScore = 10;

function returnBrowserCheck() {
  const isHeadless =
    /HeadlessChrome/.test(window.navigator.userAgent) ||
    (typeof navigator.webdriver !== "undefined" && navigator.webdriver);

  const hasBrowserFeatures =
    typeof window.chrome !== "undefined" &&
    window.chrome.webstore &&
    typeof window.callPhantom === "undefined" &&
    typeof window._phantom === "undefined";

  const hasLanguagesAndPlugins =
    navigator.languages.length > 0 &&
    navigator.plugins.length > 0 &&
    navigator.plugins.namedItem("Chrome PDF Viewer");

  const isRealBrowser = hasBrowserFeatures && hasLanguagesAndPlugins;
  const isBot = !isRealBrowser || isHeadless;

  if (isBot) {
    confidenceScore -= 1;
  }
}

export default returnBrowserCheck;
