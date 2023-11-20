"use strict";

let myName = 'Gagan';
let myPlatform = "Javascript";

// console.log(myName.trueLength);

let myHeroes = ["thor", "spiderman"];

let heroPower ={
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// console.log(heroPower.spiderman);
// console.log(heroPower.getSpiderPower());

Object.prototype.gagan = function(){
    console.log(`Gagan is present in all objects`);

}

Array.prototype.heyGagan = function(){
    console.log(`Gagan says hello array`);
}

// If we can set property to object explicitily we can access with only object not with non-primitve daatatype.

// heroPower.gagan();
// myHeroes.gagan();
// myHeroes[0].gagan();
// heroPower.heyGagan;


// INHERITENCE

const User = {
    name: "gagan",
    email: "Gagan@google.com"
}

const Employee = {
    working: true
}

const Developer = {
    speciality: "JavaScript",
    fulltime: true,
    __proto__:Employee  // Inherit all the properties of Employee object in Developer.

}

// console.log(Developer.speciality);
// console.log(Developer.working);


//Modern Syntax
Object.setPrototypeOf(Employee,User);

// console.log(Employee.email);

/*
Setting custom property of String.
*/

let anotherUserName = "Rohit   ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length of String is ${this.trim().length}`)
}

anotherUserName.trueLength()

"Hello Gagan  ".trueLength();



