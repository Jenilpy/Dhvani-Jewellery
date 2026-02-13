# Dhvani JEWELLERY - Premium Luxury Jewellery Website

A sophisticated, minimal, and elegant prototype website for Dhvani JEWELLERY—a premium imitation jewellery brand designed for women who love quiet luxury and timeless elegance.

## 🎨 Design Philosophy

This website embodies the brand's core values:
- **Minimal & Elegant**: Generous white space, soft animations, smooth transitions
- **Luxury Aesthetic**: Editorial fashion-brand style with refined typography
- **Premium Feel**: Deep emerald green, soft champagne gold, and warm ivory color palette
- **Emotional Connection**: Calm, sophisticated, and exclusive brand positioning

## 🎯 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── Button.jsx          # Primary CTA button with variants
│   ├── Button.css          # Button styles
│   ├── Header.jsx          # Navigation header with mobile menu
│   ├── Header.css          # Header styles
│   ├── Footer.jsx          # Footer with links and social
│   ├── Footer.css          # Footer styles
│   ├── ProductCard.jsx     # Product display card
│   ├── ProductCard.css     # Product card styles
│   └── index.js            # Component exports
│
├── pages/                  # Page components
│   ├── HomePage.jsx        # Hero, features, story, collections, reviews
│   ├── HomePage.css        # Home page styles
│   ├── ShopPage.jsx        # Product grid with filters
│   ├── ShopPage.css        # Shop page styles
│   ├── ProductPage.jsx     # Product details with gallery & tabs
│   ├── ProductPage.css     # Product page styles
│   ├── AboutPage.jsx       # Brand story, values, journey, craftsmanship
│   ├── AboutPage.css       # About page styles
│   ├── ContactPage.jsx     # Contact form, FAQs, social links
│   ├── ContactPage.css     # Contact page styles
│   ├── pages.css           # Shared page styles
│   └── index.js            # Page exports
│
├── theme/
│   └── design.js           # Design system (colors, typography, spacing)
│
├── App.jsx                 # Main app with routing
├── App.css                 # App layout styles
├── index.css               # Global styles and animations
└── main.jsx                # Entry point
```

## 🎨 Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Primary | Deep Emerald Green | `#1b5e4a` |
| Primary Dark | Darker Green | `#0f4a37` |
| Primary Light | Light Green | `#2d7a66` |
| Accent | Champagne Gold | `#d4a574` |
| Accent Light | Pale Gold | `#e8c9a0` |
| Secondary | Ivory/Off-white | `#faf8f5` |
| Text | Deep Black | `#1a1a1a` |

## 📝 Typography

- **Headings**: Playfair Display (serif) - Elegant, luxury fashion style
- **Body**: Poppins (sans-serif) - Clean, modern, readable

## 📄 Pages

### 1. **Home Page** (`/`)
- Hero section with emotional headline
- Features grid (Premium Finish, Elegant Packaging, Pan-India Shipping, Secure Payment)
- Brand story section with image
- Featured collections (4-product grid)
- Customer reviews section
- Call-to-action banner

### 2. **Shop Page** (`/shop`)
- Clean grid layout with large product cards
- Sidebar filters:
  - Category (Necklaces, Earrings, Bracelets, Rings)
  - Occasion (Everyday, Party, Wedding)
  - Price range slider
- Sort options (Featured, Newest, Price: Low-High, High-Low)
- Responsive 4-column grid on desktop, 1-2 columns on mobile

### 3. **Product Page** (`/product/:id`)
- Large product image gallery with zoom
- Product information panel with price and stock
- Quantity selector
- Add to Cart & Buy Now buttons
- Three informational tabs:
  - Details (Materials, dimensions)
  - Care (Maintenance instructions)
  - Shipping (Delivery information)
- Trust elements (Secure Payment, Pan-India Shipping, COD)

### 4. **About Page** (`/about`)
- Brand story with timeline
- Values section (Premium Quality, Timeless Design, Inclusive Luxury, Ethical Practices)
- Journey timeline (2020-2024)
- Mission statement
- Craftsmanship process (4 steps)

### 5. **Contact Page** (`/contact`)
- Contact information cards (Email, WhatsApp, Location)
- Contact form
- FAQ section (6 common questions)
- Social media links
- Call-to-action section

## 🔧 Component Features

### Button Component
- **Variants**: primary, accent, secondary, ghost
- **Sizes**: sm, md, lg
- **Props**: fullWidth, disabled

### Product Card
- Image with zoom hover effect
- Favorite button with toggle state
- Product name, category, price
- Original price with discount display

### Header
- Sticky navigation with menu links
- Mobile-responsive hamburger menu
- Logo with link to home
- Smooth animations

### Footer
- Company description
- Quick links
- Social media icons
- Copyright and policy links

## 🎯 Key Features

✨ **Visual Excellence**
- Smooth fade-in and slide animations
- Hover effects on buttons and product cards
- Responsive grid layouts
- Premium color transitions

🎮 **User Experience**
- Mobile-first responsive design
- Easy navigation with clear CTAs
- Product filtering and sorting
- Contact form with validation
- FAQ section for support

🛍️ **E-commerce Features**
- Product gallery with zoom
- Quantity selector
- Add to cart functionality
- Buy now option
- Wishlist/favorite toggle

📱 **Responsive Design**
- Mobile: 1-column layouts
- Tablet: 2-column grids
- Desktop: 4-column grids
- Sticky navigation on desktop

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server

The development server runs on `http://localhost:5173` (or next available port).

Changes to files are automatically reflected in the browser with Hot Module Replacement (HMR).

## 🎨 Customization

### Colors
Edit `src/theme/design.js` for the design system, or update CSS variables in `src/index.css`:

```css
--color-primary-dark-green: #1b5e4a;
--color-accent-gold: #d4a574;
--color-secondary-ivory: #faf8f5;
```

### Typography
Update font families in `src/index.css`:

```css
--font-heading: 'Playfair Display', serif;
--font-body: 'Poppins', sans-serif;
```

### Spacing & Layout
Modify spacing variables in `src/index.css` or `src/theme/design.js`

## 📱 Mobile Optimization

- Fully responsive from 320px to 1920px
- Touch-friendly buttons and interactive elements
- Mobile navigation with hamburger menu
- Optimized images and lazy loading ready
- Viewport meta tags configured

## 🔒 Best Practices Implemented

- Semantic HTML structure
- Accessible color contrasts
- Keyboard navigation support
- Focus states for accessibility
- Mobile-first approach
- Performance-optimized animations

## 📦 Dependencies

- **React 19.2.0** - UI framework
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon library
- **Vite** - Build tool and dev server

## 🎯 Future Enhancements

- Shopping cart functionality
- User authentication and profiles
- Product reviews and ratings
- Blog/content section
- Newsletter subscription
- Payment integration
- Inventory management
- Analytics tracking
- SEO optimization

## 📄 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 🎓 Code Quality

- Clean, component-based architecture
- Consistent naming conventions
- Reusable CSS utilities
- Proper separation of concerns
- Mobile-first CSS approach
- Smooth animations and transitions

## 📝 License

This prototype is created for brand presentation and development purposes.

---

**Created for Dhvani JEWELLERY**  
*Jewellery That Speaks Before You Do*
