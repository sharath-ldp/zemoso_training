//let is block scoped
let hello = "say Hello";
let greeting1 = "say Hi";
let times = 4;

if (times > 3) {
     let hello = "say Hello instead";
     console.log(hello);// "say Hello instead"
 }
console.log(hello) // hello is not defined

//--------------------------------------------------------------------------------------

//let can be updated but not re-declared.
let greeting = "say Hi";
greeting = "say Hello instead";  //no error

let greeting2 = "say Hi";
let greeting2 = "say Hello instead"; // error: Identifier 'greeting2' has already been declared


