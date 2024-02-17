
const NOTE_KEY = "ooeoeoeoeoeooeo";

const saveOnLocalStore = (key,newData) => {
    localStorage.setItem(key,JSON.stringify(newData));
};

const readLocalStore = (key) => {
    const stored_data = JSON.parse(localStorage.getItem(key));
    return stored_data;
};

const removeFromLocalStore = (key) => {
    localStorage.removeItem(key);
};

export default NOTE_KEY;

export  {
    saveOnLocalStore,
    readLocalStore,
    removeFromLocalStore
};