// "1. Create a function that takes a number and prints all even numbers upto that number
  const printEven = (num) => {
    for (let i = 1; i <= num; i++) {
      if(i % 2 === 0) {
        console.log(i);
      }
    };
  };
 printEven(10);