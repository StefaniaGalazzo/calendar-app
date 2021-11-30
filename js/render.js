import { getData, saveData } from "./data.js";

const types = [
    {
        id: 1,
        name: "Taglio capelli"
    },
    {
        id: 2,
        name: "Manicure"
    },
    {
        id: 3,
        name: "Altro"
    }
]



const checkUncheck = (event) => {
    
    const id = parseInt(event.target.id);
    const newDataCheckbox = getData().map((item) => {
        if (item.id === id) {
            // console.log({...item, completed: !item.completed});
            return {...item, completed: !item.completed};
        } else {
            return item;
        } 
    })

 


    
    saveData(newDataCheckbox, newBack);
    render(newDataCheckbox, newBack);
    // console.log(getData()[0].completed);
};    


const checkBackground = (event) => {
    const checkCompl = event.target.checked;
    const divBack = document.querySelector('.change-background')
    // console.log(event.target.checked)

    const newBack = getData().map(() => {
        if(checkCompl === true) {
            divBack.style.background = "blue";
        } else { 
            divBack.style.background = "rgba(164, 255, 255, 0.438)";
         }
    });
    saveData(newBack);
    render(newBack);
    // console.log(getData()[0].completed);
}; 


const render = (data) => {
    const haircutWrap = document.querySelector('.wrapper-haircut');
    
    const items = data.map((item) => {
        if(item.typeId === 1){
            return     `<div class="haircutCards change-background">
            <h3>${item.title}</h3>
            <p>Priorità: ${item.priority}</p>
            <input class = "inputtt" type="checkbox" ${item.completed ? "checked" : ""} id ="${item.id}"/>
            </div>` 
        }
    });

    haircutWrap.innerHTML = items.join('');


    const manicureWrap = document.querySelector(".wrapper-manicure");
    const manicureItems = data.map((manicureItem) =>  {
        if(manicureItem.typeId === 2){
            return `<div class="manicureCards change-background">
            <h3>${manicureItem.title}</h3>
            <p>Priorità: ${manicureItem.priority}</p>
            <input class = "inputtt" type="checkbox" ${manicureItem.completed ? "checked" : ""} id ="${manicureItem.id}"/>
            </div>`
        } 
    });

    manicureWrap.innerHTML = manicureItems.join('');


    const altroWrap = document.querySelector(".wrapper-altro");
    const altroItems = data.map((altroItem) =>  {
        if(altroItem.typeId === 2){
            return `<div class="altroCards change-background">
            <h3>${altroItem.title}</h3>
            <p>Priorità: ${altroItem.priority}</p>
            <input class= "inputtt" type="checkbox" ${altroItem.completed ? "checked" : ""} id ="${altroItem.id}"/>
            </div>`
        }
    });

    altroWrap.innerHTML = altroItems.join('');
    





    // callback = checkboxe cambia valore al click
    const checkboxes = [...haircutWrap.querySelectorAll('input')];

    checkboxes.forEach((input) => {
        input.addEventListener("click", checkUncheck);
        });    

    //  callback = check boxes change background
    checkboxes.forEach((input) => {
        input.addEventListener("click", checkBackground)
    })
}



export {render}; 