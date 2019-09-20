// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000




function surface(a: number, b: number) :void{
    console.log('Surface area:' + a*a*b);

}
surface(10,6);

function volume(a: number): void{
    console.log('Volume:' + a*a*a);
}
volume(10);

'use strict';

// Create a program that writes this line 100 times:
// "I won't cheat on the exam!"

let exam: string = 'I won\'t cheat on the exam!'
for(let i: number =0; i<=9; ++i){
    console.log(exam);
}

'use strict';

// Create a program that prints all the even numbers between 0 and 500

let i: number = 0;
for(i; i<5; i++){
    if(i % 2===0){
        console.log(i);
    } 
}

'use strict';

let number: number = 15;

// Create a program that
// prints the multiplication table with number
//
// Example:
// The number 15 should print:
//
// 1 * 15 = 15
// 2 * 15 = 30
// 3 * 15 = 45
// 4 * 15 = 60
// 5 * 15 = 75
// 6 * 15 = 90
// 7 * 15 = 105
// 8 * 15 = 120
// 9 * 15 = 135
// 10 * 15 = 150


