let ul = document.createElement("ul")
let arr = ["mango","apple","watermelon","orange","grapes"]
for(let list of arr){
    let li = document.createElement("li")
    li.innerText = list;
    ul.appendChild(li)
    console.log(li)
}
document.body.appendChild(ul)


let div = document.createElement("div")
let p = document.createElement("p")
p.innerText = "Hello Everyone";
div.appendChild(p);
document.body.appendChild(div)
console.log(div);


let div1= document.createElement("div")
let h1 = document.createElement("h1")
h1.innerText = "Javascript"
let p1 = document.createElement("p")
p1.innerText = "Javascript is awesome now i am learning JS"
div1.appendChild(h1)
div1.appendChild(p1)
console.log(div1);
document.body.appendChild(div1)

let data = ["Name", "Rollno", "college"]
let table = document.createElement("table")
let tr = document.createElement("tr")
table.appendChild(tr)
table.border = "1"
table.cellSpacing = "10"
table.cellPadding = "10"

for(let dataa of data){
    let th = document.createElement("th")
    tr.appendChild(th)
    th.innerText = dataa
}
let students = [{name: "Ajay", rollno: 101, college: "KITS"},
    {name: "Rahul", rollno: 102, college: "JNTU"},
    {name: "nani", rollno: 103, college: "KU"}
]
for(let stud of students){
    let tr = document.createElement("tr")
    table.appendChild(tr)
    let td1 = document.createElement("td")
    tr.appendChild(td1)
    td1.innerText = stud.name
    let td2 = document.createElement("td")
    tr.appendChild(td2)
    td2.innerText = stud.rollno
    let td3 = document.createElement("td")
    tr.appendChild(td3)
    td3.innerText = stud.college
    console.log(table);
    
}
document.body.appendChild(table)


let div2 = document.createElement("div")
let button1 = document.createElement("button")
button1.innerText = "Button 1"
let button2 = document.createElement("button")
button2.innerText = "Button 2"
let button3 = document.createElement("button")
button3.innerText = "Button 3"
let button4 = document.createElement("button")
button4.innerText = "Button 4"
let button5 = document.createElement("button")
button5.innerText = "Button 5"
console.log(div2);
//console.log(button1,button2,button3,button4,button5);
div2.appendChild(button1)
div2.appendChild(button2)
div2.appendChild(button3)
div2.appendChild(button4)
div2.appendChild(button5)
document.body.appendChild(div2)


