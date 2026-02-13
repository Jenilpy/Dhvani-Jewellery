import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Heart, ChevronRight } from 'lucide-react';
import { Button } from '../components';
import './ProductPage.css';

const allProducts = [
  {
    id: 1,
    name: 'Emerald Statement Necklace',
    category: 'Necklaces',
    price: 2499,
    originalPrice: 3499,
    stock: 12,
    description: 'A stunning emerald-green statement necklace that embodies luxury and timeless elegance.',
    details: 'Crafted with premium materials and meticulous attention to detail. Perfect for special occasions or everyday luxury.',
    materials: '24K Gold Plated, Cubic Zirconia, Alloy',
    length: '45cm (adjustable)',
    care: 'Avoid contact with perfume and water. Store in a cool, dry place.',
    shipping: 'Pan-India shipping available. Typically delivered within 5-7 business days.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1599643478468-8c3f9e1b6b8f?w=600&h=600&fit=crop',
    ]
  },
  {
    id: 2,
    name: 'Drop Pearl Earrings',
    category: 'Earrings',
    price: 1299,
    stock: 8,
    description: 'Elegant drop pearl earrings that add a touch of grace to any look.',
    details: 'Lightweight yet striking, these earrings are perfect for everyday wear or special occasions.',
    materials: 'Pearl, Gold Plated, Alloy',
    length: '3cm',
    care: 'Clean with a soft cloth. Avoid direct sunlight.',
    shipping: 'Nationwide delivery in 5-7 business days.',
    images: [
      'https://images.unsplash.com/photo-1599643478553-31a61a9c4acf?w=600&h=600&fit=crop',
    ]
  },
];

export function ProductPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isFavorited, setIsFavorited] = useState(false);
  const [activeTab, setActiveTab] = useState('details');
  const [selectedImage, setSelectedImage] = useState(0);

  const product = allProducts.find(p => p.id === parseInt(id)) || allProducts[0];

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  const handleBuyNow = () => {
    console.log(`Buying now: ${quantity} of ${product.name}`);
  };

  return (
    <main className="product-page">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <a href="/" className="breadcrumb__link">Home</a>
          <ChevronRight size={16} />
          <a href="/shop" className="breadcrumb__link">{product.category}</a>
          <ChevronRight size={16} />
          <span>{product.name}</span>
        </div>

        {/* Product Layout */}
        <div className="product-layout">
          {/* Image Gallery */}
          <div className="product-gallery">
            <div className="gallery-main">
              <img 
                src={product.images[selectedImage]}
                alt={product.name}
                className="gallery-image"
              />
              <button className="favorite-btn" onClick={() => setIsFavorited(!isFavorited)}>
                <Heart size={24} fill={isFavorited ? 'currentColor' : 'none'} />
              </button>
            </div>
            {product.images.length > 1 && (
              <div className="gallery-thumbnails">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`thumbnail ${selectedImage === idx ? 'thumbnail--active' : ''}`}
                    onClick={() => setSelectedImage(idx)}
                  >
                    <img src={img} alt={`View ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="product-info">
            <div className="product-header">
              <p className="product-category">{product.category}</p>
              <h1 className="product-title">{product.name}</h1>
              <p className="product-description">{product.description}</p>
            </div>

            {/* Price and Stock */}
            <div className="product-pricing">
              <div className="price-group">
                <span className="price">₹{product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="original-price">₹{product.originalPrice}</span>
                    <span className="discount">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>
              <p className={`stock ${product.stock > 0 ? 'stock--available' : 'stock--unavailable'}`}>
                {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="quantity-selector">
              <label htmlFor="quantity">Quantity:</label>
              <div className="quantity-control">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                <input 
                  id="quantity"
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                  max={product.stock}
                />
                <button onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}>+</button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="product-actions">
              <Button 
                variant="accent" 
                size="lg" 
                fullWidth
                onClick={handleAddToCart}
                disabled={product.stock === 0}
              >
                <ShoppingCart size={20} />
                Add to Cart
              </Button>
              <Button 
                variant="primary" 
                size="lg" 
                fullWidth
                onClick={handleBuyNow}
                disabled={product.stock === 0}
              >
                Buy Now
              </Button>
            </div>

            {/* Trust Elements */}
            <div className="trust-elements">
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span>Secure Payment</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span>Pan-India Shipping</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span>Cash on Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="product-tabs">
          <div className="tabs-header">
            <button
              className={`tab-button ${activeTab === 'details' ? 'tab-button--active' : ''}`}
              onClick={() => setActiveTab('details')}
            >
              Details
            </button>
            <button
              className={`tab-button ${activeTab === 'care' ? 'tab-button--active' : ''}`}
              onClick={() => setActiveTab('care')}
            >
              Care
            </button>
            <button
              className={`tab-button ${activeTab === 'shipping' ? 'tab-button--active' : ''}`}
              onClick={() => setActiveTab('shipping')}
            >
              Shipping
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'details' && (
              <div className="tab-panel fade-in-up">
                <p className="tab-text">{product.details}</p>
                <div className="details-list">
                  <div className="detail-row">
                    <span className="detail-label">Materials:</span>
                    <span className="detail-value">{product.materials}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Dimensions:</span>
                    <span className="detail-value">{product.length}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'care' && (
              <div className="tab-panel fade-in-up">
                <p className="tab-text">{product.care}</p>
                <ul className="care-list">
                  <li>Handle with care to maintain the premium finish</li>
                  <li>Store separately to avoid scratches</li>
                  <li>Clean gently with a soft, dry cloth</li>
                  <li>Keep away from harsh chemicals and moisture</li>
                </ul>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="tab-panel fade-in-up">
                <p className="tab-text">{product.shipping}</p>
                <p className="tab-text">
                  We carefully package each piece to ensure it reaches you in perfect condition. 
                  All orders include complimentary elegant packaging.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
