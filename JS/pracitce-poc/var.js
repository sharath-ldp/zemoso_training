// var declarations are globally scoped or function/locally scoped.

//ex: var is global
var tester1 = "hey hi";
    
function newFunction() {
    console.log(tester1) // prints "hey hi"
}
newFunction()
//-------------------------------------------

//ex: var is functional scope 
function newFunction2() {
    var hello = "hello";
}
newFunction2()
console.log(hello); // error: hello is not defined

//-------------------------------------------

//ex: var is block scoped

if(true){
    var tester2 = "Hello, hey!"
    }
console.log(tester2); // error: hello is not defined

//-------------------------------------------

// var variables can be re-declared and updated

var tester3 = "I am tester3"
tester3 = "I am updated tester"
console.log(tester3)