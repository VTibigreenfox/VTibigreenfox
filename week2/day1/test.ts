// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList = [1, 2, 3, 8, 5, 6];

let newList = numList.map(function(element){
    if(element == 8) {
        return 4
    }
    else {
        return element
    }

})
console.log(newList);

// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console

let change = [1, 2, 3, 4, 5]

change[3]++

console.log(change);

// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals = ["koal", "pand", "zebr"];

let newAnimals = animals.map(function(currentvalue){
    return currentvalue.substring(0) + 'a'

})
console.log(newAnimals);

// -  Create an array variable named `drinks` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// -  Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`



let drinks = ['Gin', 'Whiskey', 'Wine', 'Beer'];
    let newDrinks = drinks.map(function(element){
        return element + element;
    }
    )
console.log(newDrinks);