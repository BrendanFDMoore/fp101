const sumTwoArgs = (x, y) => x + y;
sumTwoArgs(1, 2) // === 3;

const addThreeTo = x => sumTwoArgs(x, 3)
const addFourTo = x => sumTwoArgs(4, x)

addThreeTo(3) // === 6;
addFourTo(3) // === 7;
