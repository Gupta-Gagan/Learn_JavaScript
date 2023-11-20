"use strict";
function multipleby5(num){
    return num*5;
}

// We can also define and set own property of any object in this case object is a function.
multipleby5.power = 2;
multipleby5.mynum = "Private";

// console.log(multipleby5.power)
// console.log(multipleby5.mynum)
// console.log(multipleby5(5));
// console.log(multipleby5(9));
// console.log(multipleby5.prototype);

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`)
}

createUser.prototype.nation = "india";

const obj1 = new createUser("gagan",100);
obj1.increment();
obj1.increment();
obj1.printMe();
console.log(obj1.nation);

const obj2 = new createUser("gagan",104);
obj2.increment();
obj2.increment();
obj2.printMe();
console.log(obj2.nation);

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


