const sumTwoArgs = (x, y) => x + y;
sumTwoArgs(1, 2) === 3;

const sumTwoArgsCurried = x => y => x + y;

const addThreeTo = sumTwoArgsCurried(3);
const addFourTo = sumTwoArgsCurried(4);

addThreeTo(3) // === 6;
addFourTo(3) // === 7;
