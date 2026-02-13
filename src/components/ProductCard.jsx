import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './ProductCard.css';

export function ProductCard({ product }) {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card__image-wrapper">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-card__image"
        />
        <div className="product-card__overlay">
          <span className="product-card__label">View Details</span>
        </div>
      </div>

      <button
        className={`product-card__favorite ${isFavorited ? 'product-card__favorite--active' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          setIsFavorited(!isFavorited);
        }}
      >
        <Heart size={20} />
      </button>

      <div className="product-card__content">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__category">{product.category}</p>
        <div className="product-card__footer">
          <span className="product-card__price">₹{product.price}</span>
          {product.originalPrice && (
            <span className="product-card__original-price">₹{product.originalPrice}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
