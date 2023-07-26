import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product.jsx';
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {

        // const url = `https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`
        fetch('/public/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className="shop-container">
                <div className="products-container">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product = {product}
                        ></Product>)
                    }
                </div>
                <div className="card-container">
                    <h4>Order Summary</h4>
                </div>
            </div>

        </div>
    );
};

export default Shop;