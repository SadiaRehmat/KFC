console.log("Hello World!!");
let images=document.querySelectorAll('.slider img');
let current=0;
let interval=setInterval(nextInterval,3000);

function nextInterval(){
    images[current].classList.remove('active');
    current=(current + 1) % images.length;
    images[current].classList.add('active');
}
