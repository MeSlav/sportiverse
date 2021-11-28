const rootDiv = document.getElementById("in-app-router-outlet");
const menuItems = [
  ...document.getElementsByClassName("nav-item"),
  document.getElementById("logo"),
];
let activeRoute = "/home";

/*
****************************************************
ROUTING LOGIC
***************************************************
*/

const routes = {
  "/logo": document.getElementById("home-content"),
  "/home": document.getElementById("home-content"),
  "/training": document.getElementById("training-content"),
  "/nutrition": document.getElementById("nutrition-content"),
  "/contact": document.getElementById("contact-content"),
  "/help": document.getElementById("help-content"),
};

const onNavigate = (pathname) => {
  routes[activeRoute].classList.add("d-none");
  routes[pathname].classList.remove("d-none");
  rootDiv.innerHTML = routes[pathname].outerHTML;
  activeRoute = pathname;
};

onNavigate(activeRoute);

//listen for menu item clicks and dynamically insert html based on that
[...menuItems].forEach((item) => {
  item.addEventListener("click", function () {
    document
      .getElementsByClassName("nav-item-active")[0]
      .classList.remove("nav-item-active");
    item.classList.contains("logo")
      ? document.getElementById("home").classList.add("nav-item-active")
      : item.classList.add("nav-item-active");
    onNavigate(`/${item.id}`);
    onToggleMenu();
  });
});

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
  if (width <= 992) {
    menu.classList.toggle("d-none");
    menu.classList.toggle("position-absolute");
    menuBackdrop.classList.toggle("d-none");
  }
};

menuBackdrop.addEventListener("click", () => {
  onToggleMenu();
});

const configureNavMenuBasedOnWidth = () => {
  if (width >= 992) {
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

/********User menu toggle ************/
// Deklaracija varijabli
const menuClick = document.querySelector(".profile-pic");
const userMenu = document.querySelector(".userMenu");

// Funkcije
menuClick.addEventListener("click", function (e) {
  e.preventDefault();
  userMenu.classList.toggle("d-none");
  userMenu.classList.toggle("d-flex");
});


