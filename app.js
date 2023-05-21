'use strict'

let Ghazi = {
    EmployeeID : "1000" , 
    fullName : "Ghazi Samer",
    department: "Administration",
    level: "Senior",
    imageUrl: "https://thumbs.dreamstime.com/z/cute-boy-face-cartoon-cute-boy-face-cartoon-vector-illustration-graphic-design-110654702.jpg",
    salary: calculateSalary("Senior") ,

    generatenewEmployeeId : function () {
        return Math.floor(Math.random() * (max - min) + min);

    }
}
let Lana = {
    EmployeeID : "1001",
    fullName : "Lana Ali",
    department: "Finance",
    level: "Senior",
    imageUrl: "https://previews.123rf.com/images/jemastock/jemastock1801/jemastock180107319/94223705-cute-boy-face-cartoon-icon-vector-illustration-graphic-design.jpg",
    salary: calculateSalary("Senior"),

    generatenewEmployeeId : function () {
        return Math.floor(Math.random() * (max - min) + min);

    }

}

let Tamara = {
    employeeId : "1002" , 
    fullName: "Tamara Ayoub",
      department: "Marketing",
      level: "Senior",
      imageUrl: "https://www.shutterstock.com/image-vector/illustration-face-boy-on-white-260nw-123780619.jpg",
      salary: calculateSalary("Senior") ,

      generatenewEmployeeId : function () {
        return Math.floor(Math.random() * (max - min) + min);

    }
}

let Safi = {
    employeeId : "1003" , 
    fullName: "Safi Walid",
    department: "Administration",
    level: "Mid-Senior",
    imageUrl: "hhttps://previews.123rf.com/images/vectorshots/vectorshots1309/vectorshots130901404/22318678-cute-boy-cartoon-face-vector.jpg",
    salary: calculateSalary("Mid-Senior") , 

    generatenewEmployeeId : function () {
        return Math.floor(Math.random() * (max - min) + min);

    }
}

let Omar = {
    employeeId : "1004" ,
    fullName: "Omar Zaid",
    department: "Development",
    level: "Senior",
    imageUrl: "https://cdn.pixabay.com/photo/2017/08/08/12/56/face-2611347_1280.png",
    salary: calculateSalary("Senior") , 

    generatenewEmployeeId : function () {
        return Math.floor(Math.random() * (max - min) + min);

    }
}

let Rana = {
    employeeId : "1005" , 
    fullName: "Rana Saleh",
    department: "Development",
    level: "Junior",
    imageUrl: "https://e7.pngegg.com/pngimages/6/104/png-clipart-face-boy-smiley-cartoon-faces-s-child-face-thumbnail.png",
    salary: calculateSalary("Junior") ,

    generatenewEmployeeId : function () {
        return Math.floor(Math.random() * (max - min) + min);

    }
}

let Hadi = {
    employeeId : "1006" , 
    fullName: "Hadi Ahmad",
    department: "Finance",
    level: "Mid-Senior",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgiyxiB8HbFWU2XmAT-6ProtT6R1QRE7HZQg&usqp=CAU",
    salary: calculateSalary("Mid-Senior") ,

    generatenewEmployeeId : function () {
        return Math.floor(Math.random() * (max - min) + min);

    }
    
    
    
} 

// Generate a unique four digits employee ID
function generatenewEmployeeId(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  
  

//   Calculate the salary for the given employee level
function calculateSalary(level) {
    let minSalary, maxSalary;
  
    switch (level) {
      case "Senior":
        minSalary = 1500;
        maxSalary = 2000;
        break;
      case "Mid-Senior":
        minSalary = 1000;
        maxSalary = 1500;
        break;
      case "Junior":
        minSalary = 500;
        maxSalary = 1000;
        break;
      default:
        return 0;
    }
  
    const randomSalary = Math.floor(minSalary + Math.random() * (maxSalary - minSalary + 1));
    const netSalary = randomSalary - (randomSalary * 7.5) / 100;
  
    return netSalary; }

    function renderEmployeeList() {
        const employeeListDiv = document.getElementById("employeeList");
      
        // Create a template string for each employee
        const template = `
          <div>
            <h2>Employee name: ${Ghazi.fullName}</h2>
            <p>Employee salary: ${Ghazi.salary}</p>
          </div>
          <div>
            <h2>Employee name: ${Lana.fullName}</h2>
            <p>Employee salary: ${Lana.salary}</p>
          </div>
          <div>
            <h2>Employee name: ${Tamara.fullName}</h2>
            <p>Employee salary: ${Tamara.salary}</p>
          </div>
          <div>
            <h2>Employee name: ${Safi.fullName}</h2>
            <p>Employee salary: ${Safi.salary}</p>
          </div>
          <div>
            <h2>Employee name: ${Omar.fullName}</h2>
            <p>Employee salary: ${Omar.salary}</p>
          </div>
          <div>
            <h2>Employee name: ${Rana.fullName}</h2>
            <p>Employee salary: ${Rana.salary}</p>
          </div>
          <div>
            <h2>Employee name: ${Hadi.fullName}</h2>
            <p>Employee salary: ${Hadi.salary}</p>
          </div>
        `;
      
        // Set the innerHTML of the employeeListDiv to the template
        employeeListDiv.innerHTML = template;
      }
      
      // Call the renderEmployeeList function to display the employee list
      renderEmployeeList();
   

  