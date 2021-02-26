import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,pd)=> total+pd.price,0);
    let shipping = 0;
    if (total > 1) {
        shipping = 4.99 
    }
    else if(total > 5) {
        shipping = 0
    }
    const tax =(total /10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    const formatNumber = num =>{
        const precision =num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax & Vat: {tax}</p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;