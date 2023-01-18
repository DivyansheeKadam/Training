// 3. Use switch case to return a grade for the score, either ""A"", ""B"", ""C"", ""D"", or ""F"". (Take convension for numbers and grades by yourself)
// Anything below 50 is F"
const example =(grade)=>{
  switch (true) {
    case (grade >= 90 && grade <= 100):
      return ("A");
     case (grade >= 70 && grade < 90): 
     return("B");
    case (grade >= 60 && grade < 70):
      return("C");
    case (grade >= 50 && grade < 60):
      return("D");
    case (grade < 50 ):
      return("F");
    default:  return("Unknown grade")
 };
}
console.log(example(40));
