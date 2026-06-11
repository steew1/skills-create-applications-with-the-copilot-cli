#!/usr/bin/env node

// Node.js CLI Calculator
// Supported operations:
// - add : addition (a + b)
// - sub : subtraction (a - b)
// - mul : multiplication (a * b)
// - div : division (a / b)
// - mod : modulo (a % b)
// - pow : exponentiation (base ** exponent)
// - sqrt: square root (unary)

function printHelp() {
  console.log(`Usage:
  node src/calculator.js <operation> <num1> <num2>
  node src/calculator.js sqrt <num>

Operations:
  add    Add num1 and num2
  sub    Subtract num2 from num1
  mul    Multiply num1 by num2
  div    Divide num1 by num2
  mod    Remainder of num1 / num2
  pow    base raised to exponent
  sqrt   Square root of num (unary)

Examples:
  node src/calculator.js add 2 3   # -> 5
  node src/calculator.js sub 5 2   # -> 3
  node src/calculator.js mul 4 6   # -> 24
  node src/calculator.js div 8 2   # -> 4
  node src/calculator.js mod 10 3  # -> 1
  node src/calculator.js pow 2 8   # -> 256
  node src/calculator.js sqrt 9    # -> 3
`);
}

function isNumeric(n) {
  return typeof n === 'number' && !isNaN(n) && isFinite(n);
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

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of negative number');
  }
  return Math.sqrt(n);
}

function main(argv) {
  const args = argv.slice(2);

  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    printHelp();
    return;
  }

  const op = args[0];

  // Determine required argument count per operation
  const needsTwoArgs = ['add', 'sub', 'mul', 'div', 'mod', 'pow'];
  const needsOneArg = ['sqrt'];

  if (needsTwoArgs.includes(op) && args.length !== 3) {
    console.error('Error: Expected exactly 3 arguments: <operation> <num1> <num2>');
    printHelp();
    process.exit(1);
  }

  if (needsOneArg.includes(op) && args.length !== 2) {
    console.error('Error: Expected exactly 2 arguments for unary operations: <operation> <num>');
    printHelp();
    process.exit(1);
  }

  let a, b;
  if (args.length >= 2) a = parseFloat(args[1]);
  if (args.length >= 3) b = parseFloat(args[2]);

  if ((needsTwoArgs.includes(op) && (!isNumeric(a) || !isNumeric(b))) || (needsOneArg.includes(op) && !isNumeric(a))) {
    console.error('Error: Operands must be valid numbers.');
    process.exit(1);
  }

  let result;
  try {
    switch (op) {
      case 'add':
        result = add(a, b);
        break;
      case 'sub':
        result = sub(a, b);
        break;
      case 'mul':
        result = mul(a, b);
        break;
      case 'div':
        result = div(a, b);
        break;
      case 'mod':
        result = modulo(a, b);
        break;
      case 'pow':
        result = power(a, b);
        break;
      case 'sqrt':
        result = squareRoot(a);
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

module.exports = { add, sub, mul, div, modulo, power, squareRoot, isNumeric };

if (require.main === module) {
  main(process.argv);
}
