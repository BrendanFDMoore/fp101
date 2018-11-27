const addTwoArgs = (x, y) => x + y;
addTwoArgs(1, 2) // === 3;

const addThreeTo = x => addTwoArgs(x, 3)
const addFourTo = x => addTwoArgs(4, x)

addThreeTo(3) // === 6;
addFourTo(3) // === 7;
