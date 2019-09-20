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

let lineCount: number = 5;
let nem = '';


for(let i: number = 0; i<=lineCount; i++){
    if(i = 2){
        console.log('   ' + '*')
    }
    if(i= 3){
        console.log('  ' + '***')
    }
    if(i=4){
        console.log(' ' + '*****')
    }
    if(i=5){
        console.log('*******');
    };
};
