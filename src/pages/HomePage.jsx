import { ArrowRight } from 'lucide-react';
import { Button } from '../components';
import './pages.css';
import './HomePage.css';

const reviews = [
  {
    id: 1,
    name: 'Bhavya',
    text: 'The quality is immaculate. Every piece feels luxurious and the packaging is gorgeous.',
    rating: 5
  },
  {
    id: 2,
    name: 'Jeshan',
    text: 'I received compliments all evening! Worth every rupee. Highly recommended.',
    rating: 4
  },
  {
    id: 3,
    name: 'Priya Singh',
    text: 'Perfect for my wedding. The emerald necklace is absolutely stunning.',
    rating: 5
  }
];

const features = [
  {
    title: 'Premium Finish',
    description: 'Crafted with meticulous attention to detail using the finest materials'
  },
  {
    title: 'Elegant Packaging',
    description: 'Each piece arrives wrapped beautifully, ready for gifting'
  },
  {
    title: 'Pan-India Shipping',
    description: 'Safe, timely delivery to every corner of the country'
  },
  {
    title: 'Secure Payment',
    description: 'Your transactions are protected with encrypted security'
  }
];

export function HomePage() {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">Jewellery That Speaks Before You Do</h1>
          <p className="hero__subtitle">
            Premium imitation jewellery designed for women who love quiet luxury and timeless elegance
          </p>
          <a href="#contact">
            <Button variant="accent" size="lg">
              Get in Touch
              <ArrowRight style={{ marginLeft: '0.5rem', width: '1rem', height: '1rem' }} />
            </Button>
          </a>
        </div>
        <div className="hero__image">
          <img 
            src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop"
            alt="Luxury jewellery editorial"
            className="hero__img"
            loading="lazy"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Dhvani JEWELLERY ?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card fade-in-up">
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__text">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="story-section">
        <div className="story-wrapper">
          <div className="story-image">
          <img 
            src="https://i.pinimg.com/1200x/a3/96/94/a39694c93d528887efd217f1130e3fa6.jpg"
            alt="Brand Story"
            className="story-img"
            loading="lazy"
          />
          </div>
          <div className="story-content container">
            <h2 className="section-title">Our Story</h2>
            <p className="story-text">
              Dhvani JEWELLERY was born from a simple belief: luxury doesn't have to scream loudly. It whispers. It reflects in the eyes of someone who knows the value of refined elegance.
            </p>
            <p className="story-text">
              Every piece in our collection is carefully curated for the modern woman—one who understands that true style is about confidence, authenticity, and the freedom to express herself without compromise.
            </p>
            <p className="story-text">
              We believe that everyone deserves to feel like their best self. That's why we've committed to creating premium-quality imitation jewellery that feels as luxurious as it looks.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Collections Section */}
      <section className="collections-section">
        <div className="container">
          <h2 className="section-title">Collections</h2>
          <div className="coming-soon-box">
            <div className="coming-soon-content">
              <h3 className="coming-soon-title">Curated Collections</h3>
              <p className="coming-soon-text">
                We're carefully curating our exclusive collections to bring you the finest selections. 
                Each piece is handpicked with meticulous attention to detail and quality.
              </p>
              <p className="coming-soon-subtitle">Coming Soon</p>
              <Button variant="secondary" size="md">
                Notify Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <div className="container">
          <h2 className="section-title">Customer's Love</h2>
          <div className="reviews-grid">
            {reviews.map((review) => (
              <div key={review.id} className="review-card fade-in-up">
                <div className="review-stars">
                  {'★'.repeat(review.rating)}
                </div>
                <p className="review-text">"{review.text}"</p>
                <p className="review-author">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="contact">
        <div className="container">
          <h2>Get in Touch</h2>
          <p>Questions? We'd love to hear from you. Reach out to us anytime.</p>
          <a href="https://wa.me/919924199264" target="_blank" rel="noopener noreferrer">
            <Button variant="accent" size="lg">
              Chat on WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
}
