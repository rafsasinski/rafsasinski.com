(function(global) {
  'use strict';

  global.document.addEventListener("mousemove", (e) => {
    const element = global.document.querySelector("#site-logo");
    let imagePos = calculateAxisFromElement(element);
    let mousePosition = {x: e.clientX-imagePos.x, y: e.clientY-imagePos.y};

    mousePosition.x = (mousePosition.x * -1)/50;
    mousePosition.y = (mousePosition.y * -1)/50;
    let blur = Math.round(10 + Math.abs(mousePosition.x));
    element.style.filter = `drop-shadow(${mousePosition.x}px ${mousePosition.y}px ${blur}px var(--primary-orange))`;
  });

  function calculateAxisFromElement(element) {
    let offset = {x: Math.round(element.width/2), y: Math.round(element.height/2)};

    const rect = element.getBoundingClientRect();

    const x = rect.left + offset.x;
    const y = rect.top + offset.y;

    return {x, y}
  }
}(window))
