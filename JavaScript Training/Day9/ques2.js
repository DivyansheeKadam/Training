// "1. Add the list of employees in a json file and import it in below file to use it. Add unique ids for each employee.
// 2. Add a function to return list of employees that contains ""am"" in his name. Add it in separate file and import it to call in another file.
import employees from './employee.json' assert{type:'json'}
let obj =  JSON.stringify(employees);
let obj2 = JSON.parse(obj);
let data = obj2.employees;
let dataforM = data.filter((data)=>{
    if (data.name){
      return data.name.includes('am');
    };
});
console.log(dataforM);

 export default dataforM;
