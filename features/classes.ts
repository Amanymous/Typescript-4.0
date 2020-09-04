// class Vehicle {
//   drive(): void {
//     console.log('yoho');
//   }
//   honk(): void {
//     console.log('honk');
//   }
// }

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

class Vehicle {
  drive(): void {
    console.log('yoho');
  }
  honk(): void {
    console.log('honk');
  }
}

class Cars extends Vehicle {
  drive(): void {
    console.log('cars');
  }
}

const carss = new Cars();
carss.drive();
carss.honk();
