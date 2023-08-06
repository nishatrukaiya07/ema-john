import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
import './Shop.css';
import Product from '../Product/Product.jsx';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {

        // const url = `https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`
        fetch('/public/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

useEffect(()=> {
    const storedCart = getShoppingCart();
    console.log(storedCart);
}, [])

    const handlerAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart); 
        // console.log(product)
        addToDb(product.id)
      }
    return (
        <div>
            <div className="shop-container">
                <div className="products-container">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product = {product}
                            handlerAddToCart={handlerAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="card-container">
                    
                   <Cart cart = {cart}></Cart>
                </div>
            </div>

        </div>
    );
};

export default Shop;

