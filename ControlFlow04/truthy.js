const userEmail = NaN;

if(userEmail){
    console.log("Got user email.");
}
else{
    console.log("Don't have user email");
}

/*
    Falsy Values
    
    false, 0, -0, BigInt 0n, "", null, undefined, NaN


    Truthy Values

    "0", 'false', " ", [], {}, function(){} 


    if(userEmail.length === 0){
        console.log("Array is Empty")
    }
*/

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty.")
}

// Nullish Coalescing Operator (??): null undefined

// let val1;
//  val1 = 50 ?? 10;
//  console.log(val1);

//  val1 = null ?? undefined;
//  console.log(val1);

//  val1 = undefined ?? 15;
//  console.log(val1);


// Ternary Operator
// condition ? true : 

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");
