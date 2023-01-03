// "1. Create a function that takes a number and prints all even numbers upto that number
  const printEven=(num)=>{
    for (let i=1; i<=num; i++) {
      if(i % 2 === 0) {
        console.log(i);
      }
    }
  }
 printEven(10)
// 2. Create a function that takes 2 parameter => an array of employees and age and returns all employees whose age is less than input age.
const printAge=(emp,n)=>{
    const employeeAge=emp.filter((employee)=> employee.age<n)
    console.log(employeeAge);
}
const employee=[{ name:"Ram", age:25},{ name:"Sita", age:24},{ name:"Mohan", age:52},{ name:"Rohan", age:55},{ name:"Shyam", age:40}];
printAge(employee,50)
    

// 3. Create a function that takes 2 parameter => an array of employees and an attribute and returns all employees sorted based on the empolees attribute being passed as second parameter.
// "
const printSort=(employees, name)=>{
    let a,b;
    employees.sort(function (x, y) {
         a = x.attribute;
         b = y.attribute;
        return a == b ? 0 : a > b ? 1 : -1;
    });
    console.log(employees);
}
const employees=[{ name:"Ram", Email:"ram@gmail.com", PhoneNo:9876543211, Address:"Indore(M.P.)"},
{ name:"Sita", Email:"sita@gmail.com", PhoneNo:8669841233, Address:"Bhopal(M.P.)"},
{ name:"Mohan", Email:"mohan@gmail.com", PhoneNo:1587954133, Address:"Dhar(M.P.)"},
{ name:"Rohan", Email:"rohan@gmail.com", PhoneNo:1236547896, Address:"Ujjain(M.P.)"},
{ name:"Shyam", Email:"shyam@gmail.com", PhoneNo:4698514653, Address:"Indore(M.P.)"}];

printSort(employees, "name");
