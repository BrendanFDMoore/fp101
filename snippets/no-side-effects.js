const pureFunction = x => x + 1;

pureFunction(1) === 2;

let y = 1;
const impureFunction = x = x + y;

impureFunction(1) === 2

y = 2;

impureFunction(1) === 3;
