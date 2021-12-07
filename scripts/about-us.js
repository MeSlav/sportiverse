/*
************ RESPONSIVE CARDS TOGGLE ***************
*/

let user1Card = document.getElementById("user1");
let user2Card = document.getElementById("user2");
let user1Btn = document.getElementById("user1-btn");
let user2Btn = document.getElementById("user2-btn");

function showCard1(){
  if(user1Card.classList.contains("d-none") && !user2Card.classList.contains("d-none")){
    user1Card.classList.toggle("d-none");
    user2Card.classList.toggle("d-none");
    user1Btn.classList.toggle("btn-active");
    user2Btn.classList.toggle("btn-active");
  }
}

function showCard2(){
  if(!user1Card.classList.contains("d-none") && user2Card.classList.contains("d-none")){
    user1Card.classList.toggle("d-none");
    user2Card.classList.toggle("d-none");
    user1Btn.classList.toggle("btn-active");
    user2Btn.classList.toggle("btn-active");
  }
}