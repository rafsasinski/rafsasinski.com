(function (global) {

  const cookieConsentWrapper = global.document.querySelector(".analytics-consent");

  const surpriseMessage = global.document.querySelector("#surprise");
  surpriseMessage.addEventListener("click", (evt) => {

    if (surpriseMessage.getAttribute("href")?.startsWith("mailto:")) return;

    evt.preventDefault();
    const match = /(www\.)?(rafsasinski.com)/.exec(global.location.hostname)
    const message = "contact" + decodeURIComponent("%40") + match?.[2];
    surpriseMessage.setAttribute("href", "mailto:" + message);
    surpriseMessage.innerHTML = "<p>" + message + "</p>";
  });

  const allowButton = global.document.querySelector("#accept-button");
  allowButton.addEventListener("click", (evt) => {
    const inputCookieConsnet = global.document.querySelector("#cookie-consent");
    console.log(`Cookies Settings: ${inputCookieConsnet.checked}`);

    if (inputCookieConsnet.checked === true) {
      writeConsentCookies('accepted');
    } else {
      writeConsentCookies('declined');
    }

  });

  function removeCookieConsentBanner() {
    // cookieConsentWrapper.style.display = "none";
    cookieConsentWrapper.classList.add("is-hiding");
    cookieConsentWrapper.addEventListener("transitionend", (evt) => {
      cookieConsentWrapper.style.display = "none";
    }, { once: true} );
  }

  function readConsentCookies() {

  }

  function writeConsentCookies(mode) {
    const expires = new Date(Date.now() + 30*24*60*60*1000).toUTCString();
    const path = "/";
    const ranalytics = {mode: mode, expires: expires};
    global.document.cookie = `ranalytics=${JSON.stringify(ranalytics)}; expires=${expires}; path=${path}`;
    removeCookieConsentBanner();
  }
}(window));
