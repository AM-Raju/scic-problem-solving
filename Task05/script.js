const calculator = (num1, num2, operator) => {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  }
};

const num1 = 5;
const num2 = 3;
const operator = "-";

const result = calculator(num1, num2, operator);

console.log(result.toFixed(2));
