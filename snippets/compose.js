const increment = x => x +1
const double = x => x * 2;
const square = x => x * x

const squareAndDouble = x => double(square(x))

const compose = (f, g) => x => f(g(x))

const doubleTheSquareOf = compose(double, square)
const squareAfterIncrementing = compose(square, increment)

doubleTheSquareOf(7) // === ?
squareAfterIncrementing(5) // === ?
