function pipe() {
  return Array.from(arguments)
    .reduce(
      (a, b) => arg => b(a(arg))
    )
};

const add = y => x => x + y;
const subtract = y => x => x - y;
const multiplyBy = y => x => x * y;

pipe(
  subtract(2), // 4
  add(3), // 7
  multiplyBy(4) // 28
)(6) === 28;
