function setUsername(username){

    //Complex DB calls
    this.username = username;
    console.log(`Username is called.`);
}

function CreateUser(username,email,password){
    setUsername.call(this,username);
    this.email =email;
    this.password = password;
}

const person1 = new CreateUser("Gagan",34,9898);
console.log(person1);