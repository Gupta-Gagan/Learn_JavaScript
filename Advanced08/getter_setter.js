//Construct a class

/* 
    In getter setter we use _ keyword before the name of the fields.
    It basically hides the real value and have ability to return decrypt data.
*/
class User{
    
    constructor(email,password){
        this.email = email;
        this.password = password;
        
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }
}

const person1 = new User("Gagan@google.com",789);
console.log(person1.email);
console.log(person1.password);