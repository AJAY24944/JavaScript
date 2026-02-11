function sum(a,b) {
    return a+b
}
console.log(sum(10,20));

function printUppercase(text) {
    console.log(text.toUpperCase())
}
printUppercase("hello ajay")

function print(x) {
    console.log(x);
    
}
print(undefined)

function array(arr){
    if (arr.length === 0) {
        console.log("Array is empty");
    } else {
        console.log("Array is not empty");
    }
}

array([]);
// array([1, 2, 3]);

function diff(num1, num2) {
    return num1-num2
}
console.log(diff(10, 15));


function greetings(name,age) {
    console.log("Hello "+name+"! You are "+age+" years old.")
}
greetings("Ajay",22)

function EvenorOdd(num) {
    if(num%2===0 ){
        console.log("Even Number");
    }
    else {
        console.log("Odd Number");
        
    }
}
EvenorOdd(10)