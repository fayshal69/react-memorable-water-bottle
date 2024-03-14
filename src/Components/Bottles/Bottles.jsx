import { useEffect, useState } from 'react';
import './Bottles.css'
import Bottle from '../Bottle/Bottle';
import { storeToLocalStorage, saveCartToLS, isStoreInLS } from '../../utilities/localstorage';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[]);

    useEffect(() => {
        if(bottles.length > 0) {
            const storedCart = isStoreInLS();
            const savedCart = [];
            for(const id of storedCart) {
                const cart =  bottles.find(bottle => bottle.id === id);
                if(cart) {
                    savedCart.push(cart);
                }
            }
            setCart(savedCart);
        }
    },[bottles]);

    const addToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        storeToLocalStorage(bottle.id);
    }


console.log(bottles);
    return (
        <div>
            <h2>Availabe Bottle : {bottles.length}</h2>
            <h3>Cart : {cart.length}</h3>
            <div className='bottles'>
                {
                    bottles.map((bottle) => <Bottle 
                    key={bottle.id} 
                    bottle={bottle} addToCart={addToCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;