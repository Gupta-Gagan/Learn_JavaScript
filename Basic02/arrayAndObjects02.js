const marvelHeroes = ["Thor", "IronMan", "Spiderman"];
const dc_heroes = ["Superman","Batman","Flash"];

// marvelHeroes.push(dc_heroes);
// console.log(marvelHeroes); //It pushes all array as a one in marvelHeroes.
// console.log(marvelHeroes[3][1]); // Accessing element in array of array.

// const allHeroes = marvelHeroes.concat(dc_heroes);
const allHeroes = [...marvelHeroes,...dc_heroes,6];
// console.log(allHeroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray(45)); //Checks whether an element is array or not.
// console.log(Array.from("Hitesh"));
// console.log(Array.from({name:"Hitesh"})) //Intresting

let score1 = 200;
let score2 = 300;
let score3 = 400;

// console.log(Array.of(score1,score2,score3));










