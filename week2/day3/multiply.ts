let example: number = 15;
for(let i: number = 1; i<16; i++){
    console.log(i + '*' + example + '=' + i * example);
}

'use strict';


'use strict';

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

let i: number = 1;
for(i; i<=100; i++){
    if(i%3===0 && i%5===0){
        console.log('something')
    }
    else if(i%5===0){
        console.log('buzz')
    }
    else if(i%3===0){
        console.log('fizz')
    }
    
    else{console.log(i)}
}
  