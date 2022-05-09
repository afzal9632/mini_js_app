//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.

// localStorage.getItem();
document.querySelector("#scope").addEventListener("click", scope);
document.querySelector("#hoist").addEventListener("click", hoisting);
document
  .querySelector("#constructorfunctions")
  .addEventListener("click", construct);

document.querySelector("#prototype").addEventListener("click", Prototype);

function scope() {
  document.querySelector("#data").innerHTML = "";
  var a = JSON.parse(localStorage.getItem("scope")); // a mera object hai jismay data hai.yaha se nikal liye.

  var tr = document.createElement("ul"); // tag may dal diye.

  var li = document.createElement("li");
  li.innerText = a["1"]; // map function use nhi kiya kyuki data object se liya isliye
  // map array ke liye use hota hai.

  var li1 = document.createElement("li");
  li1.innerText = a["2"];

  var li2 = document.createElement("li");
  li2.innerText = a["3"];

  var li3 = document.createElement("li");
  li3.innerText = a["4"];

  tr.append(li, li1, li2, li3);
  document.querySelector("#data").append(tr);
}

function hoisting() {
  document.querySelector("#data").innerHTML = ""; //  empty
  var b = JSON.parse(localStorage.getItem("hoisting"));

  var tr = document.createElement("ul");

  var li = document.createElement("li");
  li.innerText = b["1"]; // we didnot use map function because map is array function and here we take our data from object

  var li1 = document.createElement("li");
  li1.innerText = b["2"];

  var li2 = document.createElement("li");
  li2.innerText = b["3"];

  tr.append(li, li1, li2);
  document.querySelector("#data").append(tr);
}

function construct() {
  document.querySelector("#data").innerHTML = ""; // empty
  var c = JSON.parse(localStorage.getItem("constructorFunctions"));

  var tr = document.createElement("ul");

  var li = document.createElement("li");
  li.innerText = c["1"]; // we didnot use map function because map is array function and here we take our data from object

  var li1 = document.createElement("li");
  li1.innerText = c["2"];

  var li2 = document.createElement("li");
  li2.innerText = c["3"];

  // var li3 = document.createElement("li");
  //li3.innerText = a["4"];

  tr.append(li, li1, li2);
  document.querySelector("#data").append(tr);
}

function Prototype() {
  document.querySelector("#data").innerHTML = ""; // yaha empty kr rhe.
  var d = JSON.parse(localStorage.getItem("prototype"));

  var tr = document.createElement("ul");

  var li = document.createElement("li");
  li.innerText = d["1"]; // we didnot use map function because map is array function and here we take our data from object

  var li1 = document.createElement("li");
  li1.innerText = d["2"];

  var li2 = document.createElement("li");
  li2.innerText = d["3"];

  // var li3 = document.createElement("li");
  //li3.innerText = a["4"];

  tr.append(li, li1, li2);
  document.querySelector("#data").append(tr);
}

var scope = {
  1: "Global scope: Variables declared Globally (outside of function) have Global Scope and Global variables can be accessed from anywhere in a program. Similar to function scope variables declared with var, let and const are quite similar when declared outside a block.",
  2: "Local scope: Variables declared Locally (inside of function) we can acces local scope only inside function.",
  3: "Function scope: JavaScript has a function scope and each function creates a new scope. Variables defined inside a function are not accessible from outside the function and variables declared with var, let and const are quite similar when declared inside a function.",
  4: "Function scope: JavaScript has a function scope and each function creates a new scope. Variables defined inside a function are not accessible from outside the function and variables declared with var, let and const are quite similar when declared inside a function.",
};

localStorage.setItem("scope", JSON.stringify(scope));

var Hoisting = {
  1: "In JavaScript, a variable can be declared after it has been used.",
  2: "Hoisting is JavaScript's default behavior of finding variables and function declarations before actually executing the program",
  3: "It doesn't care about variable values.",
  4: "All it wants to know what variables are present in a program.",
};

localStorage.setItem("hoisting", JSON.stringify(Hoisting));

var ConstructorFunctions = {
  1: "The way to create an object type, is to use an object constructor function.",
  2: "we can create object using new keyword.",
  3: "The way to create an object type, is to use an object constructor function.",
};

localStorage.setItem(
  "constructorFunctions",
  JSON.stringify(ConstructorFunctions)
);

var Prototype = {
  1: "Prototypes are the mechanism by which JavaScript objects inherit features from one another. In this",
  2: "Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.",
  3: "Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.",
  4: "Prototypes are the mechanism by which JavaScript objects inherit features from one another. In this",
};

localStorage.setItem("prototype", JSON.stringify(Prototype));
