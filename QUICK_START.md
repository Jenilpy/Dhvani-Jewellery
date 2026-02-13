# Quick Start Guide - Dhvani JEWELLERY Website

## 🚀 Getting the Website Running

### Prerequisites
- Node.js (v16 or higher)
- npm (comes with Node.js)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The website will open at `http://localhost:5173` (or next available port).

### 3. Navigate Pages
- **Home**: http://localhost:5173/
- **Shop**: http://localhost:5173/shop
- **Product**: http://localhost:5173/product/1
- **About**: http://localhost:5173/about
- **Contact**: http://localhost:5173/contact

## 📂 Project Structure Overview

```
src/
├── components/       # Reusable UI elements (Header, Footer, Button, ProductCard)
├── pages/           # Main page components (Home, Shop, Product, About, Contact)
├── theme/           # Design system (colors, typography, spacing)
├── App.jsx          # Main app with routing
├── index.css        # Global styles
└── main.jsx         # Entry point
```

## 🎨 Key Design Files

| File | Purpose |
|------|---------|
| `src/theme/design.js` | Design system with colors, fonts, spacing |
| `src/index.css` | Global styles and animations |
| `src/App.css` | Main app layout |
| `src/components/*.css` | Component-specific styles |
| `src/pages/*Page.css` | Page-specific styles |

## 🎯 Main Pages & Features

### Home Page
- Hero section with CTA
- Features grid
- Brand story
- Featured products
- Customer reviews
- Call-to-action

### Shop Page
- Product grid (4 columns on desktop)
- Sidebar filters (category, occasion, price)
- Sort options
- Responsive layout

### Product Details
- Image gallery
- Product information
- Quantity selector
- Add to cart & Buy now buttons
- Information tabs (Details, Care, Shipping)

### About Page
- Brand story
- Company values
- Timeline of journey
- Craftsmanship process

### Contact Page
- Contact information (Email, WhatsApp)
- Contact form
- FAQ section
- Social media links

## 🎨 Customize Colors

Edit `src/index.css` CSS variables:

```css
:root {
  --color-primary-dark-green: #1b5e4a;    /* Main brand color */
  --color-accent-gold: #d4a574;           /* Gold accents */
  --color-secondary-ivory: #faf8f5;       /* Background */
}
```

## 🏗️ Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder, ready for deployment.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

All pages respond to these breakpoints automatically.

## 🎞️ Animations

The site includes these animations:
- Fade-in effects on page load
- Slide-in animations on scroll
- Hover effects on buttons and cards
- Smooth transitions on all interactions

## 📞 Component Examples

### Button
```jsx
<Button variant="accent" size="lg">Shop Now</Button>
```

### Product Card
```jsx
<ProductCard product={{ id: 1, name: "...", price: 2499, ... }} />
```

## 🔗 File Locations

- **Components**: `src/components/`
- **Pages**: `src/pages/`
- **Styles**: `src/**/*.css`
- **Design System**: `src/theme/design.js`

## ✨ Features Implemented

✅ Luxury design with premium green & gold palette  
✅ Fully responsive (mobile to desktop)  
✅ Smooth animations and transitions  
✅ Product filtering and sorting  
✅ Contact form and FAQ  
✅ Social media integration  
✅ Modern React with hooks  
✅ React Router for navigation  
✅ Lucide icons for UI elements  

## 🚢 Deployment Ready

The website is ready for deployment to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and deploy the `dist/` folder.

## 💡 Tips

- Images are currently using Unsplash URLs. Replace with actual product images.
- Update WhatsApp, email, and social links in components.
- Customize product data in page files.
- Add actual payment integration as needed.
- Implement backend API calls for real shopping functionality.

## 🆘 Troubleshooting

**Port already in use?**
- Vite will automatically use the next available port
- Or specify a port: `npm run dev -- --port 3000`

**Build errors?**
- Clear node_modules: `rm -rf node_modules`
- Reinstall: `npm install`

**Styles not loading?**
- Check CSS import paths
- Ensure .css files are in the same directory as components

---

**Happy coding! Your Dhvani JEWELLERY website is ready to showcase luxury.**
