import './Cart.css'

const Cart = ({ cart, handleClearCart, children }) => {
    let totalPrice = 0;
    let totalShiping = 0;
    let tax = 0;
    let grandTotal = 0;
    let quantity = 0;
    for (const product of cart) {
        // console.log(product)
        // product.quantity = product.quantity || 1; option-1;
        // option-2
        // if(product.quantity===0){
        //     product.quantity = 1;
        // }
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShiping = totalShiping + product.shipping * product.quantity;
        tax = product.price * 7 / 100;
        grandTotal = totalPrice + totalShiping + tax;


    }

    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <p>Quantity: {quantity}</p>
            <p>Total price: ${totalPrice}</p>
            <p>Shipping: {totalShiping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h4>Grand total: {grandTotal.toFixed(2)}</h4>
            <button onClick={handleClearCart} className='btn-deleted'>Clear cart <span>D</span></button>
            {children}

        </div>
    );
};

export default Cart;