const add = (a: number, b: number) => {
  return a + b;
};
console.log(add);

const subtract = (a: number, b: number): number => {
  return a - b;
};
console.log(subtract);

function divide(a: number, b: number): number {
  return a / b;
}
console.log(divide);

const multiply = function (a: number, b: number): number {
  return a * b;
};
console.log(multiply);

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
  // return message;
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather1 = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
logWeather1(todaysWeather);

// Destructuring with annotation
const logWeather2 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
logWeather2(todaysWeather);

// ES2015
// const logWeathers = ({ date, weather }: { date: Date; weather: string }) => {
//   console.log(date);
//   console.log(weather);
// };

const logWeathers = ({ date, weather }) => {
  console.log(date);
  console.log(weather);
};
