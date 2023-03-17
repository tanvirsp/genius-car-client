import React from 'react';
import "./ProductItem.css";

const ProductItem = ({product}) => {
    const {img, title, rating, price } = product;
    return (
        <div className='product-grid-item'>
            <img src={img} alt="" />
            <h4>{rating}</h4>
            <h3>{title}</h3>
            <h4>${price}</h4>
            
            
        </div>
    );
};

export default ProductItem;