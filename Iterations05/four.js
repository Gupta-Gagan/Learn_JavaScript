const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
};

for(const key in myObject){
    // console.log(`${key} shortcut is ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for(const key in programming){
    // console.log(key);
    // console.log(programming[key]);
}

const map = new Map(); // It stores only unique element.
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr',"France");
map.set('IN',"India");


// Map is not iterable
// for(const key in map){
//     console.log(Object.keys(key));
// }










