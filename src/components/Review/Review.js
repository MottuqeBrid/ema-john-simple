import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);


    const hendlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }


    const removeProduct = (productKeys) => {
        const newCart = cart.filter(pd => pd.key !== productKeys);
        setCart(newCart);
        removeFromDatabaseCart(productKeys);
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(cartProducts);
    }, []);

    let thankyou
    if (orderPlaced) {
        thankyou = <img src={happyImage} alt="" />
    }

    return (
        <div className='twin-container'>
            <div className='products-container'>
                {/* <h1>Cart Items: {cart.length}</h1> */}
                {
                    cart.map(pd => <ReviewItem
                        key={pd.key}
                        product={pd}
                        removeProduct={removeProduct}
                    ></ReviewItem>)
                }
                {thankyou}
            </div>
            <div className='products-container'>
                <Cart cart={cart} >
                    <Link>
                        <button onClick={hendlePlaceOrder} className='main-button'>Place Order</button>
                    </Link>
                </Cart >
            </div>
        </div>
    );
};

export default Review;