//1. Take an array of objects of employees created above and print those employees whose age is less than 50.
const employee1=[{ name:"Ram", age:25},{ name:"Sita", age:24},{ name:"Mohan", age:52},{ name:"Rohan", age:55},{ name:"Shyam", age:40}];
    const emp= employee1.filter((ag)=>{
        return ag.age<50
    })
    console.log(emp)
 
    //print without array in object
const employee=[{ name:"Ram", age:25},{ name:"Sita", age:24},{ name:"Mohan", age:52},{ name:"Rohan", age:55},{ name:"Shyam", age:40}];
 let c=[];
  const d = employee.filter((empl)=>{
   if(empl.age<50){
    for(var i in empl){
        c+=`${i} ${empl[i]} `
    }
   };
   });
console.log(c);


