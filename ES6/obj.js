function Person(name) {
  this.name = name;
}

Person.prototype.setAge = function (age) {
  this.age = age;
};

Person.prototype.getAge = function () {
  return this.age;
};

const john = new Person('John');
john.setAge(25);
console.log(john.getAge()); 
