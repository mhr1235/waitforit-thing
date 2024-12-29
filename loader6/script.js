
let btn_toggle= document.querySelector(".btn-toggle");
let icon= document.querySelector(".cover");
let cyber = document.querySelector('#cyber');
let follow = document.querySelector('#follow');
let btn= document.querySelector("#btn");
const links = [];
links[0]= "../loader2/index.html";
links[1]= "../loader3/index.html";
links[2]= "../loader4/index.html";
links[3]= "../loader5/index.html";
links[4]= "../loader1/index.html";
links[5]= "../loader7/index.html";
links[6]= "../loader8/index.html";
links[7]= "../loader9/index.html";
links[8]= "../loader10/index.html";
links[9]= "../loader11/index.html";
links[10]= "../loader12/index.html";
links[11]= "../loader13/index.html";
links[12]= "../loader14/index.html";
links[13]= "../loader15/index.html";
links[14]= "../loader16/index.html";
links[15]= "../loader17/index.html";
links[16]= "../loader18/index.html";
links[17]= "../loader19/index.html";
links[18]= "../loader20/index.html";



function loadNew() {

let random_url = Math.floor(Math.random() * 19); 

 //console.log(random_url);
  location.href = links[random_url];
}

 setTimeout(function(){
     loadNew();
 }, 15000);

setTimeout(function(){
    //console.log("Hello World");
  icon.style.zIndex = 0;
}, 4000);
 

/*btn_toggle.addEventListener("click", function(){
  if(btn_toggle.textContent==="+") {
    this.textContent= "-";
  } else {
    this.textContent= "+";
  }
},false);*/


btn.addEventListener('click', ()=>{
  loadNew();
})

/*cyber.addEventListener('click', ()=>{
  window.location.href = 'https://mhr1235.github.io/where_is_the_cyberpunk_we_were_promised/loader2/index.html';
})

follow.addEventListener('click', ()=>{
  window.location.href = 'https://mhr1235.github.io/where_is_the_cyberpunk_we_were_promised/loader1/index.html';
})*/