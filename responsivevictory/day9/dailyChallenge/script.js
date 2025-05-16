const name = prompt("Enter your name:");
switch (name) {
  case "Cyril":
    alert("Welcome, Cyril!");
    break;
  case "Ben":
    alert("Hello, Ben!");
    break;
  case "Aaron":
    alert("Hi, Aaron!");
    break;
  case "Renee":
    alert("Hey, Renee!");
    break;
  default:
    alert("Hi there!");
}

const age = prompt("Enter your age:");
function isMinor(age) {
  return age <= 18 ? true : false;
}
console.log(isMinor(age));

const chars = prompt("What score did you get?");
function getCode(chars) {
  if (chars > 15) return "AA";
  else if (chars > 13) return "AB";
  else if (chars > 10) return "BB";
  else if (chars > 7) return "BC";
  else if (chars > 5) return "CC";
  else return "DD";
}

alert(`Your grade is ${getCode(chars)}`);

const num1 = parseFloat(prompt("Pick a number"));
const num2 = parseFloat(prompt("Pick a second number"));
function add(num1, num2) {
  return num1 + num2;
}
alert(add(num1, num2));

function subtract(num1, num2) {
  return num1 - num2;
}
alert(subtract(num1, num2));

function multiply(num1, num2) {
  return num1 * num2;
}
alert(multiply(num1, num2));

function divide(num1, num2) {
  return num1 / num2;
}
alert(divide(num1, num2));
