// 3. Use switch case to return a grade for the score, either ""A"", ""B"", ""C"", ""D"", or ""F"". (Take convension for numbers and grades by yourself)
// Anything below 50 is F"
const grade = 92;
switch (true) {
   case (grade >= 90 && grade <= 100):
     console.log("A");
   break;
    case (grade >= 70 && grade < 90): 
     console.log("B");
   break;
   case (grade >= 60 && grade < 70):
     console.log("C");
   break;
   case (grade >= 50 && grade < 60):
     console.log("D");
   break;
   case (grade < 50 ):
     console.log("F");
   break;
   default:  console.log("Unknown grade")
};
