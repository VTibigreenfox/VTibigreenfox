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
    for(let i: number = 0; i<canvas.height/2; i+=20){
        drawingLines(i,canvas.height/2,canvas.height/2,canvas.height/2+i, 'green')
    }
    for(let k: number = 0; k<canvas.width/2; k+=20){
        drawingLines(k,canvas.height/2, canvas.width/2, canvas.height/2-k, 'red')
    }
    for(let i: number = 0; i<=canvas.height/2; i+=20){
        drawingLines(canvas.width-i,canvas.height/2,canvas.height/2,canvas.height/2+i, 'blue')

    }
    for(let k: number = 0; k<=canvas.width/2; k+=20){
        drawingLines(canvas.width-k,canvas.height/2, canvas.width/2, canvas.height/2-k, 'yellow')
    }