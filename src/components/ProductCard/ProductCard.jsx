import React from "react";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../store/cartStore";
import "./ProductCard.css";

function slugify(text) {
    if (!text) return "";
    return text.toLowerCase().replace(/\s+/g, "-");
}

const ProductCard = ({ product }) => {
    const qty = useCartStore((state) => state.cart[product?.id]?.qty || 0);
    const addItem = useCartStore((state) => state.addItem);
    const removeItem = useCartStore((state) => state.removeItem);
    const navigate = useNavigate();

    if (!product) return null;

    const handleCardClick = () => {
        navigate(`/pn/${slugify(product.name)}/pvid/${product.id}`);
    };

    const handleAddClick = (e) => {
        e.stopPropagation();
        addItem(product);
    };

    const handleRemoveClick = (e) => {
        e.stopPropagation();
        removeItem(product.id);
    };

    const handlePlusClick = (e) => {
        e.stopPropagation();
        addItem(product);
    };

    return (
        <article
            className="product-card"
            onClick={handleCardClick}
            aria-label={`View details for ${product.name}`}
        >
            <div className="card-image-container">
                <img
                    src={product.img || "https://via.placeholder.com/150?text=No+Image"}
                    alt={product.name}
                    className="product-image"
                    loading="lazy"
                />

                <div className="cart-controls">
                    {qty === 0 ? (
                        <button
                            className="add-btn"
                            onClick={handleAddClick}
                            aria-label={`Add ${product.name} to cart`}
                        >
                            +
                        </button>
                    ) : (
                        <div className="qty-controls" onClick={(e) => e.stopPropagation()}>
                            <button
                                className="qty-btn minus"
                                onClick={handleRemoveClick}
                                aria-label="Decrease quantity"
                            >
                                −
                            </button>
                            <span className="qty-text">{qty}</span>
                            <button
                                className="qty-btn plus"
                                onClick={handlePlusClick}
                                aria-label="Increase quantity"
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="card-content">
                <h3 className="product-name" title={product.name}>
                    {product.name}
                </h3>
                <p className="product-price">₹{product.price}</p>
            </div>
        </article>
    );
};

export default ProductCard;
