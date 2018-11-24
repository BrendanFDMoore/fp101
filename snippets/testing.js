const add = x => y => x + y;
const subtractOne = x => x - 1;

describe('add', () => {
  it('should add two values', () => {
    expect(add(1)(2)).toEqual(3);

    const addFour = add(4);

    expect(addFour(2)).toEqual(6);
    ...
  });
});

describe('subtractOne', () => {
  it('should subtract one from a value', () => {
    expect(subtractOne(2)).toEqual(1);
    expect(subtractOne(1)).toEqual(0);
    expect(subtractOne(0)).toEqual(-1);
    ...
  });
});

const someComplexComposition = pipe(
  add(4),
  subtract(6),
);
