

import "./Product.css";
import React, { useState } from "react";

const Product = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="prod">
            <img src={product.image} alt={product.name} className="prod-img" />
            <h3>{product.volume}</h3>
            <div className="quantity-control">
                <span className="price">{product.price*quantity}₽</span>
                <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className="quantity-btn">-</button>
                <span className="bottle-quantity">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="quantity-btn">+</button>
            </div>
            <button className="product-order-button">Заказать</button>
        </div>
    );
};

export default Product;
