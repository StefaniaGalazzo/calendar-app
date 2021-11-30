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
            <p>Giorno 2, h12.30</p>
            <input type="checkbox" ${item.completed ? "checked" : ""} id ="${item.id}"/>
            </div>` 
        }
        console.log(item.typeId === 1)
    });

    
    // >>>>>>> inserire qui data.filter typeID???


    haircutWrap.innerHTML = items.join('');

    // checkboxe cambia valore al click
    const checkboxes = [...haircutWrap.querySelectorAll('input')];
    
    checkboxes.forEach((input) => {
        input.addEventListener("click", checkUncheck);
        });



    // >>>>>>>>>>>>>  check boxes change background
    checkboxes.forEach((input) => {
        input.addEventListener("click", () => {
            if(items.completed === true){
                console.log(items)
            }

        })
    })

};





    // function createHaircutCards(parent, typeId, title) {
    //     const haircut = document.createElement("div");
    //     haircut.className = "haircut-card";
        
    //     parent.appendChild(haircut);
    // }
    
    // const wrapperHaircut = document.querySelector('.wrapper-haircut');
   

    // createHaircutCards(wrapperHaircut);

export {render}; 