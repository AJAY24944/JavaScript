// const URL = "https://dummyjson.com/quotes";
// fetch(URL).then(res=>res.json())
// .then(data =>{
// for(i=0;i<data.quotes.length;i++){
//     console.log(data.quotes[i].author)
// }
// })


// const URL = "https://dummyjson.com/todos"
// fetch(URL).then(res => res.json())
// .then(data => {
//     for(i = 0;i<data.todos.length;i++){
//         console.log(data.todos[i].todo);
        
//     }
// })


// const URL = "https://jsonplaceholder.typicode.com/photos"
// fetch(URL).then(res => res.json())
// .then(data => {
//     for(i = 0;i<data.length;i++){
//         console.log(data[i].id);
        
//     }
// })


const URL = "https://pokeapi.co/api/v2/pokemon/ditto"
fetch(URL).then(res => res.json())
.then(data => {
    for(i = 0;i<data.abilities.length;i++){
        console.log(data.game_indices);
        
    }
})