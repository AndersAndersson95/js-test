const firstname = "Anders";
let age = 25;
var lastname = "Andersson";

console.log(firstname);
console.log(age);
console.log(lastname);

const x = 10;
const y = 5;

console.log(x + y + 8 * 100);
console.log( (x / 2) - 1);

function hej(name, age) {
    console.log("Hejsan! " + name);
    console.log(age);
}

hej("Anders", 25);

const doSomething = (x) => console.log("hello from doSomething." + x);

doSomething(123);

const doSomethingElse = () => {
    console.log(123);
    console.log("Hallå där!");
}

doSomethingElse();

function multiply(x, y) {
    const result = x * y;

    return result;
}

const tjabba = multiply(6, 2);

console.log(tjabba);

const multiply2 = (x, y) => x * y;

const tjabba2 = multiply2(20, 2);

console.log(tjabba2);

const multiply3 = (x, y) => {
    return x * y;
}

const tjabba3 = multiply3(40, 2);
console.log(tjabba3);


function division(x, y) {
    return x / y;
}

const add = (x, y) => x + y;

const add2 = (x, y) => {
    return x + y;
}

const result1 = division(10, 2);
const result2 = add(100, 50);

console.log(result1);
console.log(result2);

