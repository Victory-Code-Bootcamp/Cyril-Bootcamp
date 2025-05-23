function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();

function sumEven(numbers) {
  let sum = 0;
  numbers.forEach((num) => {
    if (num % 2 === 0) {
      sum += num;
    }
  });
  return sum;
}

console.log(sumEven([1, 2, 3, 4, 5, 6])); // Output: 12

function capitalizeAll(words) {
  return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
}

console.log(capitalizeAll(["hello", "world"])); // Output: ['Hello', 'World']

function printOdds() {
  for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

printOdds();

function capitalizeEvenIndexes(words) {
  return words.map((word, index) => {
    return index % 2 === 0
      ? word.charAt(0).toUpperCase() + word.slice(1)
      : word;
  });
}

console.log(
  capitalizeEvenIndexes(["bootcamp", "participants", "rock", "javascript"])
);
// Output: ['Bootcamp', 'participants', 'Rock', 'javascript']
