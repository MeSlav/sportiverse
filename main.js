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

function reAttachEventListners(pathname){
  if(pathname == '/home' || pathname == '/logo'){
    //home
    newsCard = document.getElementById("news");
    userInfoCard = document.getElementById("user-info");
    newsBtn = document.getElementById("news-btn");
    userInfoBtn = document.getElementById("user-info-btn");
    newsBtn.addEventListener("click", ()=>showNews());
    userInfoBtn.addEventListener('click', ()=>showUserInfo());
  }else if(pathname == '/contact'){
    //about us
    user1Card = document.getElementById("user1");
    user2Card = document.getElementById("user2");
    user1Btn = document.getElementById("user1-btn");
    user2Btn = document.getElementById("user2-btn");
    user1Btn.addEventListener("click", ()=>showCard1());
    user2Btn.addEventListener('click', ()=>showCard2());
  }
  
}

const onNavigate = (pathname) => {
  routes[activeRoute].classList.add("d-none");
  routes[pathname].classList.remove("d-none");
  rootDiv.innerHTML = routes[pathname].outerHTML;
  activeRoute = pathname;
  
  reAttachEventListners(pathname);
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
