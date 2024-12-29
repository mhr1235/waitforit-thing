let btn= document.querySelector(".bouncer");
let btn2= document.querySelector("div");

const links = [];
links[0]= "../loader2/index.html";
links[1]= "../loader3/index.html";
links[2]= "../loader4/index.html";
links[3]= "../loader5/index.html";
links[4]= "../loader1/index.html";
links[5]= "../loader6/index.html";
links[6]= "../loader7/index.html";
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

btn.addEventListener('click', ()=>{
  loadNew();
});

btn2.addEventListener('click', ()=>{
  loadNew();
});



let ImagesF = [
  './background_1.jpg',
  './background_2.jpg',
  './background_3.jpg'
]





function randomB(){

  let div = document.querySelector('div');
  let a = Math.floor(Math.random() * 3)
  div.style.backgroundImage = 'url("' + ImagesF[a] + '")';


}

setInterval(randomB,3500);


/*function autoImgB(arr, i) {
  if (i < arr.length) {
    div.style.backgroundImage = 'url("' + arr[i] + '")';
    setTimeout(autoImgB, 6000, arr, ++i);
    if(i == 2){

      i =0;

    }
  }
}

autoImgB(ImagesF, 0);*/