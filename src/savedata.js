const getStorbuy = () => {
    const cakeReed = localStorage.getItem('add-list');
    if (cakeReed) {
        const storage = JSON.parse(cakeReed); 
        return storage;
    } else {
        return [];
    }
};

const addToStorbuy = (id) => {
    const add = getStorbuy(); 
    if (add.includes(id)) { 
        alert("This book is already added");
    } else {
        add.push(id); 
        const DataStorlist = JSON.stringify(add);
        localStorage.setItem('add-list', DataStorlist);
    }
};

// Witch list

const getStorwish = () => {
    const cakeReed = localStorage.getItem('buy-wish');
    if (cakeReed) {
        const storage = JSON.parse(cakeReed); 
        return storage;
    } else {
        return [];
    }
};

const addToStorwish = (id) => {
    const add = getStorwish(); 
    if (add.includes(id)) { 
        alert("This book is already added");
    } else {
        add.push(id); 
        const DataStorlist = JSON.stringify(add);
        localStorage.setItem('buy-wish', DataStorlist);
    }
};

export { addToStorbuy ,addToStorwish,getStorbuy ,getStorwish};
