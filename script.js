// 1. Напиши функцію-конструктор Account, яка створює об'єкт з властивостями login і email. В prototype функції-конструктора добав метод getInfo(), який виводить в консоль значення полів login і email об'єкта який його викликав.
class Account {
    constructor({ login, email }) {
        this.login = login;
        this.email = email;
    }

    getInfo() {
        console.log(`Login: ${this.login}, Email: ${this.email}`)
    }
}

const mango = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
});

mango.getInfo();

const poly = new Account({
    login: 'Poly',
    email: 'poly@mail.com',
});

poly.getInfo();

// 2. Напиши клас User для створення користувача з наступними властивостями: name — рядок, age — число, followers — число. Добав метод getInfo(), який, виводить рядок: User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers
class User {
    constructor({name = '', age = 0, followers = 0}) {
        this.name = name;
        this.age = age;
        this.followers = followers;
    }

    getInfo() {
        console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`)
    }
}

const skebob = new User({
    name: 'skebob',
    age: 16,
    followers: 3972
})
skebob.getInfo()

// 3. Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. При виклику буде отримувати один аргумент - початковий масив товарів, і записувати його у властивість items.
class Storage {
    constructor(items) {
        this.items = items
    }

    getItems() {
        return this.items
    }

    addItem(item) {
        this.items.push(item)
    }

    removeItem(item) {
        this.items = this.items.filter(i => i !== item)
    }
}

const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
]);

const items = storage.getItems();
console.table(items);

storage.addItem('Дроїд');
console.table(storage.items);

storage.removeItem('Пролонгер');
console.table(storage.items);

// 4. Напиши клас StringBuilder. На вхід він отримує один параметр — рядок, який записує у властивість _value.
class StringBuilder {
    constructor(value) {
        this._value = value;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        this._value = newValue;
    }

    append(str) {
        this.value = this.value + str;
    }

    prepend(str) {
        this.value = str + this.value;
    }

    pad(str) {
        this.value = str + this.value + str;
    }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='

// 5. Напиши клас Car із зазначеними властивостями і методами.

class Car {
    static getSpecs(car) {
        console.log('Max speed:', car.maxSpeed, 'Speed:', car.speed, 'Is on:', car.isOn, 'Distance:', car.distance, 'Price:', car.price);
    }

    constructor({speed = 0, price, maxSpeed, isOn = false, distance = 0}) {
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