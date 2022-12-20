//Fresh Start
var btnlength = document.querySelectorAll(".drum").length;
var character;

//EventListener for Mouse clicks
for (var i = 0; i < btnlength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    character = this.textContent;
    checkplay(character);
  });
}
//EventListener for Keydown clicks
document.addEventListener("keydown", function (event) {
  character = event.key;
  checkplay(character);
});

//Function to play audio according to number
function checkplay(character) {
  switch (character) {
    case "1":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "2":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "3":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "4":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "5":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "6":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;
    case "7":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(character);
      break;
  }
}
/* 
//2nd Approach 
function AllEventListener(eventTypecalled,callback)
{

  function Eventhappened (eventType,key){
 this.eventType=eventType;
 this.key=key;
  }
  var q1=new Eventhappened("keydown",1);
  var q2=new Eventhappened("keydown",2);
  var q3=new Eventhappened("keydown",3);
  var q4=new Eventhappened("keydown",4);
  var q5=new Eventhappened("keydown",5);
  var q6=new Eventhappened("keydown",6);
  var q7=new Eventhappened("keydown",7);

  if(Eventhappened.eventType==eventTypecalled){
callback(Eventhappened);
  }

  AllEventListener("keydown",function() {
    console.log(Eventhappened)
  });
} */