'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.


let squareNumber: number = 5;
function drawsquare(x: number, y:number, width: number, heigth: number) :void{
    ctx.fillStyle = 'green'
    ctx.fillRect(x,y,width,heigth);
}
for(let i: number = 0; i<squareNumber; i++){
    drawsquare(i*50, i*20, 45, 45)
}


