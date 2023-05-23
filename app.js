'use strict';

function Employee(employeeID, fullName, department, level, imageUrl) {
  this.employeeID = employeeID;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageUrl = imageUrl;
  this.salary = this.calculateSalary();
}

Employee.prototype.generateEmployeeID = function () {
  return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
};
// Method to calculating the salary
Employee.prototype.calculateSalary = function () {
  let minSalary, maxSalary;

  switch (this.level) {
    case 'Senior':
      minSalary = 1500;
      maxSalary = 2000;
      break;
    case 'Mid-Senior':
      minSalary = 1000;
      maxSalary = 1500;
      break;
    case 'Junior':
      minSalary = 500;
      maxSalary = 1000;
      break;
    default:
      return 0;
  }

  const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
  const netSalary = randomSalary - (randomSalary * 7.5) / 100;

  return netSalary;
  
};


Employee.prototype.render = function () {
  document.write(`Employee name: ${this.fullName}<br>`);
  document.write(`Department: ${this.department}<br>`);
  document.write(`Employee salary: ${this.salary}<br><br>`);
};

// Create employee instances
let ghazi = new Employee(null, 'Ghazi Samer', 'Administration', 'Senior','https://example.com/ghazi.jpg');
let lana = new Employee(null, 'Lana Ali', 'Finance', 'Senior','https://example.com/lana.jpg');
let tamara = new Employee(null, 'Tamara Ayoub', 'Administration', 'Senior','https://example.com/safi.jpg');
let safi = new Employee(null, 'Safi Walid', 'Development', 'Mid-Senior', 'https://example.com/omar.jpg');
let rana = new Employee(null, 'Rana Saleh', 'Development', 'Junior', 'https://example.com/rana.jpg');
let hadi = new Employee(null, 'Hadi Ahmad', 'Finance', 'Mid-Senior','https://example.com/hadi.jpg');

//  Method to Generate a unique four digits employee ID
ghazi.employeeID = ghazi.generateEmployeeID();
lana.employeeID = lana.generateEmployeeID();
tamara.employeeID = tamara.generateEmployeeID();
safi.employeeID = safi.generateEmployeeID();
rana.employeeID = rana.generateEmployeeID();
hadi.employeeID = hadi.generateEmployeeID();

// Render employee informations
ghazi.render();
lana.render();
tamara.render();
safi.render();
rana.render();
hadi.render();
