(function(global) {
  'use strict';

  global.document.addEventListener("mousemove", (e) => {
    const imageLogoElement = global.document.querySelector("#site-logo");
    let imageOrigin = getElementOrigin(imageLogoElement);
    let mousePositionDelta = {x: e.clientX-imageOrigin.x, y: e.clientY-imageOrigin.y};

    mousePositionDelta.x = (mousePositionDelta.x * -1)/50;
    mousePositionDelta.y = (mousePositionDelta.y * -1)/50;
    let blur = Math.round(10 + Math.abs(mousePositionDelta.x));
    imageLogoElement.style.filter = `drop-shadow(${mousePositionDelta.x}px ${mousePositionDelta.y}px ${blur}px var(--primary-orange))`;
  });

  function getElementOrigin(element) {
    let offset = {x: Math.round(element.width/2), y: Math.round(element.height/2)};

    const rect = element.getBoundingClientRect();

    const x = rect.left + offset.x;
    const y = rect.top + offset.y;

    return {x, y}
  }

  const surpriseMessage = global.document.querySelector("#surprise");
  surpriseMessage.addEventListener("click", (evt) => {

    if (surpriseMessage.getAttribute("href")?.startsWith("mailto:")) return;

    evt.preventDefault();
    const match = /(www\.)?(rafsasinski.com)/.exec(global.location.hostname)
    const message = 'contact' + decodeURIComponent("%40") + match?.[2];
    surpriseMessage.setAttribute("href", "mailto:" + message);
    surpriseMessage.innerHTML = "<p>"+message+"</p>";
  });

}(window));
