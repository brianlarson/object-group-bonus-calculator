// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus(employee) {

  // get bonus percentage for individual based on their employee rating
  let bonusPercentage;
  let rating = employee.reviewRating;
  if (rating < 2) {
    bonusPercentage = 0;
  } else if (rating === 3) {
    bonusPercentage = 4;
  } else if (rating === 4) {
    bonusPercentage = 6;
  } else if (rating === 5) {
    bonusPercentage = 10;
  }

  // calculate total compensation for non-senior individual
  let annualSalary = Number(employee.annualSalary);
  let totalBonus = annualSalary * bonusPercentage / 100;
  let totalCompensation = annualSalary + totalBonus;

  // get whether employee is a senior based on their employee number
  let isSeniorEmployee = employee.employeeNumber.length === 4 ? true : false;

  // add the additional 5% for senior employees
  // …

  let updatedEmployee = {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus,
  };

  console.log(`employee:`, employee);
  console.log(`new employee:`, updatedEmployee);

  // return new object with bonus results

}

calculateIndividualEmployeeBonus(employees[0]);