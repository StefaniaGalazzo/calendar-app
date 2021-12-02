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
    // console.log(event.target.parentNode)
    // event.target.parentNode.classList.add("haircutCardsHighlited");
    // console.log(event.target.parentNode.style)
    const newDataCheckbox = getData().map((item) => {
    if (item.id === id) {
            console.log({...item, completed: !item.completed});
            return {...item, completed: !item.completed};
        } else {
            return item;
        } 
    })
    saveData(newDataCheckbox);
    render(newDataCheckbox);
    // console.log(getData()[0].completed);
};        




// funzione cambio background al check
// const checkBackground = (event) => {
//     const checkCompl = event.target.checked;
//     const divBack = document.querySelector('.change-background')
//     // console.log(event.target.checked)

//     const newBack = getData().map(() => {
//         if(checkCompl === true) {
//             divBack.style.background = "blue";
//         } else { 
//             divBack.style.background = "rgba(164, 255, 255, 0.438)";
//          }
//     });
//    saveData(newBack);
//    getData(newBack);
//     // console.log(getData()[0].completed);
// }; 





const render = (data) => {
    //render haircut section
    const haircutWrap = document.querySelector('.wrapper-haircut');
    const items = data.map((item) => {
        if(item.typeId === 1){
            return  `<div class="haircutCards change-background ${item.completed ? 'haircutCardsHighlited' : ''}">
            <h3>${item.title}</h3>
            <p>Priorità: ${item.priority}</p>
            <input class = "inputtt" type="checkbox" ${item.completed ? "checked" : ""} id ="${item.id}"/>
            </div>` 
        }
    });

    haircutWrap.innerHTML = items.join('');

    //render manicure section
    const manicureWrap = document.querySelector(".wrapper-manicure");
    const manicureItems = data.map((manicureItem) =>  {
        if(manicureItem.typeId === 2){
            return `<div class="manicureCards change-background ${manicureItem.completed ? 'haircutCardsHighlited' : ''}">
            <h3>${manicureItem.title}</h3>
            <p>Priorità: ${manicureItem.priority}</p>
            <input class = "inputtt" type="checkbox" ${manicureItem.completed ? "checked" : ""} id ="${manicureItem.id}"/>
            </div>`
        } 
    });

    manicureWrap.innerHTML = manicureItems.join('');


    //render altro section
    const altroWrap = document.querySelector(".wrapper-altro");
    const altroItems = data.map((altroItem) =>  {
        if(altroItem.typeId === 3){
            return `<div class="altroCards change-background ${altroItem.completed ? 'haircutCardsHighlited' : ''}">
            <h3>${altroItem.title}</h3>
            <p>Priorità: ${altroItem.priority}</p>
            <input class= "inputtt" type="checkbox" ${altroItem.completed ? "checked" : ""} id ="${altroItem.id}"/>
            </div>`
        }
    });

    altroWrap.innerHTML = altroItems.join('');
    





    // callback = checkboxe cambia valore al click
    const checkboxes = [...document.getElementsByTagName('input')];

    checkboxes.forEach((input) => {
        input.addEventListener("click", checkUncheck);
        });    





    // callback = check boxes change background

    // checkboxes.forEach((input) => {
    //     input.addEventListener("click", checkBackground)
    // })


// // S E A R C H - B A R //
// const cards = document.getElementsByClassName("wrapper-haircut");
// const searchBar = document.getElementsByClassName("inputFilterSearch");

// searchBar.addEventListener('keyup', (e) => {
// console.log(e)
// })


}







export {render}; 