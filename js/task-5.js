// 5. Напиши клас Car із зазначеними властивостями і методами.

class Car {
  static getSpecs(car) {
    console.log(
      "Max speed:",
      car.maxSpeed,
      "Speed:",
      car.speed,
      "Is on:",
      car.isOn,
      "Distance:",
      car.distance,
      "Price:",
      car.price
    );
  }

  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    const aproxSpeed = this.speed + value;
    if (aproxSpeed <= this.maxSpeed) {
      this.speed = aproxSpeed;
    }
  }

  decelerate(value) {
    const aproxSpeed = this.speed - value;
    if (aproxSpeed >= 0) {
      this.speed = aproxSpeed;
    }
  }

  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
