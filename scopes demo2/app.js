// scopes:
// block -> local(function) -> global(module) -> global(script)

// functions are block scoped and hoisted
// they can be invoked before their decleration within their block of decleration

// but their definition remains in memory even after their block of decleration is excuted

// blockFunc() // type error
{
    blockFunc() // "I can be invoked from here"
    function blockFunc() {
        console.log("I can be invoked from here")
    }
    blockFunc() // "I can be invoked from here"
}
blockFunc() // "I can be invoked from here"

// but they can't do the same if declared within another function

// innerFunc() // reference error
function outerFunc() {
    innerFunc() // "I'm an inner function"
    function innerFunc() {
        console.log("I'm an inner function")
    }
    innerFunc() // "I'm an inner function"
}
outerFunc()
// innerFunc() // reference error

// function expressions/ arrow functions
// declared with var/ let/ const
// their definition is not hoisted but they act like variables

// var are locally scoped and hoisted as a variable (can't be invoked)

// varFunc() // type error
{
    // varFunc() // type error
    var varFunc = function() {console.log("I'm a function expression")}
    varFunc() // "I'm a function expression"
}
varFunc() // "I'm a function expression"

// let and const are block scoped and enter TDZ

// letFunc() // reference error
// constFunc() // reference error
{
    // letFunc() // reference error
    // constFunc() // reference error
    let letFunc = () => {console.log("I'm an arrow function")}
    const constFunc = () => {console.log("I'm an arrow function")}
    letFunc()
    constFunc()
}
// letFunc() // reference error
// constFunc() // reference error