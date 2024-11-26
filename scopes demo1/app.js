// scopes:
// block -> local(function) -> global(module) -> global(script)

// block scope:
// {declared between curly braces}

// let and const are block scoped
// they are hoisted to the top of their block but not initialized
// they enter TDZ (temporary dead zone) until their line of decleration

// console.log(letVar); // reference error
// console.log(conVar); // reference error
{
    // console.log(letVar); // reference error
    // console.log(conVar); // reference error
    let letVar = "I'm block scoped";
    const conVar = "I'm block scoped";
    console.log(letVar); // "I'm block scoped"
    console.log(conVar); // "I'm block scoped"
}
// console.log(letVar); // reference error
// console.log(conVar); // reference error

// local scope:
// func() {declared within the body of a function}

// var is local scoped i.e. not confined to a block but a function
// it is hoisted i.e. can be accessed before declaration

console.log(varVar); // undefined
{
    console.log(varVar); // undefined
    var varVar = "I'm locally scoped";
    console.log(varVar); // "I'm locally scoped"
}
console.log(varVar); // "I'm locally scoped"

// console.log(varVar2); // refrerence error
function testVar() {
    console.log(varVar2); // undefined
    var varVar2 = "I'm locally scoped"
    console.log(varVar2); // "I'm locally scoped"
}
testVar()
// console.log(varVar2); // refrerence error

// global scope:

// any variable declared outside all fuctions and blocks (for block scoped variables)
// is globally scoped can be accessed anywhere in the code
// var variables are hoisted, let and const are in TDZ untill their line of decleration

// let x = 2;
// let y = 1;

// if (x > y) {
//     let m = 10;
// } else {
//     let z = 11;
// }

// console.log(m ,z);