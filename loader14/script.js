/*(function ($) {
  $(function () {

    

  });
})(jQuery);*/

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
links[13]= "../loader15/index.html";
links[14]= "../loader16/index.html";
links[15]= "../loader17/index.html";
links[16]= "../loader18/index.html";
links[17]= "../loader19/index.html";
links[18]= "../loader20/index.html";

let menu = document.querySelector('.ag-format-container');
let menu2 = document.querySelector('.ag-bubbles-block');

function loadNew() {

let random_url = Math.floor(Math.random() * 19); 

 //console.log(random_url);
  location.href = links[random_url];
}

 setTimeout(function(){
     loadNew();
 }, 15000);

// menu.addEventListener("click", () => {
  

//   loadNew();
// })

menu2.addEventListener("click", () => {
  

  loadNew();
})

var x = window.matchMedia("(orientation:portrait)")

if (x.matches) { // If media query matches
      var myDiv = $("html, body");
var scrollto = myDiv.offset().top + (myDiv.height() / 8);
myDiv.animate({ scrollTop:  scrollto});
  } else {
     var myDiv = $("html, body");
var scrollto = myDiv.offset().top + (myDiv.height() / 4);
myDiv.animate({ scrollTop:  scrollto});
  }
 $(document).ready(function() {


            
                /*$("html, body").animate({
                    scrollTop: $(
                      'html, body').get(0).scrollHeight
                }, 2000);*/


            
        });
