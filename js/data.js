//salvo i dati sul local storage
const saveData = (data) => {
    const str = JSON.stringify(data);
    localStorage.setItem("data", str);
    }

//riprendo i dati dal local storage
const getData = () => {
    const value = localStorage.getItem("data") || "";
    return JSON.parse(value);
    }

    export{ saveData, getData };