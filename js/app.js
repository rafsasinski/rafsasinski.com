const _sph = (function (global) {
  'use strict';

  global.document.addEventListener("mousemove", (e) => {
    const imageLogoElement = global.document.querySelector("#site-logo");
    let imageOrigin = getElementOrigin(imageLogoElement);
    let mousePositionDelta = {x: e.clientX - imageOrigin.x, y: e.clientY - imageOrigin.y};

    mousePositionDelta.x = (mousePositionDelta.x * -1) / 50;
    mousePositionDelta.y = (mousePositionDelta.y * -1) / 50;
    let blur = Math.round(10 + Math.abs(mousePositionDelta.x));
    imageLogoElement.style.filter = `drop-shadow(${mousePositionDelta.x}px ${mousePositionDelta.y}px ${blur}px var(--primary-orange))`;
  });

  function getElementOrigin(element) {
    let offset = {x: Math.round(element.width / 2), y: Math.round(element.height / 2)};

    const rect = element.getBoundingClientRect();

    const x = rect.left + offset.x;
    const y = rect.top + offset.y;

    return {x, y}
  }

  const emailSecret = global.document.querySelectorAll(".email-secret");
  for (let email of emailSecret) {
    decorateWithEvent(email);
  }

  function decorateWithEvent(element) {
    element.addEventListener("click", (evt) => {

      if (element.getAttribute("href")?.startsWith("mailto:")) return;

      evt.preventDefault();
      const match = /(www\.)?(rafsasinski.com)/.exec(global.location.hostname)
      const message = 'hello' + decodeURIComponent("%40") + match?.[2];
      element.setAttribute("href", "mailto:" + message);
      element.innerText = message;
    });
  }

  function toggleMenu() {
    const nav = document.getElementById("menu-navigation");
    const navClassList = Array.from(nav.classList);

    if (navClassList.includes('site-nav__open')) {
      nav.classList.remove('site-nav__open');
    } else {
      nav.classList.add('site-nav__open');
    }
  }

  return {
    toggleMenu
  };

}(window));
