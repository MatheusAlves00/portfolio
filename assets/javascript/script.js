const slider = document.querySelectorAll('.item_list');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length - 1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length - 1
  } else {
    currentSlide--
  }
  showSlider()
}

function showMenu() {
  var myLink = document.getElementById("myLinks");
  var icon = document.getElementById("icon");

  if (myLink.style.display === "block") {
    myLink.style.display = "none";
    icon.style.backgroundColor = "transparent";
  } else {
    myLink.style.display = "block";
    icon.style.backgroundColor = "#292929";
  }
}

function showHamburguer(screen) {
  var link = document.getElementById("active");
  var icon = document.getElementById("icon");
  var logo = document.getElementById("logo");
  var buttonPrev = document.getElementById("prev-button");
  var buttonNext = document.getElementById("next-button");

  if (!screen.matches) { // If media query matches
    link.style.cssText = `display: none; overflow: hidden; visibility: hidden;`;
    icon.style.cssText = `display: none; overflow: hidden; visibility: hidden;`;
    logo.style.cssText = `display: none; overflow: hidden; visibility: hidden;`;
    buttonPrev.style.cssText = `display: none; overflow: hidden; visibility: hidden;`;
    buttonNext.style.cssText = `display: none; overflow: hidden; visibility: hidden;`;
  } else {
    logo.style.cssText = `display: none; overflow: hidden; visibility: hidden;`;
  }
}

var screen = window.matchMedia("(max-width: 768px)")

showHamburguer(screen);

screen.addEventListener("change", function() {
  showHamburguer(x);
}); 

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)
