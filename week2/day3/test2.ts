'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

// Draw a colored line
ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(100, 200);
ctx.lineTo(100, 100);
ctx.stroke();

// Draw a colored line
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(100, 200);
ctx.lineTo(200, 200);
ctx.stroke();

// Draw a colored line
ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.stroke();



// Draw a colored line
ctx.strokeStyle = 'orange';
ctx.beginPath();
ctx.moveTo(250, 150);
ctx.lineTo(200, 200);
ctx.stroke();

// Draw a colored line
ctx.strokeStyle = 'purple';
ctx.beginPath();
ctx.moveTo(200, 100);
ctx.lineTo(200, 200);
ctx.stroke();

// Draw a colored line
ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.moveTo(250, 50);
ctx.lineTo(200, 100);
ctx.stroke();

// Draw a colored line
ctx.strokeStyle = 'yellow';
ctx.beginPath();
ctx.moveTo(150, 50);
ctx.lineTo(100, 100);
ctx.stroke();

// Draw a colored line
ctx.strokeStyle = 'grey';
ctx.beginPath();
ctx.moveTo(250, 50);
ctx.lineTo(250, 150);
ctx.stroke();

// Draw a colored line
ctx.strokeStyle = 'teal';
ctx.beginPath();
ctx.moveTo(150, 50);
ctx.lineTo(250, 50);
ctx.stroke();

