"use strict";
//Basic Types
let x = 10;
let company = 'ZEMOSO';
let isMorning = true;
let y = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'sharath'];
//Tuple
let person = [1, 'Brad', true];
let employee;
employee = [
    [1, 'sharath'],
    [2, 'sriVyshnavi'],
    [3, 'Lavanya'],
];
//Union
let pid;
pid = 22;
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 5] = "Up";
    Direction1[Direction1["Down"] = 6] = "Down";
    Direction1[Direction1["Left"] = 7] = "Left";
    Direction1[Direction1["Right"] = 8] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
const user = {
    id: 1,
    name: "sharath",
};
//Functions
function addNum(x, y) {
    return x + y;
}
addNum(3, 5);
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "sharath"
};
//here age is optional
//and user1.id is error as it is read only
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['1', '2', '3', '4']);
