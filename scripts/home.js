/*
************ RESPONSIVE CARDS TOGGLE ***************
*/

let newsCard = document.getElementById("news");
let userInfoCard = document.getElementById("user-info");
let newsBtn = document.getElementById("news-btn");
let userInfoBtn = document.getElementById("user-info-btn");

function showNews(){
  if(newsCard.classList.contains("d-none") && !userInfoCard.classList.contains("d-none")){
    newsCard.classList.toggle("d-none");
    userInfoCard.classList.toggle("d-none");
    newsBtn.classList.toggle("btn-active");
    userInfoBtn.classList.toggle("btn-active");
  }
}

function showUserInfo(){
  if(!newsCard.classList.contains("d-none") && userInfoCard.classList.contains("d-none")){
    newsCard.classList.toggle("d-none");
    userInfoCard.classList.toggle("d-none");
    newsBtn.classList.toggle("btn-active");
    userInfoBtn.classList.toggle("btn-active");
  }
}

//DISCLAMER: EVENT LISTNERS FOR USERINFO/NEWS ARE IN main.js

/*
************ NEWS ***************
*/
let newsCOntainer = document.getElementById("news-content");

const news = [
  {
    title: "Giveaway",
    conent: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, aut, 
      harum delectus nemo illo quisquam at ea cumque corporis consequuntur repellendus, 
      mollitia enim nisi temporibus iusto in! Deleniti, dolorum quisquam.`
  },
  {
    title: "Competition",
    conent: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, aut, 
      harum delectus nemo illo quisquam at ea cumque corporis consequuntur repellendus, 
      mollitia enim nisi temporibus iusto in! Deleniti, dolorum quisquam.`
  },
  {
    title: "New sponsor",
    conent: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, aut, 
      harum delectus nemo illo quisquam at ea cumque corporis consequuntur repellendus, 
      mollitia enim nisi temporibus iusto in! Deleniti, dolorum quisquam.`
  },
  {
    title: "Event",
    conent: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, aut, 
      harum delectus nemo illo quisquam at ea cumque corporis consequuntur repellendus, 
      mollitia enim nisi temporibus iusto in! Deleniti, dolorum quisquam.`
  },
  {
    title: "Giveaway",
    conent: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, aut, 
      harum delectus nemo illo quisquam at ea cumque corporis consequuntur repellendus, 
      mollitia enim nisi temporibus iusto in! Deleniti, dolorum quisquam.`
  }
]

function createNewsItem(item) {
  //container
  let newsItemContainer = document.createElement("div");
  newsItemContainer.classList = `w-100 d-flex flex-column card my-2 p-3`;
  //title
  let newsItemTitle = document.createElement("div");
  newsItemTitle.classList = `title`;
  newsItemTitle.innerHTML = item.title;
  newsItemContainer.appendChild(newsItemTitle);
  //content
  let newsItemContent = document.createElement("div");
  newsItemContent.innerHTML = item.conent;
  newsItemContainer.appendChild(newsItemContent);
  
  return newsItemContainer;
}

news.forEach(item=>newsCOntainer.appendChild(createNewsItem(item)));