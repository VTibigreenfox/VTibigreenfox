'use strict';


// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is


let lineCount: number = 7;
let star: number = 1;
let space: number = lineCount -1;
let star2: number = 1
let space2: number = lineCount-1

for(let i: number = 0; i<lineCount; i++){
    let line = '';
    for(let j: number = 0; j<space; j++){
        line += ' ';
    }
    for( let k: number = 0; k<star; k++){
        line += '*'
    
    }
    for(let h = 4; h<lineCount; h++)
     line += ' '
    
    console.log(line);
    space = space-1;
    star = star + 2;
}
