import employees from './employee.json' assert{type:'json'}


let obj =  JSON.stringify(employees);
let obj2 = JSON.parse(obj);
let data = obj2.employees;
let dataforM = data.filter((data)=>{
    if (data.name[0] !== 'M'){
        return(data.name[0]);
    };
});
console.log(dataforM);

 export default dataforM;
