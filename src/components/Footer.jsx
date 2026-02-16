import { Mail, Instagram, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">Dhvani Jewellery</h3>
            <p className="footer__text">Premium imitation jewellery for the modern luxe woman.</p>
          </div>

          <div className="footer__section">
            <h4 className="footer__heading">Quick Links</h4>
            <nav className="footer__nav">
              <Link to="/" className="footer__link">Home</Link>
              <Link to="/about" className="footer__link">About</Link>
              <Link to="/contact" className="footer__link">Contact</Link>
            </nav>
          </div>

          <div className="footer__section">
            <h4 className="footer__heading">Connect</h4>
            <div className="footer__socials">
              <a href="https://www.instagram.com/dhvani.jewellery/" className="footer__social" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="mailto:dhvanijewellery@gmail.com" className="footer__social" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="https://wa.me/919924199264" className="footer__social" aria-label="WhatsApp">
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Dhvani Jewellery. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link">Privacy Policy</a>
            <a href="#" className="footer__bottom-link">Terms of Service</a>
            <a href="#" className="footer__bottom-link">Return Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
