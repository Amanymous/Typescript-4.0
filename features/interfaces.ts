// const oldCivic = {
//   name: 'civic',
//   year: 2000,
//   broken: true,
// };

// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(
//     `Name:${vehicle.name},Year:${vehicle.year},Broken:${vehicle.broken}`
//   );
// };

// printVehicle(oldCivic);

// console.log(printVehicle);

// interface Vehicle {
//   name: string;
//   year: Date;
//   broken: boolean;
//   summary(): string;
// }
// const oldCivic = {
//   name: 'civic',
//   year: new Date(),
//   broken: true,
//   summary(): string {
//     return `Name: ${this.name}`;
//   },
// };

// const printVehicle = (vehicle: Vehicle): void => {
//   console.log(
//     `Name:${vehicle.name},Year:${vehicle.year},Broken:${vehicle.broken}`
//   );
//   console.log('summary', vehicle.summary());
// };

// printVehicle(oldCivic);

// console.log(printVehicle);

// -----------------------------------------
interface Reportable {
  summary(): string;
}
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drinks = {
  color: 'brown',
  carbnonated: true,
  sugar: 20,
  summary(): string {
    return `Name: ${this.name} and sugar is:${this.sugar}
    Name:${this.name},Year:${this.year},Broken:${this.broken}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log('summary', item.summary());
};

printSummary(oldCivic);
printSummary(drinks);
console.log(printSummary);
