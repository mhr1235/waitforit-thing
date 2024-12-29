/*JS isn't my expertise 😉*/
$(document).ready(function() {
    $("#menuButton").on("click", function(){
        loadNew();
        $(".side-a").toggleClass("is-open");
        $("html").toggleClass("is-nav-open");
        //loadNew();
    });
      $("#darkMode").on("click", function(){
        loadNew();
        $("html").toggleClass("is-dark");
    });

      $(".see-more").on("click", function(){
        loadNew();
    });

  

     

      const links = [];
links[0]= "../loader1/index.html";
links[1]= "../loader2/index.html";
links[2]= "../loader3/index.html";
links[3]= "../loader4/index.html";
links[4]= "../loader6/index.html";
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


});



