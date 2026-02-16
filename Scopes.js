//greeting function
function greet(name){
    console.log("Hello", "["+name+ "]!")
}
greet("Ajay")

//sum function
function sum(a,b){
    return a+b;
}
console.log(sum(10,20));


//square
function square(x){
    return x**2;
}
console.log(square(5))

//average
function average(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum/arr.length
}
console.log(average([5,2,2]));


//vowels
function vowels(str){
    for(let i=0;i<str.length;i++){
        let ch = str[i].toLowerCase();
        if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
            return "Its Contain vowels"
        }
    }
    return "Its Not contain vowels"
}
console.log(vowels("hello"));
console.log(vowels("hll"));


//convert Temperature
function convertTemperature(temp,scale){
    if(scale === "C"){
        return (temp - 32) * 5/9
    }
    else if(scale === "F"){
        return (temp * 9/5)+32
    }
    else {
        return "invalid scale! use 'C' or 'F'"
    }

}
console.log(convertTemperature(75,"C"));
console.log(convertTemperature(24,"F"));

