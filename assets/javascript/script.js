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

  if (!screen.matches) { // If media query matches
    link.style.cssText = `display: none; overflow: hidden; visibility: hidden;`;
    icon.style.cssText = `display: none; overflow: hidden; visibility: hidden;`;
    logo.style.cssText = `display: none; overflow: hidden; visibility: hidden;`;
  } else {
    logo.style.cssText = `display: none; overflow: hidden; visibility: hidden;`;
  }
}

var screen = window.matchMedia("(max-width: 768px)")

showHamburguer(screen);

screen.addEventListener("change", function() {
  showHamburguer(x);
}); 
