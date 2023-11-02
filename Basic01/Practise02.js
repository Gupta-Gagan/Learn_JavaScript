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
console.log(newStringOne);
console.log(newStringOne.trim());   // Remove all spaces from String.

const url = "https://gagan.com/gagana%20gupta";
console.log(url.replace("%20",'-'));
console.log(url.includes("gagan"));

console.log(url.split("/"));







