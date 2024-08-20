import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props)
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div >
                <img className="product-img" src={img} alt="This is Product Image" />
            </div>
            <div className="">
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <br />
                <p><small>Only {stock} left in stock order soon</small></p>
                <button
                    onClick={() => props.handleAddProduct(props.product)}
                    className='main-button'
                >
                    <FontAwesomeIcon icon={faCartShopping} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;