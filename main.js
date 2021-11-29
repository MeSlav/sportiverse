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
