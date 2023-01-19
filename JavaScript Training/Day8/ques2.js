// 2. Create a function that takes 2 parameter => an array of employees and age and returns all employees whose age is less than input age.
const printAge = (emp, age) => {
    const employeeAge = emp.filter((employee) => employee.age < age)
      console.log(employeeAge);
}
const employee=[{name: "Ram", age: 25},
{name: "Sita", age: 24},
{name: "Mohan", age: 52},
{name: "Rohan", age: 55},
{name: "Shyam", age: 40}];

printAge(employee, 50);
