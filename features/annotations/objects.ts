const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

type NewType = string;

// console.log('profile', profile);

const { age }: { age: number; name: NewType } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

console.log(age, name);
