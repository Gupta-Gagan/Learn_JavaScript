class User{
    constructor(username){
        this.username = username;
    }

    doSomething(){
        console.log(`Username is ${this.username} !!!`)
    }
}


class Employee extends User{
    constructor(username,email,designation){
        super(username);
        this.email = email;
        this.designation = designation;
    }

    addFeature(){
        console.log(`A new feature added by ${this.username} and his email id is ${this.email}`)
    }
}


const emp1 = new Employee("Gagan","Gagan@gmail.com","SDE");

emp1.addFeature();


