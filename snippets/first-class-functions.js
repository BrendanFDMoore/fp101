const f = x => x + 1;
const g = x => x * 2;
const increment = f;
const double = g;

const operations = {
  increment,
  double,
  square: x => x * x,
}

const doSomeMath = (operation1, operation2) => operand =>
  operation2(operation1(operand))

const doubleTheSquareOf =
  doSomeMath(operations.square, operations.double)
const squareAfterIncrementing =
  doSomeMath(operations.increment, operations.square)

doubleTheSquareOf(7)
// ?
squareAfterIncrementing(5) 
// ?
