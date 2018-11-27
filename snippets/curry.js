const addTwoArgs = (x, y) => x + y;
addTwoArgs(1, 2) === 3;

const addTwoArgsCurried = x => y => x + y;

const addThreeTo = addTwoArgsCurried(3);
const addFourTo = addTwoArgsCurried(4);

addThreeTo(3) // === 6;
addFourTo(3) // === 7;
