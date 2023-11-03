//*************  Strings  ************* */

const name = "Gagan ";
const repoCount = 8;

// console.log(name + repoCount + " Value");

//Best way to play with string

// console.log(`Hello My name is ${name} my repCount is ${repoCount.toFixed()}.`);

const gameName = new String("gagan-google-com");

// console.log(gameName[1]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.split('-'));
// console.log(gameName.replace('-',"@"));

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('og'));

const newString = gameName.substring(-8,-2);
// console.log(newString);

const anotherString = gameName.slice(-8,-2);
// console.log(anotherString); // it slices the string and return it.

const newStringOne = "    Gagan     ";
// console.log(newStringOne);
// console.log(newStringOne.trim());   // Remove all spaces from String.

const url = "https://gagan.com/gagana%20gupta";
// console.log(url.replace("%20",'-'));
// console.log(url.includes("gagan"));

// console.log(url.split("/"));




// ************* Math and Numbers ********************************

const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(typeof balance);
// console.log(balance.toString().length); // ---> return the length of a number
// console.log(balance.toFixed(4));  //----> fixed a number of decimal points.

const otherNumber = 123.8937;
// console.log(otherNumber.toPrecision(6));

const hundreds = 100000000;
// console.log(hundreds.toLocaleString('en-IN'));
// console.log(hundreds.toLocaleString('en-US'));



// ************************  Maths  **********************************
// console.log(Math);
// console.log(Math.abs(7));
// console.log(Math.abs(-78));

// console.log(Math.round(8.45));
// console.log(Math.round(4.89));

// console.log(Math.ceil(45.26));
// console.log(Math.floor(2.955));

// console.log(Math.min(4,2,8,2,1,3));
// console.log(Math.max(6,4,8,2,1,9));

// console.log(Math.random());

// console.log((Math.random()*10) );
// console.log((Math.random()*10) + 1);

const randomValue = Math.round((Math.random()*10) + 1);
console.log(randomValue);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1))+ min);






