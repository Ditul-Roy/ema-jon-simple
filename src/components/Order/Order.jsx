import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../../public/fakedb';
import "./Order.css"

const Order = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(pd => <ReviewItem
                        key={pd.id}
                        pd={pd}
                        handleRemoveCart={handleRemoveCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                    handleClearCart={handleClearCart}></Cart>
                <Link to="/chackout">
                    <p>
                        <button className='btn-chackout'>procced to chackou <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg></span>
                        </button>
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default Order;