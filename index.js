
// Detecting Button pressed .

var NoOfDrums = document.querySelectorAll(".drum").length;

for(var i = 0; i<NoOfDrums; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){

  var buttonInnerHTML = this.innerHTML;
  console.log(buttonInnerHTML)
  PlaySound(buttonInnerHTML);
  ButtonAnimation(buttonInnerHTML);

  });
}

// Detecting Keyboard pressed button

document.addEventListener("keydown",function(event)
{
  PlaySound(event.key);
  ButtonAnimation(event.key);
});

// Function to play sound

function PlaySound(key)
{
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick_bass = new Audio("sounds/kick-bass.mp3");
      kick_bass.play();
      break;

    default: console.log(buttonInnerHTML);

  }
}

// Adding animation to the button, so that user know, which button is pressed

function ButtonAnimation(button){
  // selecting the class according to the button pressed
  var activeButton = document.querySelector("."+button);

  // adding pressed class to pressed button class
  activeButton.classList.add("pressed");

  // setting timeout so that the highlighted button gets back to normal
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
