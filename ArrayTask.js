//1
// let movies = []
// movies.push("Salar","Mirchi","Varanasi","Love Today","RajaSaab")
// //Iterate using for loop
// for(i=0;i<movies.length;i++){
//     console.log(movies[i]);
// }
// console.log(movies);
// //Iterate using for in
// for(let index in movies){
//     console.log(movies[index]);

// }
// console.log("------------------------");

// //Iterate using for of
// for(let movie of movies){
//     console.log(movie);
    
// }

//2
// let remove = [1,2,3,4,5]
// console.log(remove.shift());
// console.log(remove.pop());
// console.log(remove);

//3
// let element = [1,2,3,4,5]
// let reverse = []
// for(let i=element.length-1;i>=0;i--){
//     reverse.push(element[i])
// }
// console.log(reverse);


//4
// let arr = [12,3,5,6,22,56,29]
// let evensum = 0;
// let oddsum = 0;

// for(i=0;i<arr.length;i++){
//     if(arr[i]%2 == 0){
//         console.log(arr[i] + " Even Number");
//         evensum += arr[i]
        
//     }
//     else {
//         console.log(arr[i] + " Odd");
//         oddsum += arr[i]
//     }
// }
// console.log("Even Sum " + evensum);
// console.log("Odd Sum " +oddsum);


//5
// let arr1 = ["apple", "banana", "mango", "banana", 3, 4, 5, 6, true, {name: "object"}];
// let num = []
// let str = []
// let bool = [];
// let obj = []
// for(i=0;i<arr1.length;i++){
//     if(typeof arr1[i] == "number") {
//         num.push(arr1[i])
//     }else if(typeof arr1[i] == "string"){
//         str.push(arr1[i])
//     }else if(typeof arr1[i] == "boolean"){
//         bool.push(arr1[i])
//     }else {
//         if(typeof arr1[i] == "object"){
//             obj.push(arr1[i])
//         }
//     }
// }
// console.log(num);
// console.log(str);
// console.log(bool);
// console.log(obj);


let array1 = ["Chess", "Cricket", "Carrom", "kho-kho"]
let array2 = ["reading books", "dancing", "singing", "Travelling"]
console.log(array1.concat(array2));

let splicing = [1,2,3,4,5,6,7,8,9,10]
splicing.splice(3,3,40,50,60)
console.log(splicing);

let week = ["Monday","Tuesday","Wednwsday","Thursday","Friday","Saturday","Sunday"]
let sliced = week.slice(0,2)
console.log(sliced);

console.log(week.join("' '"));

let sort = [52,14,3,25,7,35]
console.log(sort.sort((a,b) => a-b));


