// this doesn't refere to the function object
// instead use the variable name of the function

function foo(num) {
    console.log( "foo: " + num );
    // keep track of how many times `foo` is called
    // this.count++;
    foo.count++;
}
foo.count = 0;
var i;
for (i=1; i<5; i++) {
    foo( i );
}
console.log( foo.count );

// this doesn't refere to the function lexical scope
// instead use the variable name directly

function func() {
    var a = 2;
    function bark() {
        // console.log( this.a ); // undefined
        console.log(a);
    }
    bark();
}
func(); // 2


// this doesnt traverse the call stack
// there is no such thing

function func1(x) {
    // console.log(this.x);
    console.log(x);
}
function func2() {
    let x = 0;
    func1(x);
}
func2(); // undefined

// instead this traverses the caller object's prototype chain

global.a = 6; // setting 'a' property = 6 on the global object
function bum () {
    console.log( this.a ); // RHL
}

let blu = {
    a: 1
}
let red = Object.create(blu)
red.meth = bum;
red.meth(); // 1 from blu implicit binding

bum(); // 6 falls back to global object default binding

let newMeth = red.meth;
newMeth(); // 6 context lost falls back to global object

bum.call(red); // 1 explicit binding

let gren = {
    a: 3
}

red.meth.call(gren); // 3 explicit binding is stronger than imlicit
red.meth.call(); // 6 fall back to global

let otherMeth = bum.bind(red); // hardbound
otherMeth(); // 1 context not lost
otherMeth.call(gren);  // 1 bind > call

function setOne() {
    this.id = 1; // LFH
}
setOne.call(gren)
console.log("gren.id: " + gren.id)

let o = new setOne();
console.log(o.id); // 1 new --> this binds to the new object

let o1 = {
    id: 5
}
let boundSetOne = setOne.bind(o1);
let o2 = new boundSetOne();
console.log(o1.id); // 5
console.log(o2.id); // 1 new is stronger than hard binding

// default < implicit (caller) < explicit (call, apply) < explicit (hard binding) (bind) < new ({})