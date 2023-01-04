// 5. Take 2 boolean variables as true and false and perform And and Or logical operation over them and print the result as well as operation.
    // && logical operation
    const age = 22;  
    let iscondition = true;
        if (age >= 18 && age <= 30) {
        iscondition = true;
            console.log(iscondition + " you are Eligible")
         } else {
            iscondition = false;
            console.log(iscondition + " you are not Eligible ")
         };

    // || logical operation
   const a1 = 19;
   const a2 = 32;
   if (a1 >= 18 || a2 <= 30) {
    iscondition = true;
    console.log(iscondition+" you are Eligible");
    } else {
        iscondition = false;
        console.log(iscondition+" you are not Eligible")
    };