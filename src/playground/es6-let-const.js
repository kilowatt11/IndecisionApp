// var variables are function scoped can be reassigned and redefined = possible issues
var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

//let and Const are block scoped. let can be reassigned, but not redefined
//Const cannot be redefined or reassigned
let nameLet = 'Jan';
nameLet = 'julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

var fullName = 'Andrew Mead';
//let firstName;
if(fullName){
    var firstName = fullName.split(' ')[0];
    //let firstName = fullName.split(' ')[0];
    //firstName = fullName.split(' ')[0];

    console.log(firstName);
}
console.log(firstName);

/*
    var variables are accessable outside code block curly braces
    let variables are not. They have to be defined outside
    the code block then assigned within it in order to be accessable
*/