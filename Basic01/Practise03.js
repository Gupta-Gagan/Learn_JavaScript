// ****************** Date ***************************

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.getTime());
// console.log(myDate.getDate());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,10,2);
let myCreatedDate = new Date(2023,10,2,12,35,56);

let myAnotherDate = new Date("2023-04-11");
// console.log(myCreatedDate.toLocaleString());
// console.log(myAnotherDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp.toLocaleString());
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay().toLocaleString());

// `${newDate.getDay()} and the time`;
newDate.toLocaleString('default' , {
    weekday : "long",
    
})

console.log(newDate.toLocaleString());