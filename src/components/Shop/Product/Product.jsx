import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    // console.log(props);
    const { img, name, seller, quantity, price, ratings } = props.product;
    const handleCart=props.handleCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div>
                <h3 className='product-name'>{name}</h3>
                <p className='product-price'>Price: ${price}</p>
                <h5>Seller: {seller}</h5>
                <h5>Rating: {ratings}Stars</h5>
                <button onClick={()=>handleCart(props.product)} className='Add-to-cart'>Add to cart<FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </div>
    );
};

export default Product;