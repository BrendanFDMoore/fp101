const f = x => x + 1

const g = x => f(2) + h(x)

// g could be re-written as
const g = x => 3 + h(x)
