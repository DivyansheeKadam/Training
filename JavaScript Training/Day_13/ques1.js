// " - Create a function that returns array of employees from a random time from 1 to 2 seconds using promise chaining.
const example = (employees) => {
    for (let i in employees){
    let empFirst = new Promise((resolve, reject)=>{
        setTimeout(()=>{
           if (employees[0]) {
            resolve(employees[0]);
        } else {
            reject("its not have employee data");
        };
        },1000);
    });
    let empSecond = new Promise((resolve, reject)=>{
        setTimeout(()=>{
           if (employees[1]) {
            resolve(employees[1]);
        } else {
            reject("its not have employee data");
        }
},2000)
    });
    let empThird = new Promise((resolve, reject)=>{
        setTimeout(()=>{
           if (employees[2]) {
            resolve(employees[2]);
        } else {
            reject("its not have employee data");
        }
        
},3000)
    });
    let empFourth = new Promise((resolve, reject)=>{
        setTimeout(()=>{
           if (employees[3]) {
            resolve(employees[3]);
        } else {
            reject("its not have employee data");
        }
        
},4000)
    });
     empFirst
            .then(result => {console.log(result)
            return empSecond})
            .then(result => {console.log(result)
                return empThird})
            .then(result => {console.log(result)
                return empFourth})
                .then(result => console.log(result))
     .catch(err=>console.log(err))
    break;
    };
};
const employees = [{name: "Ram", email: "ram@gmail.com", phoneNo: 9876543211, salary: 40000, address: "Indore(M.P.)"},
{name: "Sita",  email: "sita@gmail.com",  phoneNo: 8669841233, salary: 30000, address: "Bhopal(M.P.)"},
{name: "Rohan", email: "rohan@gmail.com", phoneNo: 1236547896, salary: 25000, address: "Ujjain(M.P.)"},
{name: "Mohan", email: "mohan@gmail.com", phoneNo: 4698514653, salary: 35000, address: "Indore(M.P.)"}];

example(employees)
