#!/usr/bin/env node

// Node.js CLI Calculator
// Supported operations:
// - add : addition (a + b)
// - sub : subtraction (a - b)
// - mul : multiplication (a * b)
// - div : division (a / b)

function printHelp() {
  console.log(`Usage: node src/calculator.js <operation> <num1> <num2>

Operations:
  add    Add num1 and num2
  sub    Subtract num2 from num1
  mul    Multiply num1 by num2
  div    Divide num1 by num2

Examples:
  node src/calculator.js add 2 3   # -> 5
  node src/calculator.js sub 5 2   # -> 3
  node src/calculator.js mul 4 6   # -> 24
  node src/calculator.js div 8 2   # -> 4
`);
}

function isNumeric(n) {
  return !isNaN(n) && isFinite(n);
}

// Pure calculator functions exported for unit testing
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

function main(argv) {
  const args = argv.slice(2);

  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    printHelp();
    return;
  }

  if (args.length !== 3) {
    console.error('Error: Expected exactly 3 arguments: <operation> <num1> <num2>');
    printHelp();
    process.exit(1);
  }

  const [op, aRaw, bRaw] = args;
  const a = parseFloat(aRaw);
  const b = parseFloat(bRaw);

  if (!isNumeric(a) || !isNumeric(b)) {
    console.error('Error: Both operands must be valid numbers.');
    process.exit(1);
  }

  let result;
  try {
    switch (op) {
      case 'add':
        // addition
        result = add(a, b);
        break;
      case 'sub':
        // subtraction
        result = sub(a, b);
        break;
      case 'mul':
        // multiplication
        result = mul(a, b);
        break;
      case 'div':
        // division
        result = div(a, b);
        break;
      default:
        console.error(`Error: Unknown operation '${op}'.`);
        printHelp();
        process.exit(1);
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }

  // Print result to stdout
  console.log(result);
}

module.exports = { add, sub, mul, div, isNumeric };

if (require.main === module) {
  main(process.argv);
}
