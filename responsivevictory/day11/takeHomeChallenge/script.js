var button = document.getElementById("myButton");
button.addEventListener("click", async function getPokemon() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto"); // Simulate a data request
    const data = await response.json();
    console.log("Pokemon Data", data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
  var newElement = document.createElement("h1");
  var text = document.createTextNode("Ditto");
  newElement.appendChild(text);
  var element = document.getElementById("myDiv");
  element.appendChild(newElement);
});

var button = document.getElementById("my2Button");
button.addEventListener("click", function () {
  var newElement = document.createElement("p");
  var text = document.createTextNode("Button was clicked!");
  newElement.appendChild(text);
  var element = document.getElementById("output");
  element.appendChild(newElement);
});

var button = document.getElementById("myList");
button.addEventListener("click", function () {
  var inputfield = document.getElementById("list1");
  let inputtext = inputfield.value;
  var newElement = document.createElement("p");
  var text = document.createTextNode(inputtext);
  var element = document.getElementById("myListItem");
  element.appendChild(newElement);
});
