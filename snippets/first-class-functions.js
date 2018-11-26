const f = x => x + 1;
const g = x => x * 2;
const increment = f;
const double = g;

const operations = {
  increment,
  double,
  square: x => x * x,
}

const incrementAfterOperation = operation => operand =>
  operation(operand) + 1

const doubleThenIncrement = incrementAfterOperation(double)
const squareThenIncrement = incrementAfterOperation(operations.square)

doubleThenIncrement(7) // === ?
squareThenIncrement(5) // === ?
