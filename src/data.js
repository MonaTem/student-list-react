import Chance from 'chance';
const chance = new Chance();

let counter = 51,
    result = [];

while (counter > 0) {
  result.push({
    name: chance.name(),
    field: chance.profession(),
    avatar: chance.avatar({protocol: 'https'})
  });
  counter--;
}

export default result;