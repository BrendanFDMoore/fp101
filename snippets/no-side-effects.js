const pureFunction = x => x + 1;

pureFunction(1) === 2;

let y = 0;
const impureFunction = x => {
  y = x + 1;
  return y;
};

impureFunction(1) === 2
// y === 2

impureFunction(2) === 3;
// y === 3
