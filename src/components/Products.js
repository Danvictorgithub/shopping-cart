import './Products.css';
import steamDeck from '../steam_deck_03.jpg';
import React, {useState, useEffect} from 'react';

import xboxX from '../xboxX.png';
import xboxS from '../xboxS.png';
import ps5 from '../ps5.png';
import nswitch from '../switch.png';
import steamdeck from '../steamDeck.png';
import legion7 from '../legion7.png';
import nitro5 from '../nitro5.png';
import victus16 from '../victus16.png';

function Products() {
    const [products,addProduct] = useState([
        {
            name:'Xbox Series X',
            img:xboxX,
            price:'499',
        },
        {
            name:'Xbox Series S',
            img:xboxS,
            price:'699',
        },
        {
            name:'PS5',
            img:ps5,
            price:'699',
        },
        {
            name:'Nintendo Switch',
            img:nswitch,
            price:'399',
        },
        {
            name:'Steam Deck',
            img:steamdeck,
            price:'600',
        },
        {
            name:'Lenovo Legion 7',
            img:legion7,
            price:'2000',
        },
        {
            name:'Acer Nitro 5',
            img:nitro5,
            price:'1100',
        },
        {
            name:'HP Victus 16',
            img:victus16,
            price:'1099',
        },
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
                                <p className='price'>{product.price} $</p>
                                <button type='button' className='productButton'>Buy</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Products;