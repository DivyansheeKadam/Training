//         " (1-1 program using all kind of loops)
// 1. Find sum of first 10 natural numbers

//While loop
function FindSum(n){
    let sum = 0, i = 1;

    while(i <= n) {
        sum = sum + i;
        i++;
    }
    return sum;
}
console.log(FindSum(10));

//do loop
const Findsum_doWhile=(n)=>{
    var sum=0, i=1;
do{
sum=sum+i;
i++;
}while(i<=10)
return sum
}
console.log(Findsum_doWhile(10))


//for loop
const FindSum_for=(n)=>{
    let sum = 0;
  
      for (let i = 1; i <= n; i++) {
          sum =sum + i;
      }  
      return sum;
  }
  console.log(FindSum_for(10))
   
  const FindSum_forin=(n)=>{
    let sum = 0;
  
      for (var d in n) {
          sum=n+d
      }  
      return sum;
  }
  console.log(FindSum_forin(10))
   
// 2. Print fibbonaci series upto first 10 numbers.
//for loop  
const Fibbonaci_ForLoop=(a,b)=>{
for( var i=0;i<10;i++){
 var c=a+b;
 a=b;
 b=c;
 console.log(c)
}
}
Fibbonaci_ForLoop(0,1)
   //do_while loop
    
   const Fibbonaci_doLoop=(a,b)=>{
    var i=0;
    do {
     var c=a+b;
     a=b;
     b=c;
     console.log(c)
     i++
    }while(i<10)
    }
    Fibbonaci_doLoop(0,1)

    //While Loop
    const Fibbonaci_WhileLoop=(a,b)=>{
        var i=0;
        while(i<10) {
         var c=a+b;
         a=b;
         b=c;
         console.log(c)
         i++
        }
        }
        Fibbonaci_WhileLoop(0,1)
    
    
// 3. Print all the keys and values of employee object used in first problem
//for in
const Obj={Name:"Ram", Email:"ram@gmail.com", PhoneNo:9876543211, Address:"Indore(M.P.)", age:22 };
for(var key in Obj){
    console.log(key+ Obj[key])
}

