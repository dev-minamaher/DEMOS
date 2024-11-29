// to understand closure one must first understand scopes:

// function example() {
//     a = 10;
//     console.log(a);
// }
// example();
// console.log(a);

// and hoisting:

// foo(); // type error
// var a = true;
// if (a) {
//     function foo() { console.log("a"); }
// }
// else {
//     function foo() { console.log("b"); }
// }

// closure is when a function retains access to its scope of decleration even after that scope should have been removed

function foo(c) {
    var a = 2;
    function bar() {
        console.log( a + c );
    }
    return bar;
}
var baz = foo(8);
baz(); // 10 -- Whoa, closure was just observed, man.
var bla = foo(3);
bla(); // 5 -- another instance of the function stack.

// each timer function has closure over its scope including the global i variable
// thus they all print the final value i.e. 6 as they all excute after the loop

// for (var i=1; i<=5; i++) {
//     setTimeout( function timer(){
//         console.log( i );
//     }, i*1000 );
// }

// equivilant to this:
var i = 1;
{
    var i;
    setTimeout( function timer(){console.log( i )}, 0 ); // 6
}
i++;
{
    var i;
    setTimeout( function timer(){console.log( i )}, 0 ); // 6
}
i++;
{
    var i;
    setTimeout( function timer(){console.log( i )}, 0 ); // 6
}
i++;
{
    var i;
    setTimeout( function timer(){console.log( i )}, 0 ); // 6
}
i++;
{
    var i;
    setTimeout( function timer(){console.log( i )}, 0 ); // 6
}
i++;
{
    var i;
}

// each timer function has closure over its scope including the local i variable even after the block is over
// each one prints the value of its local i

// for (let i=1; i<=5; i++) {
//     setTimeout( function timer(){
//         console.log( i );
//     }, 0 );
// }

// equivilant to this:
let j = 1;
{
    let i = j;
    setTimeout( function timer(){console.log( i )}, 0 ); // 1
}
j++;
{
    let i = j;
    setTimeout( function timer(){console.log( i )}, 0 ); // 2
}
j++;
{
    let i = j;
    setTimeout( function timer(){console.log( i )}, 0 ); // 3
}
j++;
{
    let i = j;
    setTimeout( function timer(){console.log( i )}, 0 ); // 4
}
j++;
{
    let i = j;
    setTimeout( function timer(){console.log( i )}, 0 ); // 5
}
j++;
{
    let i = j;
}