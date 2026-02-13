import { Mail, Phone, MapPin, Copy } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components';
import './ContactPage.css';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-hero__title">Get in Touch</h1>
          <p className="contact-hero__subtitle">
            We'd love to hear from you. Let's start a conversation.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="contact-content">
        <div className="container contact-layout">
          {/* Contact Info */}
          <div className="contact-info">
            <h2 className="info-title">Reach Out</h2>

            <div className="contact-card">
              <div className="contact-card__icon">
                <Mail size={24} />
              </div>
              <div className="contact-card__content">
                <h3>Email</h3>
                <p>dhvanijewellery@gmail.com</p>
                <button 
                  className="copy-btn"
                  onClick={() => copyToClipboard('dhvanijewellery@gmail.com')}
                >
                  <Copy size={16} />
                </button>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon">
                <Phone size={24} />
              </div>
              <div className="contact-card__content">
                <h3>WhatsApp</h3>
                <p>+91 99241 99264</p>
                <a 
                  href="https://wa.me/919924199264"
                  className="whatsapp-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with us
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon">
                <MapPin size={24} />
              </div>
              <div className="contact-card__content">
                <h3>Based In</h3>
                <p>India</p>
                <p className="text-muted">Serving pan-India from our studio</p>
              </div>
            </div>

            <div className="social-connect">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="https://www.instagram.com/dhvani.jewellery/" target="_blank" rel="noopener noreferrer" className="social-link">
                  Instagram
                </a>
                <a href="https://www.facebook.com/dhvani.jewellery" target="_blank" rel="noopener noreferrer" className="social-link">
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h2 className="form-title">Send us a Message</h2>

            {submitted && (
              <div className="success-message fade-in">
                <p>✓ Thank you for reaching out! We'll be in touch soon.</p>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us more..."
                />
              </div>

              <Button type="submit" variant="accent" size="lg" fullWidth>
                Send Message
              </Button>
            </form>

            <p className="form-note">
              We typically respond within 24 hours during business days.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">How long does shipping take?</h3>
              <p className="faq-answer">
                We ship pan-India and typically deliver within 5-7 business days. Express options available on request.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">What is your return policy?</h3>
              <p className="faq-answer">
                We offer a 7-day return window for unworn items in original packaging. Please contact us for details.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Do you offer custom orders?</h3>
              <p className="faq-answer">
                Yes! We love custom requests. Please reach out via email or WhatsApp to discuss your requirements.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">How do I care for my jewellery?</h3>
              <p className="faq-answer">
                Each piece comes with care instructions. Generally, avoid water and perfume, and store in a dry place.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Is your jewellery hypoallergenic?</h3>
              <p className="faq-answer">
                Our pieces are made with premium materials which are generally hypoallergenic, but individual sensitivities vary.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Do you offer gift wrapping?</h3>
              <p className="faq-answer">
                Every order includes beautiful, complimentary gift wrapping. Perfect for gifting!
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
