// var c = 300;

let a = 300;
if(true){
    let a = 10;
    let b = 10;
    // console.log(`Inner a value is ${a}`);

}

// console.log(a);


function one(){
    const username = "gagan";

    function two(){
        const website = "Instagram";
        console.log(username);
    }
    two();
    

}

// one();

//-------------------  Intresting  -----------------------
console.log(addone(5));

function addone(num){
    return num+1;;
}





console.log(addTwo(5)); // We cannot access refrence function before initializing it.
const addTwo = function(num){
    return num+2;
}


