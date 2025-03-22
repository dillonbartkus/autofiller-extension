chrome.runtime.onInstalled.addListener(async () => {
  chrome.action.setBadgeText({
    text: "OFF",
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // if (!changeInfo?.url.includes("extensions")) {
  //   chrome.scripting
  //     .executeScript({
  //       target: { tabId },
  //       files: ["scripts/autofill.js"],
  //     })
  //     .then(() => {
  //       console.log("Script executed successfully");
  //     })
  //     .catch((err) => {
  //       console.error("Script execution failed:", err);
  //     });
  // }
});
