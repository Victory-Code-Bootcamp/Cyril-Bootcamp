const DonisKia = {
  model: "Kia",
  model: "Sorento",
  year: "2025",
  color: "black",
};

console.log(DonisKia.year);

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  area() {
    return this.length * this.width;
  }
}
const myRectangle = new Rectangle(5, 7);
console.log("The area of the rectangle ", myRectangle.area());

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  getSalary() {
    return this.salary;
  }
}
class Manager extends Employee {
  constructor(name, salary, bonus) {
    super(name, salary);
    this.bonus = bonus;
  }
  getSalary() {
    return super.getSalary() + this.bonus;
  }
}
const managerCyril = new Manager("Cyril", 100000, 50000);
console.log("Our managers total salary " + managerCyril.getSalary);
