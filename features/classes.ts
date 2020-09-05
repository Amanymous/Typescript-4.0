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
// ----------------------------------------

// class Vehicle {
// protected drive(): void {
//   console.log('yoho');
// }
//   color: string = 'red';

//   protected honk(): void {
//     console.log('honk');
//   }
// }

// const vehicle = new Vehicle();
// console.log(vehicle.color);

// class Cars extends Vehicle {
//   private drive(): void {
//     console.log('cars');
//   }

//   startDrivingProcess(): void {
//     this.drive();
//     this.honk();
//   }
// }

// const carss = new Cars();
// carss.startDrivingProcess();
// // carss.honk();
// ---------------------------------

// class Vehicle {
//   color: string;
//   protected drive(): void {
//     console.log('yoho');
//   }
//   constructor(color: string) {
//     this.color = color;
//   }

//   protected honk(): void {
//     console.log('honk');
//   }
// }

// const vehicle = new Vehicle('orange');
// console.log(vehicle.color);

// -----------------------------------
class Vehicle {
  protected drive(): void {
    console.log('yoho');
  }
  constructor(public color: string) {
    this.color = color;
  }
  // only public able to run on it not private and protected
  protected honk(): void {
    console.log('honk');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
