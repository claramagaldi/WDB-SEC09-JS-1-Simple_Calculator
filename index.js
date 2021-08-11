var num1 = prompt("num1");
var num2 = prompt("num2");
var operator = prompt("add, subtract, multiply or divide");

function add(num1, num2) {
  return eval(num1) + eval(num2);
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2)
}

if(operator === "add") {
  alert(calculator(num1, num2, add));
} else if(operator === "subtract") {
  alert(calculator(num1, num2, subtract));
}
else if(operator === "multiply") {
  alert(calculator(num1, num2, multiply));
}
else if(operator === "divide") {
  alert(calculator(num1, num2, divide));
}
else {
  alert("invalid input");
}
