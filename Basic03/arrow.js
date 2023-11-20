const user = {
    username: "gagan",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage();
/* 
    this keyword refers to its local execution context.
*/
user.username = "sam";
// user.welcomeMessage();

// console.log(this); 

// const chai = function () {
//     let username = "gagan";
//     console.log(this.username)

// }

// chai();  

const chai = () => {
    let username = "gagan";
    console.log(this);
}

// chai();

const addtwo = (num1, num2) => { return num1 + num2};
const addthree = (num1, num2, num3) => num1+num2+num3;

// console.log(addthree(5,4,6));


