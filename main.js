'use strict';

window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    if (
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
    ){
        document.querySelector('.container').style.backgroundColor = 'white';
        document.getElementById("myBtn").style.display = "block";
    }
    else {
        document.querySelector('.container').style.backgroundColor = 'transparent';
        document.getElementById("myBtn").style.display = "none";
    }
};

// mobile menu button event listener
const menubutton = document.querySelector('.icon');
menubutton.addEventListener('click', () => {
  const nav = document.querySelector("nav");
  const h1 = document.querySelector(".h1");
  if (nav.className === "topnav" && h1.className === "h1") {
    nav.className += " responsive",
    h1.className += " responsive";
  }
  else {
    nav.className = "topnav",
    h1.className = "h1";
  }
});

// When the user clicks on the button, scroll to the top of the document
const button = document.querySelector('#myBtn');
button.addEventListener('click', () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

const logo = document.querySelector('#logo');
logo.addEventListener('click', () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});