//  //- Create a function that returns array of employees from a random time from 1 to 2 seconds using async await.
    function example (employees) {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
                if (employees) {
                        resolve(employees);
                } else {
                        reject("Data Error");
                }
        },(Math.random * 2) + 1000);
       }).then(result => console.log(result))
       .catch(err => console.log(err));
};
 async function exampleAsync () {
            await example(employees);
 };

 const employees = [{name: "Ram", email: "ram@gmail.com", phoneNo: 9876543211, salary: 40000, address: "Indore(M.P.)"},
{name: "Sita",  email: "sita@gmail.com",  phoneNo: 8669841233, salary: 30000, address: "Bhopal(M.P.)"},
{name: "Rohan", email: "rohan@gmail.com", phoneNo: 1236547896, salary: 25000, address: "Ujjain(M.P.)"},
{name: "Mohan", email: "mohan@gmail.com", phoneNo: 4698514653, salary: 35000, address: "Indore(M.P.)"}];
exampleAsync();
