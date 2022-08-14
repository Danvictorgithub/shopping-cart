import './Products.css';
import xboxX from '../xboxX.png';
import steamDeck from '../steam_deck_03.jpg';
import React, {useState, useEffect} from 'react';
function Products() {
    const [products,addProduct] = useState([
        {
            name:'Xbox Series X',
            img:xboxX,
            price:'499',
        }
    ]);
    return(
        <div className='Products'>
            <div className='bestSeller'>
                <div className='bImg'>
                    <img src={steamDeck}/>
                </div>
                <div className='bestContent'>
                    <h2>Steam Deck - <span>Best Seller</span></h2>
                    <p>Steam partnered with AMD to create Steam Deck's custom APU, optimized for handheld gaming. It is a Zen 2 + RDNA 2 powerhouse, delivering more than enough performance to run the latest AAA games in a very efficient power envelope.</p>
                    <button type='button'>Buy Now</button>
                </div>
            </div>
            <div className='allProducts'>
                <div className='category'>
                    <h2>All Products</h2>
                </div>
                <div className='productCards'>
                    {products.map( (product) =>{
                        return(
                            <div className='card'>
                                <img src={product.img}/>
                                <p className='productName'>{product.name}</p>
                                <p className='price'>{product.price}</p>
                                <button type='button' className='productButton'>Buy</button>
                            </div>
                        )
                    })}
                    <div className='card'></div>
                    <div className='card'></div>
                    <div className='card'></div>
                    <div className='card'></div>
                </div>
            </div>
        </div>
    )
}
export default Products;