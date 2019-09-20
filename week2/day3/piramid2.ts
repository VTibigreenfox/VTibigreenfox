'use strict';



// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let lineCount: number = 4;
let astrisk: number = 1;
let space: number = lineCount -1 ;

for(let i: number = 0; i<lineCount; i++){
    let line = '';
    for(let j: number = 0; j<space; j++){
        line += ' ';
    }
    for( let k: number = 0; k<astrisk; k++){
        line += '*'
    
    }
    console.log(line);
    space = space-1;
    astrisk = astrisk + 2;
}

