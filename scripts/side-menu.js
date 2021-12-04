
/*
*****************************************************
MENU TOGGLE LOGIC
*****************************************************
*/

let menu = document.getElementById("navigation");
let menuBackdrop = document.getElementById("nav-menu-backdrop");
let width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const onToggleMenu = () => {
  if (width <= 1200) {
    menu.classList.toggle("d-none");
    menu.classList.toggle("position-absolute");
    menuBackdrop.classList.toggle("d-none");
  }
};

menuBackdrop.addEventListener("click", () => {
  onToggleMenu();
});

const configureNavMenuBasedOnWidth = () => {
  if (width >= 1200) {
    if (menu.classList.contains("position-absolute")) {
      menu.classList.toggle("position-absolute");
      menu.classList.toggle("d-none");
    }
    if (menu.classList.contains("col-6")) {
      menu.classList.toggle("col-6");
    }
    if (!menuBackdrop.classList.contains("d-none"))
      menuBackdrop.classList.add("d-none");
  } else {
    if (!menu.classList.contains("col-6")) {
      menu.classList.toggle("col-6");
    }
  }
};

function onWIndowResize() {
  width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  configureNavMenuBasedOnWidth();
}

configureNavMenuBasedOnWidth();
window.onresize = onWIndowResize;
