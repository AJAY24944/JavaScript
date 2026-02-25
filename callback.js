//1. Basic Callback Execution
function processNumber(num,callback) {
    callback(num*2)
    
}
processNumber(10,res=>console.log(res));


//2. Callback with Array Iteration
function forEachElement(array, callback){
    for(i=0;i<array.length;i++){
        callback(array[i]);
    }
}
forEachElement([1,2,3,4,5],res => console.log(res));


//3. Simple Delayed Callback
function sayHello(name,callback){
    setTimeout(() => {
        let message = "Hello " + name+"!";
        callback(message);
    }, 1000);
    
}
sayHello("Ajay",
    res => {
        console.log(res)
})


//4. Callback on Condition
function checkEven(num,callback1,callback2){
    if(num%2 == 0){
        callback1(num)
    }
    else {
        callback2(num)
    }
}
checkEven(2,(even => {
    console.log(even + " Is even number" );
}),
(odd => {
    console.log(odd + "Is Odd number");
    
}))

//5. Sequential Callbacks
function performTasks(num,callback1,callback2){
    const resultAfterAdd = callback1(num);
    const finalResult = callback2(resultAfterAdd);
    console.log(finalResult);
    
}
performTasks(10,
    num => num + 5,
    num => num * 2
)
