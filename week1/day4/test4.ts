'use strict'


let sidea: number = 10;
let sideb: number = 10;
let sidec: number = 10;

let volume: number = (sidea*sideb*sidec);
console.log('Volume: ' + volume);

let surface: number = (2*(sidea*sideb + sidea*sidec + sideb*sidec));


console.log('Surface: ' + surface);


//

'use strict'

let currenthours: number = 14;
let currentminutes: number = 34;
let currentseconds: number = 42;

let currenttime: number = (14*60*60 + 34*60 +42);

let seconds: number = (60*60*24);

let remain: number = (seconds-currenttime);
console.log(remain);

//
'use strict'

let a = 24;
let out = 0;

let newrow: number = (a%2);

if (newrow == 0){
    console.log(out + 1)
}
else {
    console.log('nem jó!')
};

//
'use strict'

let b: number = 26;
let out2: string = '';

switch(true){
    case(b<=20):
    console.log('sweet');
    break;
    case(b>=10):
    console.log('sweet')
    break;
    case(b>20):
    console.log('more');
    break;
    default: console.log('less');
}

// ez így nem jó, de nem tudom, hogy miért nem

let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;
let trueBonus: number = 123;

// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same

if (c>=50){
    console.log(c + 2);
}if (c<50){
    console.log(c-1);}

    //még nincs kész//


    'use strict';
    
    // Create a program that writes this line 100 times:
    // "I won't cheat on the exam!"

let exam: string = 'I wont cheat\'t on the exam!';

for (let i: number =0; i<100; i++){
    console.log(exam)
};

// 
'use strict'
let d: number =  18;
let time: number = 220;
let out3: string = '';

let divide: number = d%4;

if(divide == 0 && time <200){
    console.log("check");
}
if(divide == 0 && time >200){
    console.log("Time out!")
} else{
    console.log('Run forest');
}


