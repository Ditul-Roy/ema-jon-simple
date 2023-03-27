import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[]);
    const handleCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
     }
    return (
        <div>
            <div className='shop-container'>
                <div className='product-container'>
                    {
                        products.map(product=><Product product={product} key={product.id} handleCart={handleCart}></Product>)

                    }
                </div>
                <div className='cart-container'>
                    <h4>order summary</h4>
                    <p>Quantity: {cart.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;