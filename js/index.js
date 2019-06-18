// Your code goes here
const busImg  = document.querySelector('.home .intro img');
const navBar = document.querySelector('.main-navigation');

busImg.addEventListener('mouseover', function (event) {
    busImg.style.filter = "grayscale(90%)";
    busImg.style.zIndex = "0";
    navBar.style.zIndex = "1";
  });

 busImg.addEventListener('mouseout', function (event) {
    busImg.style.filter = "grayscale(0%)";
 });

 window.addEventListener('scroll', function(event) {
     navBar.style.opacity = "0.8";
     navBar.style.backgroundColor = "#fff3a8";
 }); 



const headh2 = document.querySelector('.home .intro h2');  

headh2.addEventListener('mousewheel', function (event) {
    headh2.style.fontWeight = "bold";
});

const mapImg = document.querySelector('.content-section img');

mapImg.addEventListener('mousedown', function(event) {
    mapImg.style.filter = "blur(3px)";
});

mapImg.addEventListener('mouseup', function(event) {
    mapImg.style.filter = "blur(0px)";
});


const canalImg = document.querySelector('.inverse-content img');

canalImg.addEventListener('mousedown', function(event) {
    canalImg.style.filter = "sepia(100%)";
});

canalImg.addEventListener('mouseup', function(event) {
    canalImg.style.filter = "sepia(0%)";
});

const type = document.querySelector('.typewriter');
const beforeType = document.querySelector('.beforetype');

window.addEventListener('keydown', function(event) {
    beforeType.style.display = "none";
    type.style.display = "block";
    type.style.marginTop = "20px";
});

const btn = document.querySelectorAll('.btn');
console.log(btn);
for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function() {
        alert('YOU PRESSED THE BUTTON');
    });
}

//prevent links from reload
const navLinks = document.querySelectorAll('.nav-link');
for(let i = 0; i < navLinks.length; i++){
navLinks[i].addEventListener('click', function (event){
    event.preventDefault();
});
};
