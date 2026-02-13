import './AboutPage.css';

export function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <h1 className="about-hero__title">Our Brand Story</h1>
          <p className="about-hero__subtitle">
            Crafting luxury that whispers, not shouts
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="story-main">
        <div className="container story-container">
          <div className="story-col">
            <h2 className="story-heading">The Beginning</h2>
            <p className="story-text">
              Dhvani was born from a simple realization: luxury should be accessible to everyone who appreciates it. 
              Inspired by the world's finest jewellery houses, we set out to create premium imitation pieces that capture 
              the essence of elegance without the extravagant price tag.
            </p>
            <p className="story-text">
              Every piece is designed with the modern woman in mind—one who values quality, craftsmanship, and the freedom 
              to express her unique style.
            </p>
          </div>

          <div className="story-col">
            <img 
              src="https://i.pinimg.com/1200x/2c/0f/c2/2c0fc2be76660a3371208cce64a72c71.jpg"
              alt="Brand Heritage"
              className="story-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <h2 className="values-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">✧</div>
              <h3 className="value-heading">Premium Quality</h3>
              <p className="value-text">
                We never compromise on materials or craftsmanship. Each piece is meticulously crafted to last.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">◇</div>
              <h3 className="value-heading">Timeless Design</h3>
              <p className="value-text">
                Our collections transcend trends. We create pieces that feel as relevant today as they will be years from now.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">❖</div>
              <h3 className="value-heading">Inclusive Luxury</h3>
              <p className="value-text">
                Luxury shouldn't be exclusive. We believe everyone deserves to feel beautiful and confident.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">✦</div>
              <h3 className="value-heading">Ethical Practices</h3>
              <p className="value-text">
                We're committed to responsible sourcing and sustainable practices across our entire operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Visual */}
      {/* <section className="journey-section">
        <div className="container">
          <h2 className="journey-title">Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">2020</div>
              <div className="timeline-content">
                <h4>Founded</h4>
                <p>Dhvani was established with a vision to redefine luxury jewellery.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">2021</div>
              <div className="timeline-content">
                <h4>First Collection</h4>
                <p>Launched our signature emerald and gold collection to rave reviews.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">2022</div>
              <div className="timeline-content">
                <h4>Expansion</h4>
                <p>Grew to serve customers across India with pan-India shipping capability.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">2023</div>
              <div className="timeline-content">
                <h4>Community</h4>
                <p>Built a loyal community of women who believe in quiet luxury.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">2024</div>
              <div className="timeline-content">
                <h4>Innovation</h4>
                <p>Introduced new collections blending traditional craftsmanship with modern design.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Mission */}
      {/* <section className="mission-section">
        <div className="container">
          <div className="mission-box">
            <h2 className="mission-title">Our Mission</h2>
            <p className="mission-text">
              To empower women through accessible luxury, celebrating their individuality, confidence, and timeless elegance. 
              Every piece tells a story—yours.
            </p>
          </div>
        </div>
      </section> */}

      {/* Craftsmanship */}
      <section className="craftsmanship-section">
        <div className="container">
          <h2 className="section-title">Craftsmanship</h2>
          <div className="craftsmanship-grid">
            <div className="craft-card">
              <div className="craft-number">01</div>
              <h3 className="craft-title">Design</h3>
              <p className="craft-text">Every design begins with inspiration from global luxury trends and timeless elegance.</p>
            </div>

            <div className="craft-card">
              <div className="craft-number">02</div>
              <h3 className="craft-title">Selection</h3>
              <p className="craft-text">We select only the finest materials to ensure durability and premium appearance.</p>
            </div>

            <div className="craft-card">
              <div className="craft-number">03</div>
              <h3 className="craft-title">Crafting</h3>
              <p className="craft-text">Master artisans meticulously handcraft each piece with uncompromising attention to detail.</p>
            </div>

            <div className="craft-card">
              <div className="craft-number">04</div>
              <h3 className="craft-title">Quality</h3>
              <p className="craft-text">Rigorous quality checks ensure every piece meets our exacting standards before shipment.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
