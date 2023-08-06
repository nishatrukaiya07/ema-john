import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    // const cart = props.cart;
    // const {cart} =props;
console.log(cart);
let total =0;
for(const product of cart){
    total = total + product.price;
}

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected items: {cart.length}</p>
            <p>Total Price: {total} </p>
            <p>Tax: </p>
            <p>Total Shipping: </p>
            <h6>Grand Total: </h6>
        </div>
    );
};

export default Cart;