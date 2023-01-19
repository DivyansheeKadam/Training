// " - Create a function that returns array of employees from a random time from 1 to 2 seconds using promise chaining.
const example = (employees) => {
    new Promise(function(resolve, reject) {
        let time = (Math.random()*2)+1000
        setTimeout(() => {
        if(employees){
            resolve(employees[0]);
        } else {
            reject("Data Error");
        }}, time);
      
      }).then((result) => {
            console.log(result);  
            return employees[1];
      }).then((result) => { 
            console.log(result); 
            return employees[2];
      }).then(function(result) {
            console.log(result);
            return employees[3];
      }).catch((err)=>{
            console.log(err);
      });
    
};
const employees = [{name: "Ram", email: "ram@gmail.com", phoneNo: 9876543211, salary: 40000, address: "Indore(M.P.)"},
{name: "Sita",  email: "sita@gmail.com",  phoneNo: 8669841233, salary: 30000, address: "Bhopal(M.P.)"},
{name: "Rohan", email: "rohan@gmail.com", phoneNo: 1236547896, salary: 25000, address: "Ujjain(M.P.)"},
{name: "Mohan", email: "mohan@gmail.com", phoneNo: 4698514653, salary: 35000, address: "Indore(M.P.)"}];

example(employees);
