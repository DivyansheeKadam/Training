        // 1. Take two numbers and perform all the arithmetic operations over them. 
        const a=10, b=10;
        const sum=a+b
        const sub=20-10
        const mul=20*10
        const div=20/10
        console.log("Sum"+sum+" Sub"+sub)
        console.log("Multipul "+mul+" Divi"+div)


    // 2. Take 2 numbers and 2 strings and perform addition 
// operation on them in same sequence. 
    let num1=10, num2=10, string1="Sita", string2="Ram";
    console.log(`Numbers:- ${num1+num2} Strings:- ${string1+string2}`)

// 3. Take 2 Strings and 2 numbers and perform addition 
// operation on them in same sequence. 
console.log(`Strings:- ${string1+string2} Numbers:- ${num1+num2}`)
// 4. Write an operation to get its result as NaN. 
    let x=0, y;
    console.log(x+y)

// 5. Take 2 boolean variables as true and false and perform 
// And and Or logical operation over them and print the 
// result as well as operation
    const age=22;  iscondition=true;
   if(age>=18 && age<=30){
   iscondition=true
   console.log(iscondition+ " you are Eligible")}
   else{
   iscondition=false
   console.log(iscondition+" you are not Eligible </br>"+iscondition)}

   const a1=19, a2=32;
   if(a1>=18 || a2<=30){
   iscondition=true
   console.log(iscondition+" you are Eligible")}
   else{
   iscondition=false
   console.log(iscondition+" you are not Eligible")}
   
   
// 6. Take 2 variables and compare them using == and 
// === such that result of both the comparisons operation 
// is not equal.
   const z=10;
   if(z%2==0){
    console.log("its even no.");
    }
    else{
        console.log("its odd no.");
    }
    //........................
    const c="2";
    var is=false
    if(c===2){
        is=true
        console.log(is)
    }
    else{
    is=false
    console.log(is)}
