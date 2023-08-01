let lBtn = document.getElementById('left');
let rBtn = document.getElementById('right');
let pic = document.getElementById('one');
let container = document.querySelector('.container');
let img = document.querySelectorAll('.img');
let wrapper = document.querySelector('.wrapper');

rBtn.addEventListener('click' , moveRight);
lBtn.addEventListener('click' , moveLeft);



function moveRight(){
   wrapper.scrollLeft += container.clientWidth;
      lBtn.style.display = 'block';
      rBtn.style.display = 'none';
}
function moveLeft(){
   wrapper.scrollLeft -= container.clientWidth;
      lBtn.style.display = 'none';
      rBtn.style.display = 'block';


}












