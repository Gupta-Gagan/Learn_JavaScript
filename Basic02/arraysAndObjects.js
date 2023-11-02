"use strict"

const myArr = [1,2,3,4,5];
const myHeroes = ["spiderman","Loki"];

const myArr2 = new Array(1,2,3,4,5);
const myArr3 = myArr;

// console.log(myArr);
// console.log(myHeroes);
// console.log(myArr[2]);
// console.log(myArr2);

// console.log(myArr === myArr3);
myArr3[2] = "Hello World";
myArr[0] = "Gagan";
// console.log(myArr)
// console.log(myArr3)

myArr.push(6);
myArr.push(7);
myArr.pop();

// console.log(myArr);

myArr.unshift(9,6,"open");
// console.log(myArr);
myArr.shift();
myArr.shift();
// console.log(myArr);


// console.log(myArr.includes('Gagan'));
// console.log(myArr.indexOf("Hello World"));

 
const newArr = myArr.join(" "); //Converts all elements of array into string with separator. 

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


/*
    Slice and Splice
*/

// console.log("A ",myArr);

const myn1 = myArr.slice(1,3);

// console.log(myn1);
// console.log("B ",myArr);

const myn2 = myArr.splice(1,3);
console.log("C ",myArr);
console.log(myn2);
console.log(myArr.length);






