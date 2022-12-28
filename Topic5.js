        // "1. Take 2 numbers and print the smallest one amongst them

        const a=20, b=40;
        var c=""
        if(a<b){
            c+=a
            console.log(c+" its smallest number")
        }
        else
            console.log(b+"its smallest no.")
// 2. Take 3 numbers and print the biggest one amongst them
        const x=20, y=30, z=25
        var c=""
        if(x>y&&x>z){   
            c+=x
            console.log(c+" its biggest number")
        }
        else if(y>z){
            console.log(y+ "its biggest number")
        }
        
            else 
           console.log(z+"its biggest number")

           

// 3. Use switch case to return a grade for the score, either ""A"", ""B"", ""C"", ""D"", or ""F"". 
//(Take convension for numbers and grades by yourself)
// Anything below 50 is F"
        
        var grade = 92;
            switch (true) {
               case (grade>=90 && grade<=100): console.log("Good job");
               break;
                case (grade>=80 && grade<=91): console.log("Pretty good");
               break;
               case (grade>=70 && grade<=81): console.log("good");
               break;
               case (grade>=60 && grade<=71): console.log("Passed");
               break;
            
               case (grade>=50 && grade<=61): console.log("Not so good");
               break;
            
               case (grade>50 ): console.log("Failed");
               break;
            
               default:  console.log("Unknown grade")
            }
