// 2. Напиши клас User для створення користувача з наступними властивостями: name — рядок, age — число, followers — число. Добав метод getInfo(), який, виводить рядок: User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers
class User {
  constructor({ name = "", age = 0, followers = 0 }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    );
  }
}

const skebob = new User({
  name: "skebob",
  age: 16,
  followers: 3972,
});
skebob.getInfo();
