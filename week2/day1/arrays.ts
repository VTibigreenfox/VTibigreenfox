// -  Create a variable named `magicNumbers`
//    with the following content: `[1, 3, 5, 7]`
// -  Print the third element of `magicNumbers`

let magicNumbers = [1,3,5,7];

console.log(magicNumbers[3]);

// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log "p2 is longer" to the console if `secondList` has more elements than `firstList`

let firstList = [1,2,3];
let secondList = [4,5];

let numbersOne = firstList.length
let numbersTwo = secondList.length

if (numbersOne > numbersTwo){
    console.log("p2 is not longer")
};

// -  Create a variable named `r` with the following content: `[54, 23, 66, 12]`
// -  Print the sum of the second and the third element

let rArray = [54,23,66,12];
let a = rArray[2];
let b = rArray[3];

console.log(a+b);

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc = ["Arthur", "Boe", "Chloe"];

[abc[0], abc[2]] = [abc[2], abc[0]];
console.log(abc);


// -  Create a variable named `integers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `integers` to the console*
// *hint: use a loop, console.log(integers) won't cut it
// -  bonus for using the correct built in array method

let integers = [4, 5, 6, 7];

for(let i = integers [0]; + i <= integers[3]; + i++){
    console.log(i);
}

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList = [1, 2, 3, 8, 5, 6]

//?

// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals = ["koal", "pand", "zebr"];


