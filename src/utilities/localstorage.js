const storeToLocalStorage = (id) => {
    const cartArr = isStoreInLS();
    cartArr.push(id);
    saveCartToLS(cartArr);
}

const saveCartToLS = (array) => {
    const cartString = JSON.stringify(array);
    localStorage.setItem('cart', cartString);
}

const isStoreInLS = () => {
    const storedCart = localStorage.getItem('cart');
    if(storedCart) {
        return JSON.parse(storedCart);
    }
    return [];
}

export {storeToLocalStorage, saveCartToLS, isStoreInLS}