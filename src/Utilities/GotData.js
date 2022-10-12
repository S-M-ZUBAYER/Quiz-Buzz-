
const storeValue = (id) => {
    let getValue = 0;
    getValue = localStorage.getItem(id);
    if (getValue) {
        getValue = JSON.parse(getValue);
    }
    return getValue;
}

export { storeValue };