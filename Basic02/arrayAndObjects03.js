//singleton
//Object.create

//************* Object Literals */
const mySym = Symbol("Key1");

const JsUser = {
    name: "Gagan",
    "full name": "Gagan Gupta",
    age: 18,
    location: "Delhi",
    [mySym]:"mykey2",
    email: "gagan@google.com",
    isLoggedin: false,
    lastLoginDays: ["Monday","Tuesday", "Wednesday"]
}

// console.log(JsUser.name);  //Naive Practise
// console.log(JsUser["full name"]); //Best Practise to access objects.
// console.log(JsUser[mySym]);

JsUser.email = "Gagan@microsoft.com";
// console.log(JsUser);
// Object.freeze(JsUser);
JsUser.email = "Gagan@twitter.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greeting2 = function(){
    console.log(`Hello Js User , ${this.name}`);
}
JsUser.greeting();
JsUser.greeting2();









