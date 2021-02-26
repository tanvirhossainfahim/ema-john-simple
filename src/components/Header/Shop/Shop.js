import React, { useState } from 'react';
import fakeData from '../../../fakeData';
import Cart from '../../cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const first50 = fakeData.slice(0,50);
    const [products, setProducts] = useState (first50);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    return (
        <div className="shop-container">
            <div className="product-container">
                    {
                    products.map(pd => <Product 
                        handleAddProduct = {handleAddProduct}
                        product={pd}
                        ></Product>)
                    }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;