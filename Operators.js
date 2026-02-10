var a = 5
var b = 10
console.log(a == b)
console.log(a === b);
console.log(a != b);
console.log(a !== b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);


//even or odd using ternary operator
var evenodd = 5
console.log(evenodd % 2 == 0 ? "Even" : "Odd");


//age using ternary
var age = 40;
console.log(age >= 18 ? "Adult" : "Minor");

//grade using ternary
var score = 60
var grade = score >= 90 ? "Grade A" :
            score >= 75 ? "Grade B" :
            score >= 60 ? "Grade C" :
            score >= 45 ? "Grade D" : "Fail"
console.log(grade);

//temperature using ternary
var temperature = 25
var category = temperature >= 30 ? "Hot" :
                temperature >= 20 && temperature < 30 ? "Warm" :
                temperature >= 10 && temperature <= 19 ? "Cool" : "Cold" 
console.log(category);

//ageGroups using ternary
var ages = 65
var ageGroups = ages >= 0 && ages <= 12 ? "Child" :
                ages >= 13 && ages <= 19 ? "Teen" :
                ages >= 20 && ages <= 64 ? "Adult" : "Senior"
console.log(ageGroups);

                