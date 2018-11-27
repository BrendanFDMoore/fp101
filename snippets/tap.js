const tap = label => value => {
  console.log(label, { value });
  return value;
}

pipe(
  subtract(2), // 4
  tap('after subtract'),
  add(3), // 7
  tap('after add'),
  multiplyBy(4) // 28
)(6) === 28;
