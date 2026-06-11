#!/usr/bin/env node
// Node.js CLI Calculator
// Supported operations: addition (+), subtraction (-), multiplication (*), division (/)
// Based only on the four basic math operations shown in images/js-calculator.png
// Referenced issue: #2 Feature request: calculator CLI (calculator.js) - basic arithmetic operations

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
switch (op) {
  case '+':
  case 'add':
    // addition
    result = a + b;
    break;
  case '-':
  case 'sub':
  case 'subtract':
    // subtraction
    result = a - b;
    break;
  case '*':
  case 'x':
  case 'X':
  case 'mul':
    // multiplication
    result = a * b;
    break;
  case '/':
  case 'div':
    // division
    if (b === 0) {
      console.error('Error: division by zero');
      process.exit(2);
    }
    result = a / b;
    break;
  default:
    console.error('Unsupported operator. Supported operators: +  -  *  /');
    process.exit(2);
}

// Print result
if (Number.isFinite(result)) {
  console.log(result);
} else {
  console.error('Computation produced a non-finite result');
  process.exit(2);
}
