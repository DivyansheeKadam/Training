// 3. Take another paramter as salary and keep it above 500000 in numbers in json and print it upto one decimal place only with unit as Lac"
import dataforM from "./ques2.js";
const salary=()=>{
    const salaryfind = dataforM.filter((data) => {
        if (data.salary >500000){
            return ((data.salary /= 100000).toFixed(1)) + ", "
        }
    });
    console.log(salaryfind);
};
salary();
export default salary;
