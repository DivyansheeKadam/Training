// // 3. Create a function that takes 2 parameter => an array of employees and an attribute and returns all employees sorted based on the empolees attribute being passed as second parameter.
const printSort = (employees, attribute) => {
   const innerSort = (objA, objB) => {
    if (objA[attribute] < objB[attribute]) {
      return -1 ;
    }
      if (objA[attribute] > objB[attribute]) {
      return 1;
    }
      return 0;
  }
  console.log(employees.sort(innerSort));
  }
const employees=[{name: "Ram", email: "ram@gmail.com", phoneNo: 9876543211, salary: 40000, address: "Indore(M.P.)"},
{name: "Sita",  email: "sita@gmail.com",  phoneNo: 8669841233, salary: 30000, address: "Bhopal(M.P.)"},
{name: "Rohan", email: "rohan@gmail.com", phoneNo: 1236547896, salary: 25000, address: "Ujjain(M.P.)"},
{name: "Mohan", email: "mohan@gmail.com", phoneNo: 4698514653, salary: 35000, address: "Indore(M.P.)"}];
printSort(employees, 'salary');
