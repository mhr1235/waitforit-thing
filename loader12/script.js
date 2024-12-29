
let checkbox1 = document.getElementById("order1");
let checkbox2 = document.getElementById("order2");
let checkbox3 = document.getElementById("order3");

let menu = document.getElementById("top-nav-toggle");
let bell = document.getElementById("bell");
let bell2 = document.getElementById("bell2");




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

menu.addEventListener("click", () => {
  

  loadNew();
})

 bell.addEventListener("click", () => {
  

  loadNew();
})

 bell2.addEventListener("click", () => {
  

  loadNew();
})

let box1;
//let line= document.getElementsByClassName("order-track-status");


//checkbox1.classList.add("filled");

fillBox1();
//setInterval(fillBox1,6000);

/*setTimeout(fillBox2,1500);
setTimeout(emptyBox2,10500);
setInterval(fillBox2,14000);
setInterval(emptyBox2,22000);*/


setInterval(emptyBox1,12000);
setInterval(fillBox1,12200);



function emptyBox1(){

  checkbox1.classList.remove("filled");
  

}

function emptyBox2(){

  checkbox2.classList.remove("filled");


}

function emptyBox3(){

  checkbox3.classList.remove("filled");


}

function fillBox1(){
   checkbox1.classList.add("filled");
   setTimeout(fillBox2,1500);
   setTimeout(emptyBox2,10500);
   setTimeout(fillBox3,3500);
   setTimeout(emptyBox3,8500);

}

function fillBox2(){
   checkbox2.classList.add("filled");
   //setTimeout(emptyBox1,6000);

}

function fillBox3(){
   checkbox3.classList.add("filled");
   //setTimeout(emptyBox1,6000);

}

if(box1 == 1){

   fillBox2();
}

if(box1 == 0){

emptyBox2();

}


//function heightCheck(){

/*let text = "Height including padding and border: " + line[1].offsetHeight + "px<br>";
console.log(text);*/
//}

/*function emptyBox2(){

  checkbox2.classList.remove("filled");

}

function fillBox2(){
  setTimeout(emptyBox2,2000);
   checkbox2.classList.add("filled");
   setTimeout(emptyBox2,7000);

}



*/



/*(function() {
  if (document.querySelector("#top-nav-toggle")) {
    var navToggle = document.querySelector("#top-nav-toggle");

    function watchNavClose(e) {
      var topNav = document.querySelector(".top-bar");
      if (!e.path.includes(topNav)) {
        openCloseNav();
        document.documentElement.removeEventListener("click", watchNavClose);
      }
    }

    function openCloseNav() {
      var navToggle = document.querySelector("#top-nav-toggle");

      if (!navToggle.classList.contains("closed")) {
        navToggle.classList.add("closed");
        document.querySelector("#top-bar__nav").classList.remove("collapsed");
        document.querySelector("html").addEventListener("click", watchNavClose);
      } else {
        navToggle.classList.remove("closed");
        document.querySelector("#top-bar__nav").classList.add("collapsed");
        document.documentElement.removeEventListener("click", watchNavClose);
      }
    }

    navToggle.addEventListener("click", openCloseNav);
  }
})();*/