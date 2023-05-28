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
  let cardContainer = document.getElementById('card-container');
  let card = document.createElement('div');
  card.classList.add('card');

  let image = document.createElement('img');
  image.src = this.imageUrl;
  image.alt = this.fullName;

  let infoContainer = document.createElement('div');
  infoContainer.classList.add('info-container');

  let id = document.createElement('p');
  id.textContent = `Employee ID: ${this.employeeID}`;

  let name = document.createElement('p');
  name.textContent = `Name: ${this.fullName}`;

  let department = document.createElement('p');
  department.textContent = `Department: ${this.department}`;

  let level = document.createElement('p');
  level.textContent = `Level: ${this.level}`;

  let salary = document.createElement('p');
  salary.textContent = `Salary: ${this.salary}`;

  infoContainer.appendChild(id);
  infoContainer.appendChild(name);
  infoContainer.appendChild(department);
  infoContainer.appendChild(level);
  infoContainer.appendChild(salary);

  card.appendChild(image);
  card.appendChild(infoContainer);

  cardContainer.appendChild(card);
};

// Create employee instances
let ghazi = new Employee(null, 'Ghazi Samer', 'Administration', 'Senior', 'assets/Ghazi.jpg');
let lana = new Employee(null, 'Lana Ali', 'Finance', 'Senior', 'assets/Lana.jpg');
let tamara = new Employee(null, 'Tamara Ayoub', 'Administration', 'Senior', 'assets/Tamara.jpg');
let safi = new Employee(null, 'Safi Walid', 'Development', 'Mid-Senior', 'assets/Safi.jpg');
let rana = new Employee(null, 'Rana Saleh', 'Development', 'Junior', 'assets/Rana.jpg');
let hadi = new Employee(null, 'Hadi Ahmad', 'Finance', 'Mid-Senior', 'assets/Hadi.jpg');
let omar = new Employee(null, 'Omar Khalil', 'Development', 'Mid-Senior', 'assets/Omar.jpg');

// Generate unique four digits employee IDs
ghazi.employeeID = ghazi.generateEmployeeID();
lana.employeeID = lana.generateEmployeeID();
tamara.employeeID = tamara.generateEmployeeID();
safi.employeeID = safi.generateEmployeeID();
rana.employeeID = rana.generateEmployeeID();
hadi.employeeID = hadi.generateEmployeeID();
omar.employeeID = omar.generateEmployeeID();

// Render employee information
ghazi.render();
lana.render();
tamara.render();
safi.render();
rana.render();
hadi.render();
omar.render();
