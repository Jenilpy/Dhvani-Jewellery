import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Header.css';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container container">
        <Link to="/" className="header__logo">
          Dhvani JEWELLERY
        </Link>

        <nav className={`header__nav ${isOpen ? 'header__nav--open' : ''}`}>
          <Link to="/" className="header__link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="header__link" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="header__link" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>

        <button 
          className="header__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
