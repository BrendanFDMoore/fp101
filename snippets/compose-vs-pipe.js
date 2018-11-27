const compose(f, g) = x => f(g(x))
const pipe(f, g) = x => g(f(x))
compose(f, g) == pipe(g, f)
