//"- Add a js class called Employee and create methods in it to sort employees by different paramters and to filter by age.
class example {
    constructor(employee){
        this.employee=employee;
            };
    sum(){
        this.employee.sort((x, y)=> 
          (x.age > y.age) ? 1 : (x.age < y.age) ? -1 : 0);
        console.log(this.employee);
        };
    };
const employee=[{name: "Ram", age: 25},
{name: "Sita", age: 24},
{name: "Mohan", age: 52},
{name: "Rohan", age: 55},
{name: "Shyam", age: 40}];
let a = new example(employee);
a.sum();