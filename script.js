
let pixels = document.querySelectorAll('.pixel');
const container = document.querySelector('.container');

//Add square elements 
const squares = 50e3;
for(let i = 0; i < squares; i++){
    const square = document.createElement('div');
    square.classList.add('pixel');
    container.appendChild(square);
    square.addEventListener('mouseover', function(){
        const color =  randomColor();
        this.style.backgroundColor = color;
        this.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    });}

/*
pixels.forEach(function(pixel){
    pixel.addEventListener('mouseleave', function(){
        this.style.backgroundColor = '#1d1d1d';
        this.style.boxShadow = 'none';
    });
})
*/
// Random Color Function 
function randomColor(){
    const red = Math.trunc(Math.random() * 255);
    const green = Math.trunc(Math.random() * 255);
    const blue = Math.trunc(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}

// function add random color when hover element 
randomColor();

