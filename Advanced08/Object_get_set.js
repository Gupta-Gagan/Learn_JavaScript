const User = {
    _email: 'gagan@google.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase();
    },
    
    set email(value){
        this._email = value;
    }

}


const tea = Object.create(User);
const tea2 = User;
console.log(tea.email)
tea.email = " gagan"
console.log(tea2.email)
console.log(tea.email)