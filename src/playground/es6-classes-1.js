class Person {
    constructor(name = "Annonymous", age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi! my name is ${this.name}`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();

        if (this.hasMajor()){
            description += ` Their major is ${this.major}`
        }
        return description;
    }

}

class Traveler extends Person {
    constructor(name,age, homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();

        if(this.homeLocation){
             greeting += ` and I'm visiting from ${this.homeLocation}.`
        }
        return greeting;
    }
}

const me = new Traveler("Kurt Hammes", 42, 'Boise');
const you = new Traveler();
console.log(me.getGreeting());
// console.log(me.hasMajor());
console.log(you.getGreeting());
// console.log(you.hasMajor());