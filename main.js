"use strict";

/* Coloreado de secciones con uso de scroll */

window.onscroll = function () {
  navbarScroll();
};
function navbarScroll() {
  let y = window.scrollY;

  if (y >= 0 && y < 400) {
    colorLink("Sobre mí");
  } else if (y >= 400 && y < 1000) {
    colorLink("Skills");
  } else if (y >= 1000 && y < 1868) {
    colorLink("Proyectos");
  } else {
    colorLink("Contacto");
  }
}
function colorLink(link) {
  document.querySelectorAll(".nav-link").forEach((e) => {
    if ((e.textContent != link) & (e.textContent != "Contacto")) {
      e.style.color = "#034d6c";
      return;
    }
    if ((e.textContent == link) & (e.textContent != "Contacto")) {
      e.style.color = "#f84f07";
      return;
    }
  });
}

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
