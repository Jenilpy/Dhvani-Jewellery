import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ProductCard } from '../components';
import './ShopPage.css';

const allProducts = [
  {
    id: 1,
    name: 'Emerald Statement Necklace',
    category: 'Necklaces',
    price: 2499,
    originalPrice: 3499,
    occasion: 'Party',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop'
  },
  {
    id: 2,
    name: 'Drop Pearl Earrings',
    category: 'Earrings',
    price: 1299,
    occasion: 'Everyday',
    image: 'https://images.unsplash.com/photo-1599643478553-31a61a9c4acf?w=500&h=500&fit=crop'
  },
  {
    id: 3,
    name: 'Gold Leaf Bracelet',
    category: 'Bracelets',
    price: 1899,
    occasion: 'Party',
    image: 'https://images.unsplash.com/photo-1599643478583-b381a8f6f6d5?w=500&h=500&fit=crop'
  },
  {
    id: 4,
    name: 'Vintage Ring Set',
    category: 'Rings',
    price: 999,
    occasion: 'Everyday',
    image: 'https://images.unsplash.com/photo-1599643478447-1dc79a1ba10f?w=500&h=500&fit=crop'
  },
  {
    id: 5,
    name: 'Chandelier Earrings',
    category: 'Earrings',
    price: 1599,
    occasion: 'Wedding',
    image: 'https://images.unsplash.com/photo-1599643478468-8c3f9e1b6b8f?w=500&h=500&fit=crop'
  },
  {
    id: 6,
    name: 'Layered Necklace Set',
    category: 'Necklaces',
    price: 2199,
    occasion: 'Party',
    image: 'https://images.unsplash.com/photo-1599643478493-8d5b3b8c8f6?w=500&h=500&fit=crop'
  },
  {
    id: 7,
    name: 'Bangles Collection',
    category: 'Bracelets',
    price: 1499,
    occasion: 'Wedding',
    image: 'https://images.unsplash.com/photo-1599643478523-3e1b9b9b9f6?w=500&h=500&fit=crop'
  },
  {
    id: 8,
    name: 'Stud Earrings',
    category: 'Earrings',
    price: 799,
    occasion: 'Everyday',
    image: 'https://images.unsplash.com/photo-1599643478549-1b9c1b9c9f6?w=500&h=500&fit=crop'
  },
];

export function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedOccasion, setSelectedOccasion] = useState('All');
  const [priceRange, setPriceRange] = useState(5000);
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['All', 'Necklaces', 'Earrings', 'Bracelets', 'Rings'];
  const occasions = ['All', 'Everyday', 'Party', 'Wedding'];

  let filteredProducts = allProducts.filter(product => {
    const matchCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchOccasion = selectedOccasion === 'All' || product.occasion === selectedOccasion;
    const matchPrice = product.price <= priceRange;
    return matchCategory && matchOccasion && matchPrice;
  });

  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'newest') {
    filteredProducts.reverse();
  }

  return (
    <main className="shop-page">
      {/* Hero */}
      <section className="shop-hero">
        <div className="container">
          <h1 className="shop-hero__title">Our Collections</h1>
          <p className="shop-hero__subtitle">
            Discover our curated selection of premium jewellery
          </p>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="shop-content">
        <div className="container shop-layout">
          {/* Sidebar Filters */}
          <aside className="filters-sidebar">
            <h3 className="filters__title">Filters</h3>

            {/* Category Filter */}
            <div className="filter-group">
              <h4 className="filter-group__title">Category</h4>
              <div className="filter-options">
                {categories.map(cat => (
                  <label key={cat} className="filter-label">
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat)}
                      className="filter-input"
                    />
                    <span className="filter-text">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Occasion Filter */}
            <div className="filter-group">
              <h4 className="filter-group__title">Occasion</h4>
              <div className="filter-options">
                {occasions.map(occ => (
                  <label key={occ} className="filter-label">
                    <input
                      type="radio"
                      name="occasion"
                      value={occ}
                      checked={selectedOccasion === occ}
                      onChange={() => setSelectedOccasion(occ)}
                      className="filter-input"
                    />
                    <span className="filter-text">{occ}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="filter-group">
              <h4 className="filter-group__title">Price Range</h4>
              <div className="price-range">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="price-slider"
                />
                <p className="price-value">₹{priceRange}</p>
              </div>
            </div>
          </aside>

          {/* Products Section */}
          <div className="products-section">
            {/* Sort Controls */}
            <div className="sort-control">
              <p className="product-count">
                Showing {filteredProducts.length} products
              </p>
              <div className="sort-dropdown">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="products-grid">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="no-products">
                <p>No products found. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
