// // - Create a function that prints numbers from m to n after 100ms each. m and n should be taken as paramter in function"
const  printNum = (m, n) => {
    let current = m-1;

      const print = () => {
        console.log(current);
      if (current < n) {
        setTimeout(print, 100);
      }
      current++;
    }
    setTimeout(print, 1000);
  }
printNum(5, 10);
