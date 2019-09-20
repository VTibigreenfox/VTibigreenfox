let listA: number[] = [1,2,3,4,5]
let listB: number[] = listA;

listB.push(6);

let listD = [...listA];
listD.push(8);

console.log(listA);
console.log(listB);
console.log(listD);
