import './Cart.css';
import victus16 from '../victus16.png';
import nitro5 from '../nitro5.png';
function Cart({cartArray,removeFunction}) {
    let indexCount = 0;
    let cartSum = 0;
    cartArray.forEach( cart => {
        cartSum += parseInt(cart.price);
    });
    return(
        <div className="cart">
            <div className='cartList'>
                {cartArray.map( (cart) => {
                    return(
                        <div key={indexCount++} className='item'>
                            <img src={cart.img}></img>
                            <div>
                                <h3>{cart.name}</h3>
                                <h4>{cart.price} $</h4>
                                <button onClick={removeFunction}no={indexCount}>Remove</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='cartTotal'>
                <h3>Order Summary</h3>
                <h4>Number of Items: {cartArray.length}</h4>
                <h2>Total: {cartSum} $</h2>
                <button>Check Out</button> 
            </div>
        </div>
    )
}
export default Cart;