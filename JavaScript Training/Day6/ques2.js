// " (1-1 program using all kind of loops)
// 2. Print fibbonaci series upto first 10 numbers.
//for loop  
const fibbonaciForLoop = (a, b) => {
    let c;
for( var i = 0; i < 10; i++) {
 c = a + b;
 a = b;
 b = c;
    console.log(c);
};
};
fibbonaciForLoop(0, 1);

   //do_while loop
   const fibbonaciDoLoop = (a, b) => {
    let i = 0;
    let c;
    do {
     c = a + b;
     a = b;
     b = c;
        console.log(c);
        i++;
        } while (i < 10)
    };
    fibbonaciDoLoop(0, 1);

    //While Loop
    const fibbonaciWhileLoop = (a, b) => {
        let i=0;
        let c;
        while (i < 10) {
         c = a + b;
         a = b;
         b = c;
            console.log(c);
            i++;
            };
        };
        fibbonaciWhileLoop(0,1);