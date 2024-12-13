// [[prototype]] linking

let object1 = {
    a: 1,
    c: 3
}

Object.defineProperty(object1, 'b', {
    enumerable: true,
    writable: false,
    configurable: true,
    value: 2
})

let object2 = Object.create(object1); // creating a [[prototype]] linked object

object2.a = 3; // a is addded to object2 shadowing object1.a in later [[GET]]s 
console.log(object1.a); // 1 unaffected
console.log(object2.a); // 3 from object2

object2.b = 4; // b cant be added becaues object1.b is read-only
console.log(object1.b); // 2 unaffected
console.log(object2.b); // 2 from object1

Object.defineProperty(object2, 'b', {
    value: 4 // override this behaviour
})
console.log(object2.b); // now its 4

console.log(object2.c); // 3
object1.c = 8;
console.log(object2.c); // 8 delegation results in dynamically linked objects

// emulating a constructor

function creator(x) {
    this.a = x; // this is not a constructor
}

creator.prototype.alpha = "mina";

let obj = new creator(5); // but this is a constructor call because of the new keyword

console.log(obj.a);
console.log(obj.alpha);

console.log(obj.hasOwnProperty('a')); // a is found in obj directly
console.log(obj.hasOwnProperty('alpha')); // alpha is found in creator.prototype via [[prototype]] delegation