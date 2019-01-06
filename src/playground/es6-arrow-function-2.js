// arguments object - no longer bound with arrow functions
const add = (a,b) => {
    console.log(arguments);// no longer accessable
    return a +b;
};
console.log(add(55, 1, 1001));

//this keyword - no longer bound
const user = {
    name:'Kurt',
    cities: ['Boise', 'Boston', 'dublin'],
    printPlacesLived() { //es6 method syntax
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

//challenge

const multiplier = {
    numbers: [1,5,7,8,4],
    multiplyBy: 8,
    multiply(){
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());