//detecting button press

var drumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // console.log(this.innerHTML);

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
  });
}

//detecting keyboard press

document.addEventListener("keydown", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "a":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "s":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "d":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "f":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "g":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "h":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "j":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  activeButton.style.backgroundColor = "black";

  setTimeout(function () {
    activeButton.classList.remove("pressed");
    activeButton.style.backgroundColor = "#444444";
  }, 120);
}
