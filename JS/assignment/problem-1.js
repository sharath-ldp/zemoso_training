//Write a program to demonstrate how a function can be passed as a parameter to another function.

const greet = () => `Good morning!`

const name = (myName,greet) => `${greet()}, ${myName}`

console.log(name('Sharath', greet))
console.log(name('Lavanya', greet))
console.log(name('SriVyshnavi', greet))