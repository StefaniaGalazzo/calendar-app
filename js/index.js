import {render} from "./render.js";
import { getData, saveData } from "./data.js";

// console.log("ciao")




// F E T C H  
    document.addEventListener("DOMContentLoaded" , () => {
  
        const API = "http://jsonplaceholder.typicode.com/todos";
    
        fetch(API)
        .then((response) => response.json())
        .then((data) => data.filter((item, index) => index < 30).map((item) => {
            item.typeId = Math.floor(Math.random() * 3) +1;
            item.priority = Math.floor((Math.random() * 4));
            return item;
        }))

        .then((data) => saveData(data))
        .then(() => {
            render(getData());
    }); 
    })





