// " (1-1 program using all kind of loops)
// 1. Find sum of first 10 natural numbers
//While loop
function findSum (n) {
    let sum = 0;
    let i = 1;
    while (i <= n) {
        sum = sum + i;
        i++;
    }
    return sum;
}
console.log(`"While Loop" ${findSum(10)}`);

//do loop
const findsumDoWhile = (n) => {
    let sum = 0;
    let i = 1;
    do {
    sum = sum + i;
    i++;
    } while(i<=n)
    return sum;
    }
console.log(`"Do_While Loop" ${findsumDoWhile(10)}`);


//for loop
const findSumFor=(n)=>{
    let sum = 0;
      for (let i = 1; i <= n; i++) {
          sum = sum + i;
         }  
        return sum;
  };
  console.log(`"for Loop" ${findSumFor(10)}`);
