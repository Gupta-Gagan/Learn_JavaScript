
// Basic Function implementation

function sayMyName(){
    console.log("Gagan");
    console.log("Gupta");
}

// sayMyName();

// function addTwoNumbers(num1, num2){
//     console.log(num1+num2);
// }

// addTwoNumbers(4,5);


// Functions with Parameters
function addTwoNumbers(num1, num2){
    return (num1+num2);
}

// console.log(addTwoNumbers(5,5));
// console.log(addTwoNumbers(5,null));

// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a username ");
//         return;
//     }
//     return `${username} just logged in`;
// }


// We can also provide default parameters
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username ");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage());

function  calculatePrice(...val1){
    let res = 0;
    val1.forEach((num) => {res=res+num});
    return res;
}

// console.log(calculatePrice(500,45,60));

const user = {
    username: "Gagan",
    prices:99
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`);
}

// handleObject(user);

// handleObject({username: "gagan",prices:299});

const myNewArray = [200,300,400,500];

function returnSecondValue(getArray){
    return myNewArray[2];
}

console.log(returnSecondValue(myNewArray));















