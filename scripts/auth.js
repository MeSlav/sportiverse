const loginScreen = document.getElementById("login");
const applicationScreen = document.getElementById("app");
const usernameInputField = document.getElementById("inputUsername");
const passwordInputField = document.getElementById("inputPassword");
let username = usernameInputField.value;
let password = passwordInputField.value;

usernameInputField.addEventListener("keyup", function(e){
  username = e.target.value;
});

passwordInputField.addEventListener("keyup", function(e){
  password = e.target.value;
});

function checkRole(isToasterEnabled = true){
  if(username === 'admin' && password === 'admin'){
    console.log("admin");
    localStorage.setItem("fitnessTrackerSession", {
      role: "owner"
    })
  }else if(username === 'trainer' && password === 'trainer'){
    localStorage.setItem("fitnessTrackerSession", {
      role: "trainer"
    })
  }else if(username === 'user' && password === 'user'){
    localStorage.setItem("fitnessTrackerSession", {
      role: "user"
    })
  }else{
    if(isToasterEnabled) showToaster();
  }
}

function showToaster(){
  const toaster = document.getElementById("toaster");
  let toasterBtn = document.getElementById("close-toaster");

  if(toaster.classList.contains("d-none")){
    toaster.classList.toggle("d-none");
    toaster.classList.toggle("d-flex");
    setTimeout(()=>hideToaster(), 3000);
    toasterBtn.addEventListener("click", ()=> hideToaster());
  }
}

function hideToaster(){
  const toaster = document.getElementById("toaster");

  if(!toaster.classList.contains("d-none")){
    toaster.classList.toggle("d-none");
    toaster.classList.toggle("d-flex");
  }
}

function logout(){
  localStorage.removeItem("fitnessTrackerSession");
  applicationScreen.classList.add('d-none');
  loginScreen.classList.remove("d-none");
}

function login(){
  if(localStorage.getItem("fitnessTrackerSession")){
    loginScreen.classList.add("d-none");
    applicationScreen.classList.remove('d-none');
  }
}

function onLogin(){
  checkRole();
  login();
}

function checkLoginStatusOnAppInit(){
  checkRole(false);

  if(localStorage.getItem("fitnessTrackerSession")){
    login();
  }
}

checkLoginStatusOnAppInit();