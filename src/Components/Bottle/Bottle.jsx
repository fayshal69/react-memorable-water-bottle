import './Bottle.css'

const Bottle = ({bottle, addToCart}) => {
    const {name, img, price} = bottle;
    return (
        <div className='bottle'>
            <h3>Bottle : {name}</h3>
            <p>Price : {price}$</p>
            <img src={img} alt="" /> <br />
            <button onClick={() => addToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;