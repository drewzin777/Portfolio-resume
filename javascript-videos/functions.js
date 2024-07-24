// function greeting() {
//     alert("Hello World");
// }

// greeting();
// //call your function as many times as you need to 


// let announcement = function() {
//     alert("You are learning JS functions");
// }
// announcement();

// let cubeThis = funcion(someNumber) {
// document.getElementById("output").innerHTML = someNumber * someNumber * someNumber; 
// }

//let x = prompt("Waht number would you like to cube?");
//cubeThis(x); 

// let rectangleArea = function(lengthX, widthX) {
//     let area = lengthX * widthX;
//     return area;
//     //document.getElementById("output").innerHTML = area; 
// }

// let length = prompt("Length?"); 
// let width = prompt("Width?");

// document.getElementById("output").innerHTML = rectangleArea(length, width);

// rectangleArea(length, width);

let rectangleArea = (length, width) => length * width; 

let greeting = () => "Hello World";

console.log(greeting());

let length = prompt("Length?"); 
let width = prompt("Width?");

//document.getElementById("output").innerHTML = rectangleArea(length, width);