import { hello } from "./js/module1.js";
import { add, hello3, sub } from "./js/module2.js";

hello("abhi");

hello3("Advik");

let result = add(10, 20);
console.log(result);
let subResult = sub (20, 10);
console.log(subResult);

// npm init : it will generate the package.json file which is an entry point for our
// node js based project
// it will have all the details regarding your library which will be using in the project.

// npm : node package manager : env for node.
// init : it will help us to create the nodejs based project structure.
// json : javascript objct notation ==> will hold the details in terms of the keys and value pairs. key : value
// keys will present to the left side and values will present to the right side.

let resultEvenOrOdd = evenOrOdd("10");
console.log(resultEvenOrOdd);

console.log(100 / 10 == "10");
// == will check the value irrespective of the type
console.log(100 / 10 === "10");
// === will check the value with respect to the type.