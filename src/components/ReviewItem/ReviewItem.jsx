import React from 'react';
import './Review.css'

const ReviewItem = ({ pd, handleRemoveCart }) => {
    const {id, img, name, price, shipping
    } = pd;
    return (
        <div className='review'>
            <img src={img} alt="" />
            <div className='review-info'>
                <p className='title'>{name}</p>
                <p className='sub-title'>Price: <span className='orenge'>${price}</span></p>
                <p className='sub-title'>Shiping charge: <span className='orenge'>${shipping
                }</span></p>
            </div>
            <button onClick={()=>handleRemoveCart(id)} className='btn-delete'>D
            </button>
        </div>
    );
};

export default ReviewItem;