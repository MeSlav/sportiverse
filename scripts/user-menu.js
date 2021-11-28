
/********User menu toggle ************/

//variable declarations
const menuClick = document.querySelector(".profile-pic");
const userMenu = document.querySelector(".userMenu");
const userMenuBackdrop = document.querySelector("#user-menu-backdrop");

// event listners
menuClick.addEventListener("click", function (e) {
  e.preventDefault();
  userMenu.classList.toggle("d-none");
  userMenu.classList.toggle("d-flex");
  userMenuBackdrop.classList.toggle('d-flex');
});

userMenuBackdrop.addEventListener('click', function(e){
  userMenuBackdrop.classList.toggle('d-flex');
  userMenu.classList.toggle("d-none");
  userMenu.classList.toggle("d-flex");
})

document.getElementById("logout").addEventListener("click", ()=>{
    logout();
});