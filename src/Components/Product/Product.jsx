import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'

const Product = (props) => {
    // console.log(props.product.na);
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const { img, name, seller, quantity, price, ratings } = props.product;
    const handlerAddToCart=props.handlerAddToCart;
    
    return (
      <div className="product">
        <img src={img} alt="" />
        <div className="product-Info">
          <h6 className="product-Name">{name} </h6>
          <p>Price: ${price} </p>
          <p>Manufacturing: {seller}</p>
          <p className='product-rating'>Rating: {ratings} star </p>
        </div>
        <button onClick={()=>handlerAddToCart(props.product)} className="btn-cart">Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
      </div>
    );
  };

export default Product;
