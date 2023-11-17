// let div2 = document.querySelector('.one');
// let p = document.createElement('p');
// p.textContent  += 'Hello Gagan';
// // div.style.backgroundColor = "green";
// div2.appendChild(p);


// let firstPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Hey User Your name is ");
//         resolve();
//     },3000)
// });

// firstPromise.then(function(){
//     console.log("Promise Consumed");
// })


// new Promise((resolve, reject) => {
//     setTimeout(function(){
//         console.log("Async2 is queued");
//         resolve();
//     },4000)
// }).then(function(){
//     console.log("Async2 consumed.")
// });


// console.log("                         ");

// const thirdPromise = new Promise( (resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Third Promise Started.")
//         resolve({username: "Gagan", email:"gagan@gmail.com"})
// },5000);
// } ).then(function( user ){
//     console.log(user);
//     console.log("Third Promise resolved");
// })


// const fourthPromise = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         let error = false;
//     if(error){
//         resolve(
//             {username:"Gagan",sirname:"Gupta",age:30}
//         )
//     }else{
//         reject("Error: Something went wrong.")
//     }
//     },7000)
// })

// fourthPromise
// .then((user)=>{
//     console.log(user)
//     return user.age;
// }).then((username)=> console.log(username)
// ).catch(function(error){
//     console.log(error);
// }).finally(function(){
//     console.log("Promise is either resolved or rejected. [Done]");
// })

fetch('https://api.github.com/users/Gupta-Gagan')
.then((response) => {
    return response.json()
    // console.log(response.json())
})
.then((data) => {
    console.log(data.email);
})
.catch((error) => console.log(error))








