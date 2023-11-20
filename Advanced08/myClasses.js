// ES6

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}#4568`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}


const chai = new User("rohit kumar", "Chai@gmail.com", 2567);

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// Behind the Scene

function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User2.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const tea2 = new User2("tea", "tea@gmail.com", 5416);

console.log(tea2.encryptPassword());
console.log(tea2.changeUsername());








