const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// HELP WITH INFERENCE WHEN EXTRACTING VALUES
const car = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatible values
carMakers.push('100');

// help with map

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types

const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2020-10-10');
importantDates.push(new Date());
console.log(importantDates);
