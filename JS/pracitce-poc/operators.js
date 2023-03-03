//JavaScript's numeric operators include +, -, *, /, % (remainder), and ** (exponentiation). Values are assigned using =. Each binary operator also has a compound assignment counterpart such as += and -=, which extend out to x = x operator y.

//ex 1 shorthand +
console.log(x += 5);
console.log(x = x + 5);

//ex 2 concat
console.log("hello" + " world"); // "hello world"

//ex 3 (overloading)
console.log("3" + 4 + 5); // "345"
console.log(3 + 4 + "5"); // "75"

//ex4 (comparision)
console.log(123 == "123"); // true
console.log(1 == true); // true

console.log(123 === "123"); // false
console.log(1 === true); // false

//ex 5(bitwise and logical)
const a = 0 && "Hello"; // 0 because 0 is "falsy"
const b = "Hello" || "world"; // "Hello" because both "Hello" and "world" are "truthy"