const num1 = 42;
const num2 = 36;
const largest = num1 > num2 ? num1 : num2;
console.log(`The larger number is: ${largest}`);

const randomNum = Math.floor(Math.random() * 100);
console.log(`Random number (rounded down): ${randomNum}`);

const userInput = prompt("Enter a number:");
if (!isNaN(userInput)) {
  const squareRoot = Math.sqrt(userInput);
  alert(`The square root of ${userInput} is: ${squareRoot}`);
} else {
  alert("Please enter a valid number.");
}

const currentDate = new Date();
console.log(`Current Date as String: ${currentDate.toString()}`);

const currentYear = currentDate.getFullYear();
console.log(`Current Year: ${currentYear}`);

const newDate = new Date();
newDate.setDate(newDate.getDate() + 10);
console.log(`Date after 10 days: ${newDate.toDateString()}`);
