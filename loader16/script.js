  const links = [];
links[0]= "../loader2/index.html";
links[1]= "../loader3/index.html";
links[2]= "../loader4/index.html";
links[3]= "../loader5/index.html";
links[4]= "../loader1/index.html";
links[5]= "../loader6/index.html";
links[6]= "../loader7/index.html";
links[7]= "../loader8/index.html";
links[8]= "../loader9/index.html";
links[9]= "../loader10/index.html";
links[10]= "../loader11/index.html";
links[11]= "../loader12/index.html";
links[12]= "../loader13/index.html";
links[13]= "../loader14/index.html";
links[14]= "../loader15/index.html";
links[15]= "../loader17/index.html";
links[16]= "../loader18/index.html";
links[17]= "../loader19/index.html";
links[18]= "../loader20/index.html";



let menu = document.querySelector('.custom-test');
let menu2 = document.querySelector('.nav-options');
let menu3 = document.querySelector('.box-size-nav-uon');
let menu4 = document.getElementById('list');
let menu5 = document.getElementById('loading');



function loadNew() {

let random_url = Math.floor(Math.random() * 19); 

 //console.log(random_url);
  location.href = links[random_url];
}

 setTimeout(function(){
     loadNew();
 }, 15000);

menu.addEventListener("click", () => {
  
loadNew();
  
})



menu2.addEventListener("click", () => {
  
loadNew();
  
})


menu3.addEventListener("click", () => {
  
loadNew();
  
})

menu4.addEventListener("click", () => {
  
loadNew();
  
})

menu5.addEventListener("click", () => {
  
loadNew();
  
})
const formSignIn = document.querySelector('.form-signin');

// <----------------------------------------------->
/* <!-----~----SIGN IN POP UP!-----~~~~~------------>
<!-----------------------------------------------> */
const signinBtn = document.querySelector('.clickable-btn-sign-in').addEventListener('click', function(e){
  // let displayShow = document.querySelector('.displayShow');
  // let signinWrapper = document.querySelector('.sign-wrapper');
  // let signinDiv = document.querySelector('.sign-in-div');
  
  // // console.log('clicked');
  // signinDiv.classList.remove("sign-wrapper");
  // signinDiv.classList.add("displayShow");

  // e.preventDefault();
  loadNew();


});



// ------remove--------

window.addEventListener('click', function(event){
  let displayShow = document.querySelector('.displayShow');
  let signinWrapper = document.querySelector('.sign-wrapper');
  let signinDiv = document.querySelector('.sign-in-div');

  if(event.target === displayShow){
    signinDiv.classList.remove("displayShow");
    signinDiv.classList.add("sign-wrapper");
    
  }
});





// <!---------Submit Pop Up - Sign IN Information-------------> */
const form = document.querySelector('.form-signin').addEventListener('submit', submitClick);
const input = document.querySelector('.form-control');




function submitClick(e){
  console.log(input.value);
  document.getElementById('signin-btn').remove();
  let displayShow = document.querySelector('.displayShow');


  displayShow.removeAttribute("display")
  // displayShow.style.display='none';
  // signinWrapper.classList.remove("displayShow");
  // signinWrapper.classList.add("sign-wrapper");
  e.preventDefault();
};
















// Define UI
const listYourHomeBtn = document.querySelector('.list-yourhome');


/* <!---------LIST NEW HOMES POP UP!----------------->
<!-----------------------------------------> */

//runAllHomesEventListeners();

function runAllHomesEventListeners(){
  listYourHomeBtn.addEventListener('click', listYourHomeBtnClick);

};

function listYourHomeBtnClick() {
   
  let displayShowHome = document.querySelector('.displayShow-home');
  let addHomeDiv = document.querySelector('.add-newhome-div');
  let addHomeWrapper = document.querySelector('.home-wrapper');
  
  
  addHomeDiv.classList.remove("home-wrapper");
  addHomeDiv.classList.add("displayShow-home");

}



// ------Remove It--------

window.addEventListener('click', function(event){
  let displayShowHome = document.querySelector('.displayShow-home');
  let addHomeDiv = document.querySelector('.add-newhome-div');
  let addHomeWrapper = document.querySelector('.home-wrapper');

  if(event.target === displayShowHome){
    addHomeDiv.classList.remove("displayShow-home");
    addHomeDiv.classList.add("home-wrapper");
    
  }
});





// <!---------------------------------------------------------> */
// <!---------Houses User Input & Submit ---------------------> */
// <!---------------------------------------------------------> */

// Define UI [Price | Street | City | State]
const formPlatform = document.getElementById('form-platform-control');
const price = document.getElementById('price-input');
const street = document.getElementById('street-input');
const city = document.getElementById('city-input');
const state = document.getElementById('state-input');
const submitBtn = document.getElementById('submit-btn-homes');


//runAllEventListenersUsers();

function runAllEventListenersUsers(){
  formPlatform.addEventListener('submit', submitAction);
};

// Submit Btn Clicked Function
function submitAction(e) {
  console.log('Works');
  // if(price.value !== '' && street.value !== '' && city.value !== '' && state.value !== ''){
  //   console.log('Works');
  // }
  e.preventDefault();
}