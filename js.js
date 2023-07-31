let lBtn = document.getElementById('left');
let rBtn = document.getElementById('right')
let pic = document.getElementById('one');
let container = document.querySelector('.container')
let img = document.querySelectorAll('.img')

rBtn.addEventListener('click' , moveRight);
lBtn.addEventListener('click' , moveLeft);

let i =0;

// if (i<3 || i>-1){
   function moveRight(){
      container.style.transform += 'translateX(-310px)';
      i ++;
   }
   function moveLeft(){
      container.style.transform += 'translateX(310px)';
      i --;
   }
// }











