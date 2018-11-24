const sumTwoArgs = (x, y) => x + y;

const sumTwoArgsCurried = x => y => x + y;

sumTwoArgs(3, 3) === 6;

const addThreeTo = sumTwoArgsCurried(3);
const addFourTo = sumTwoArgsCurried(4);

addThreeTo(3) === 6;
addFourTo(3) === 7;

