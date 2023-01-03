// "1. Create a function that takes a number and prints all even numbers upto that number
  const printEven=(num)=>{
    for (let i=1; i<num; i++) {
      if(i % 2 === 0) {
        console.log(i);
      }
    }
  }
 printEven(10)
// 2. Create a function that takes 2 parameter => an array of employees and age and returns all employees whose age is less than input age.
const PrintAge=(emp,n)=>{
    const a=emp.filter((ag)=> ag.age<n)
    console.log(a);
}
const employee=[{ name:"Ram", age:25},{ name:"Sita", age:24},{ name:"Mohan", age:52},{ name:"Rohan", age:55},{ name:"Shyam", age:40}];
PrintAge(employee,50)
    

// 3. Create a function that takes 2 parameter => an array of employees and an attribute and returns all employees sorted based on the empolees attribute being passed as second parameter.
// "


const PrintSort=(employees)=>{
    employees.sort(function (x, y) {
        let a = x.attribute;
        let b = y.attribute;
        return a == b ? 0 : a > b ? 1 : -1;
    });
    console.log(employees);
}
const employees=[{ name:"Ram", attribute:"B"},{ name:"Sita", attribute:"A"},{ name:"Mohan", attribute:"C"},{ name:"Rohan", attribute:"E"},{ name:"Shyam", attribute:"D"}];
PrintSort(employees);


