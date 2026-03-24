// async function fetchdata(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/todos/")
//     let data = await res.json();
//     getdata(data);
// }

//    function getdata(data) {
//     let container = document.getElementById("container")
//     data.forEach(ele => {
//         let p = document.createElement("p")
//         p.innerHTML = `

//         <h3>user Id : ${ele.userId}</h3>
//         <h3>Id : ${ele.id}</h3>
//         <p>Title : ${ele.title}</p>
//         <p>Completed : ${ele.completed}</p>
//         <hr>
//         `;
//         container.appendChild(p);
//     });

// }

// fetchdata();


// async function quotes(){
//     let result = await fetch("https://dummyjson.com/quotes")
//     let data = await result.json();
//     getquotes(data.quotes);
// }

// function getquotes(quote) {
//     let div = document.getElementById("container")
//     quote.forEach(ele => {
//         let p = document.createElement("p")
//         p.innerHTML = `
//         <h3>Id : ${ele.id}</h3>
//         <p>quote : ${ele.quote}</p>
//         <h4>author : ${ele.author}</h4>
//         <hr>
//         `
//         div.appendChild(p)
//     });    
// }
// quotes()



async function photos() {
    let res1 = await fetch("https://jsonplaceholder.typicode.com/photos")
    let data = await  res1.json();
    pics(data.slice(0,20))

}

function pics(data) {
    let div2 = document.getElementById("container")
    data.forEach(ele => {
        let card = document.createElement("div")
        card.innerHTML = `
        <h3>album id : ${ele.albumId}</h3>
        <h4>Title : ${ele.title}</h4>
        <img src="${ele.thumbnailUrl}">
        `
        div2.appendChild(card)
    });
}
photos()
