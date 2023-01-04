// " (1-1 program using all kind of loops)
// 3. Print all the keys and values of employee object used in first problem for in.
const obj = {Name: "Ram", 
Email: "ram@gmail.com", 
PhoneNo: 9876543211, 
Address: "Indore(M.P.)", 
age: 22 };
for (var key in obj) {
    console.log(key + obj[key])
};