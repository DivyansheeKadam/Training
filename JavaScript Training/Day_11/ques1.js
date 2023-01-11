// " - Divide the employee age by null and handle the error. Also if the error occurs divide the age by 2 and print it.
let emp= '{ "employees" : [' +
    '{"id":1, "name": "Ram", "age": 24, "phoneNo": 9876543211, "salary": 700000, "address": "Indore(M.P.)"},'+
    '{"id":2, "name": "Sita",  "age": 23,  "phoneNo": 8669841233, "salary": 650000, "address": "Bhopal(M.P.)"},'+
   ' {"id":3, "name": "Mohan", "age": 27, "phoneNo": 1587954133, "salary": 300000, "address": "Dhar(M.P.)"},'+
    '{"id":4, "name": "Rohan", "age": 30, "phoneNo": 1236547896, "salary": 550000, "address": "Ujjain(M.P.)"},'+
    '{"id":5, "name": "sohan", "age": 29, "phoneNo": 3236547896, "salary": 400000, "address": "Ujjain(M.P.)"},'+
    '{"id":6, "name": "Mohit", "age": 40, "phoneNo": 4698514653, "salary": 700000, "address": "Indore(M.P.)"},'+
    '{"id":7, "name": "Geeta", "age": 32, "phoneNo": 9236547896, "salary": 550000, "address": "Bhopal(M.P.)"}]}'

const employeesAge = () => {
    let obj = JSON.parse(emp);
    //console.log(obj.employees)
    (obj.employees).filter((age) => {
        try {
            if (age.age / null) {
                throw ("Divide by zero error.");
            } else {
                return (age.age / 2) 
            }
    } catch (error) {
        console.log("Error:-" +error)
        } 
    })
}
employeesAge();