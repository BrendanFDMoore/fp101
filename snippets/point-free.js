const addTwoArgs = (x, y) => x + y;
const addTwoArgsCurried = x => y => x + y;

const addThreeTo = addTwoArgsCurried(3);
const addThreeToAlso = x => addTwoArgs(x, 3);
