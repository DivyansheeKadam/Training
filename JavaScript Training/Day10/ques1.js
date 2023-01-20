//"- Add a js class called Employee and create methods in it to sort employees by different paramters and to filter by age.
class Example {
    constructor(employee){
        this.employee = employee;
        };
    emp(arg){
         this.employee.sort((a, b) => {
            if (a[arg] < b[arg]) return -1;
            if (a[arg] > b[arg]) return 1;
            return 0;
         });
            console.log(this.employee);
         };
        
    sum(age){
        this.employee.sort((a, b) => {
            if (a[age] < b[age]) return -1;
            if (a[age] > b[age]) return 1;
            return 0;
        });
        console.log(this.employee);
        };
    };
const employee=[{name: "Ram", age: 25},
{name: "Sita", age: 24},
{name: "Mohan", age: 52},
{name: "Rohan", age: 55},
{name: "Shyam", age: 40}];
let a = new Example(employee);
a.emp("name")
a.sum("age");
