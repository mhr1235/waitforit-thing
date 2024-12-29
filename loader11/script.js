const searchButtonMobile = document.getElementById("search-button-mobile");
const searchBar = document.getElementById("search-bar");
const menuButton = document.getElementById("menu-button");
const navLinksContainer = document.getElementById("nav-links");
const navLinks = document.getElementsByClassName("nav-link");

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

//show/hide search bar
searchButtonMobile.addEventListener("click", (event) => {
  /*event.stopPropagation();
  if (searchBar.style.display === 'none') {
    searchBar.style.display = 'flex';
    searchButtonMobile.style.display = "none";
  } else {
    searchBar.style.display = 'none';
    searchButtonMobile.style.display = "block";
  }*/
})

//show/hide menu
menuButton.addEventListener("click", (event) => {
  event.stopPropagation();

  loadNew();

  /*if(navLinksContainer.style.display === "block") {
    navLinksContainer.style.display = "none";
  } else {
    navLinksContainer.style.display = "block";
  }*/
})

navLinks[0].addEventListener("click", () => {
  

  loadNew();

  /*if(navLinksContainer.style.display === "block") {
    navLinksContainer.style.display = "none";
  } else {
    navLinksContainer.style.display = "block";
  }*/
})

navLinks[1].addEventListener("click", () => {
  
  loadNew();

})

navLinks[2].addEventListener("click", () => {
  
  loadNew();

})

navLinks[3].addEventListener("click", () => {
  
  loadNew();

})
navLinks[4].addEventListener("click", () => {
  
  loadNew();

})
navLinks[5].addEventListener("click", () => {
  
  loadNew();

})
navLinks[6].addEventListener("click", () => {
  
  loadNew();

})

 setTimeout(function(){
     loadNew();
 }, 15000);

//hide menu and searchbar if click anywhere on screen
document.addEventListener("click", (event) => {
  // if(event.target !== searchBar && !searchBar.contains(event.target) && window.innerWidth < 799) {
  //   searchBar.style.display = "none";
  //   searchButtonMobile.style.display = "block";
  // }
  // if(event.target !== navLinksContainer && !navLinksContainer.contains(event.target) && window.innerWidth < 799) {
  //   navLinksContainer.style.display = "none"; 
  // }
})


window.addEventListener("resize", ()=> {
  searchBar.removeAttribute("style");
  navLinksContainer.removeAttribute("style");
})

//add active class to clicked link
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    // Remove "active" class from all links
    for (let j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove("active");
    }
    // Add "active" class to the clicked link
    this.classList.add("active");
  });
}