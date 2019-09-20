
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let numberOfLines: number = 10;

function drawingLines(x, y, a, b, e) :void{
ctx.strokeStyle = e;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(a, b);
ctx.stroke();
}
for(let i: number = 0; i<canvas.height; i+=20){
    drawingLines(i,canvas.height, 0, i, 'green')
}
for(let k: number = 0; k<canvas.height; k+=20){
    drawingLines(canvas.height,k, k, 0, 'red')
}

