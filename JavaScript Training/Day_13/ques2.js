// - Create another promisified function that sorts this employee list from above response by name. Chain it to above promise"
const funOne = (empName) => {
   return new Promise ((resolve)=>{
            resolve(empName);
    });
};
const funTwo = (employees, empName) => {
    return new Promise ((resolve, reject) => {
        if(empName){
        const innerSort = (objA, objB)=>{
             if (objA[empName] < objB[empName]) {
               return -1
             };
               if (objA[empName] > objB[empName]) {
               return 1
             };
               return 0
           }
        resolve(employees.sort(innerSort));
        } else {
        reject("Error:- empName error")
        };
    });
};
const employees=[{name: "Ram", email: "ram@gmail.com", phoneNo: 9876543211, salary: 40000, address: "Indore(M.P.)"},
          {name: "Sita",  email: "sita@gmail.com",  phoneNo: 8669841233, salary: 30000, address: "Bhopal(M.P.)"},
          {name: "Rohan", email: "rohan@gmail.com", phoneNo: 1236547896, salary: 25000, address: "Ujjain(M.P.)"},
          {name: "Mohan", email: "mohan@gmail.com", phoneNo: 4698514653, salary: 35000, address: "Indore(M.P.)"}];

          funOne("name").then(result => { return funTwo(employees, result)})
                .then(result=> console.log(result))
                .catch(err => console.log(err));
