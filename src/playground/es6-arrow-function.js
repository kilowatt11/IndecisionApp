//es5 function
const square = function (x){
    return x * x;
};

console.log(square(8));

//es6 arrow function. 
//always annonymous. Can assign to a variable to reference

// const squareArrow = (x) => {
//     return x * x;
// };

//More concise syntax. If arrow only returns a single expression you can use this
const squareArrow = (x) => x * x; // return is implicit

console.log(squareArrow(9));


// challenge 

const getFirstName = (name) => name.split(' ')[0];
//const getFirstName = (name) => {
// return name.split(' ')[0];
//};

console.log(getFirstName('Same Neely'));