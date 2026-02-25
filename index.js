console.log("Start");
setTimeout(() => {
    console.log("First Call");
    
},1000)
for(let i=0;i<=100;i++){
    console.log(i);
    
}
setTimeout(() => {
    console.log("Second call");
    
},3000)

