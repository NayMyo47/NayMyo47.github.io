let shima = "shima";
let guess = prompt('Type the password to enter this site!')

while(shima != guess){
   if (guess != shima){
       alert('Sorry. You type the wrong password.');
   }
   guess = prompt('Type the password to enter this site!')
} 

function mobileMenu(){
  let x = document.querySelector('.pvDiv');
  let y = document.querySelector('.menu');
  if (x.style.display === 'block'){
      x.style.display = 'none';
  }else {
      x.style.display = 'block';
  }
}