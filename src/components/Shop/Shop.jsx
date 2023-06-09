import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../../public/fakedb';
import Cart from '../Cart/Cart';
import Product from './Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[]);
    useEffect(()=>{
        const saveCart = [];
        const storedCart = getShoppingCart();
        for(const id in storedCart){
            const addedProduct = products.find(product=>product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct)
            }
        }
        setCart(saveCart);
    },[products])

    const handleCart = (product) =>{ 
        let newCart = [];
        const exists = cart.find(pd=>pd.id===product.id)
        if(!exists){
            product.quantity = 1;
            newCart = [...cart,product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining,exists];
        }
        setCart(newCart);
        addToDb(product.id)
     }
     const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart()
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
                    <Cart cart={cart}
                    handleClearCart={handleClearCart}></Cart>
                    <Link to="/order">
                        <button className='btn-chackout'>Review order</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Shop;