let shima = "shima";
let guess = prompt('Type the password to enter this site!')

while(shima != guess){
   if (guess != shima){
       alert('Sorry. You type the wrong password.');
   }
   guess = prompt('Type the password to enter this site!')
} 
function myFunction(){
    var x = document.getElementsByClassName("pvDiv");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }