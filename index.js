
var NoOfDrums = document.querySelectorAll(".drum").length;

for(var i = 0; i<NoOfDrums; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
  alert("Button clicked");
});
}
