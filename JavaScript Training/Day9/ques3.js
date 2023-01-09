import dataforM from "./ques2.js";
const salary=()=>{
    let print="";
    const salaryfind = dataforM.filter((data) => {
        if (data.salary >500000){
            return print += ((data.salary/100000).toFixed(1))
        }
    });

    console.log(salaryfind)
    console.log(print)

}
salary()
export default salary;