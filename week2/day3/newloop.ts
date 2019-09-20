let newLoop: number[] = [1,2,3,4,5];

 let j = newLoop.length;
 for(let i: number = 0; i<=newLoop.length; i++){
    console.log(i,j--); 
 }
    
 'use strict';

 // Write a program that prints a few details to the console about you
 // It should print each detail to a new line.
 //  - Your name
 //  - Your age
 //  - Your height in meters (as a decimal fraction)
 //
 //  Example output:
 //  John Doe
 //  31
 //  1.87

 let tibi = 'Tibi\n30\n1.82';
 console.log(tibi);

 
// Create a program that prints a few operations on two numbers: 22 and 13

// Print the result of 13 added to 22

// Print the result of 13 substracted from 22

// Print the result of 22 multiplied by 13

// Print the result of 22 divided by 13 (as a decimal fraction)

// Print the remainder of 22 divided by 13



function magic(a: number, b:number) :number {
    return (a+b);
   

}
magic(13,22);
function wizard(c: number): number {
    return c *2;
}
console.log(wizard(magic(13,22)));



