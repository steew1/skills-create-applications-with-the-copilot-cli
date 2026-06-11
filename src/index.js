#!/usr/bin/env node
// Node.js CLI Calculator
// Supported operations: addition (+), subtraction (-), multiplication (*), division (/)
// Based only on the four basic math operations shown in images/js-calculator.png
// This CLI delegates core math to src/calc.js

const { add, subtract, multiply, divide } = require('./calc');

const args = process.argv.slice(2);
if (args.length !== 3) {
  console.error('Usage: calc <number1> <operator> <number2>');
  console.error('Example: calc 3 + 4');
  process.exit(2);
}

const [aStr, op, bStr] = args;
const a = Number(aStr);
const b = Number(bStr);
if (Number.isNaN(a) || Number.isNaN(b)) {
  console.error('Both operands must be valid numbers');
  process.exit(2);
}

let result;
try {
  switch (op) {
    case '+':
    case 'add':
      result = add(a, b);
      break;
    case '-':
    case 'sub':
    case 'subtract':
      result = subtract(a, b);
      break;
    case '*':
    case 'x':
    case 'X':
    case 'mul':
      result = multiply(a, b);
      break;
    case '/':
    case 'div':
      result = divide(a, b);
      break;
    default:
      console.error('Unsupported operator. Supported operators: +  -  *  /');
      process.exit(2);
  }
} catch (err) {
  console.error('Error:', err.message);
  process.exit(2);
}

if (Number.isFinite(result)) {
  console.log(result);
} else {
  console.error('Computation produced a non-finite result');
  process.exit(2);
}
