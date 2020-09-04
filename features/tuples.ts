const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 20,
};
// type alias
type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 20];
const marinda: Drink = ['orange', true, 20];
const greenTea: Drink = ['brown', true, 0];
// example
// pepsi[0] = 40;
// pepsi[2] = 'brown';
// pepsi[1] = true;

console.log(`pepsi:${pepsi},
marinda:${marinda},
greenTea:${greenTea}`);

const carSpecs: [number, number] = [400, 900];

const carStats = {
  horsepower: 400,
  weight: 900,
};

console.log(`carSpecs:${carSpecs},
carStats:${carStats.horsepower}`);
