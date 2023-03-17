import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import './OurProducts.css';

const OurProducts = () => { 

    const productData = [
        {
            title: "Car Engine Plug",
            price: 20,
            rating: 5,
            img : "https://i.ibb.co/80DnPbx/6.png"
        },
        {
            title: "Car Air Filter",
            price: 20,
            rating: 5,
            img : "https://i.ibb.co/Mp8wM9z/5.png"
        },
        {
            title: "Cools Led Light",
            price: 20,
            rating: 5,
            img : "https://i.ibb.co/Ykqy7PC/4.png"
        },
        {
            title: "Cools Led Light",
            price: 20,
            rating: 5,
            img : "https://i.ibb.co/KKLwzCB/3.png"
        },
        {
            title: "Cools Led Light",
            price: 20,
            rating: 5,
            img : "https://i.ibb.co/z2XWvSp/1.png"
        },
        {
            title: "Cools Led Light",
            price: 20,
            rating: 5,
            img : "https://i.ibb.co/Phdbc4z/2.png"
        },
        
    ]



    return (
        <section className="container">
            <div className="section-header">
                <h4 className='section-title'>Popular Products</h4>
                <h2 className='section-sub-title'>Browse Our Products</h2>
                <p className='section-text'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="product-grid">
                {
                   productData.map(product => <ProductItem product={product} />)
                }
            </div>
        </section>



    );
};

export default OurProducts;

