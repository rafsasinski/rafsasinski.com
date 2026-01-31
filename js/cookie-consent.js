(function (global) {

  const cookieConsentWrapper = global.document.querySelector(".analytics-consent");

  const surpriseMessage = global.document.querySelector("#surprise");
  surpriseMessage.addEventListener("click", (evt) => {

    if (surpriseMessage.getAttribute("href")?.startsWith("mailto:")) return;

    evt.preventDefault();
    const match = /(www\.)?(rafsasinski.com)/.exec(global.location.hostname)
    const message = 'contact' + decodeURIComponent("%40") + match?.[2];
    surpriseMessage.setAttribute("href", "mailto:" + message);
    surpriseMessage.innerHTML = "<p>" + message + "</p>";
  });

  const dismissButton = global.document.querySelector("#dismiss-button");
  dismissButton.addEventListener("click", (evt) => {
    const analyticsBox = global.document.querySelector(".analytics-consent");
    console.log("Reject Analytics");
    dismissCookies();
    // analyticsBox.style.display = "none";
  });

  const allowButton = global.document.querySelector("#accept-button");
  allowButton.addEventListener("click", (evt) => {
    console.log("Accept Analytics");
  });

  function acceptCokkies() {

  }

  function dismissCookies() {
    removeCookieConsentBanner();
  }

  function removeCookieConsentBanner() {
    cookieConsentWrapper.style.display = "none";
  }
}(window));
