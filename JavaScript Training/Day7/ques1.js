//1. Take an array of objects of employees created above and print those employees whose age is less than 50.
const employee = [{ name: "Ram", age: 25},
{name: "Sita", age: 24},
{name: "Mohan", age: 52},
{name: "Rohan", age: 55},
{name: "Shyam", age: 40}];
    const emp = employee.filter(ag => ag.age < 50 );
    console.log(emp);