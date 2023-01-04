// // 3. Create a function that takes 2 parameter => an array of employees and an attribute and returns all employees sorted based on the empolees attribute being passed as second parameter.
const printSort = (employees, order) => {
  let fName;
  let sName;
  let sortingEmployee = employees.sort((x, y) => {
    fName = x.name;
    sName = y.name;
    let comparison = 0;
    if (fName > sName) {
      comparison = 1;
    } else if (fName < sName) {
      comparison = -1;
    }
    return ((order === 'asc') ? comparison : (comparison * -1));
  });
  console.log(sortingEmployee);
};
const employees=[{name: "Ram", email: "ram@gmail.com", phoneNo: 9876543211, salary: 20000, address: "Indore(M.P.)"},
{name: "Sita",  email: "sita@gmail.com",  phoneNo: 8669841233, salary: 25000, address: "Bhopal(M.P.)"},
{name: "Mohan", email: "mohan@gmail.com", phoneNo: 1587954133, salary: 40000, address: "Dhar(M.P.)"},
{name: "Rohan", email: "rohan@gmail.com", phoneNo: 1236547896, salary: 30000, address: "Ujjain(M.P.)"},
{name: "Shyam", email: "shyam@gmail.com", phoneNo: 4698514653, salary: 35000, address: "Indore(M.P.)"}];
printSort(employees, "asc");