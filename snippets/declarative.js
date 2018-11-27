const friends = ["Ed", "Caroline", "Carlos", "Harrison", "Petra"];

const sayHiImperatively = [];

for (let i = 0; i < friends.length; i++) {
  sayHiImperatively.push(`Hi ${friends[i]}`);
}

const sayHiDeclaratively = friends.map(name => `Hi ${name}`);
