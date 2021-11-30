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
            console.log({...item, completed: !item.completed});
            return {...item, completed: !item.completed};
        } else {
            return item;
            }
    });        
    saveData(newDataCheckbox);
    render(newDataCheckbox);
    // console.log(getData()[0].completed);
};    

// const checkChange = (event) => {
//     // const completed = parseInt(event.target.completed);    
//     const newDataCheckChange = getData().map((item) => {
//         if (item.completed === true) {
//             return haircutCards.style.backgroundColor = "black";    
//         } else {
//             return item;    
//             }
//     });
//     saveData(newDataCheckChange);
//     render(newDataCheckChange);
//     // console.log(getData()[0].completed);
// };





const render = (data) => {
    const haircutWrap = document.querySelector('.wrapper-haircut');
    
    const items = data.map((item) => {
        if(item.typeId === 1){
            return     `<div class="haircutCards">
            <h3>${item.title}</h3>
            <p>Priorità: ${item.priority}</p>
            <input type="checkbox" ${item.completed ? "checked" : ""} id ="${item.id}"/>
            </div>` 
        }
    });

    haircutWrap.innerHTML = items.join('');


    const manicureWrap = document.querySelector(".wrapper-manicure");
    const manicureItems = data.map((manicureItem) =>  {
        if(manicureItem.typeId === 2){
            return `<div class="manicureCards">
            <h3>${manicureItem.title}</h3>
            <p>Priorità: ${manicureItem.priority}</p>
            <input type="checkbox" ${manicureItem.completed ? "checked" : ""} id ="${manicureItem.id}"/>
            </div>`
        }
    });

    manicureWrap.innerHTML = manicureItems.join('');


    const altroWrap = document.querySelector(".wrapper-altro");
    const altroItems = data.map((altroItem) =>  {
        if(altroItem.typeId === 2){
            return `<div class="altroCards">
            <h3>${altroItem.title}</h3>
            <p>Priorità: ${altroItem.priority}</p>
            <input type="checkbox" ${altroItem.completed ? "checked" : ""} id ="${altroItem.id}"/>
            </div>`
        }
    });

    altroWrap.innerHTML = altroItems.join('');
    





    // checkboxe cambia valore al click
    const checkboxes = [...haircutWrap.querySelectorAll('input')];
    
    checkboxes.forEach((input) => {
        input.addEventListener("click", checkUncheck);
        });

    



    // >>>>>>>>>>>>>  check boxes change background
    checkboxes.forEach((input) => {
        const divBackground = document.querySelector('.haircutCards');
        input.addEventListener("click", () => {
            if(items.input.completed === true){
                divBackground.style.backgroundColor = "blue";
    //             console.log(items)
            }
        });

    
    

});

}



    // function createHaircutCards(parent, typeId, title) {
    //     const haircut = document.createElement("div");
    //     haircut.className = "haircut-card";
        
    //     parent.appendChild(haircut);
    // }
    
    // const wrapperHaircut = document.querySelector('.wrapper-haircut');
   

    // createHaircutCards(wrapperHaircut);

export {render}; 