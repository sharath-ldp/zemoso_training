// Variables declared with the const maintain constant values. 

//const declarations are block scoped





//const cannot be updated or re-declared
const greeting = "say Hi";
greeting = "say Hello instead";// error: Assignment to constant variable. 

const greeting = "say Hi";
const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared


//--------------------------------------------------------------------------------------

//This behavior is somehow different when it comes to objects declared with const. While a const object cannot be updated, the properties of this objects can be updated. Therefore, if we declare a const object as this:

const greeting4 = {
    message: "say Hi",
    times: 4
}

greeting4.times=5 // this is allowed