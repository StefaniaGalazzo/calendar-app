import {render} from "./render.js";
import {getData, saveData} from "./data.js";

// console.log("ciao")


    let datas = []
    const API = "https://jsonplaceholder.typicode.com/todos";

// F E T C H  
    document.addEventListener("DOMContentLoaded" , () => {
  
    
        fetch(API)
        .then((response) => response.json())
        .then((data) => data.filter((item, index) => index < 30).map((item) => {

            item.typeId = Math.floor(Math.random() * 3) +1;
            item.priority = Math.floor((Math.random() * 4));
            
            return item;
        }))

        // .then((data) => data.sort((a,b) => (a.priority > b.priority) ? 1 : -1).reverse() )
        .then((data) => {
           datas = data;
           saveData(data)})
        .then(() => {
            render(getData());
    }); 

})

// S O R T - B Y - P R I O R I T Y

const priorityBtn = document.querySelector(".priority");

priorityBtn.addEventListener('click', (event) => {
    // console.log(priorityBtn)
    datas.sort((a,b) => (a.priority > b.priority) ? 1 : -1).reverse();
    render(datas)
})

// S E A R C H - I N P U T //
// document.addEventListener('DOMContentLoaded', () => {

    const input = document.querySelector('#search-filter');
 
     input.addEventListener('keyup', (event) => {
       const searchString = event.target.value.toLowerCase();
            const filterDatas = datas.filter((element) => {
               return (
             element.title.includes(searchString) ||
             element.priority.toString().includes(searchString)
            )       
            });
            // console.log(filterDatas);

            render(filterDatas);
 });
});







     
