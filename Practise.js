"use Strict"

//Let Const Var

const password = "Hello!123";
let name = "Gagan";
var emaill = "gagan@google.com";

// Do Not Use var
//let have their value only in their scope.


//console.table([name, password, emaill]);

//Some Primitive Data Types

// number => 2 to power 53
// bigint => It is for very large values
// string => ""
// boolean => true/false
// null => standalone value
// undefined 
// symbol => unique

//console.log(typeof 'hello world');

//let var1 = null;
//console.log(typeof var1);


// ------ DataType Conversion Confusion

//let var1 = "xkd"; //--> NaN
//let var1 = null; // ---> 0
let var1 = undefined
let numberVar1 = Number(var1);
//console.log(typeof numberVar1);   //--> number

let str1 = 25;
let stringStr1 = String(str1);
//console.log(typeof stringStr1); //--> string

let var2 = 23
let checkValue = Boolean(var2);
console.log(numberVar1);
