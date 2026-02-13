# Design System & Features Guide

## 🎨 Visual Identity

### Color Palette

#### Primary Colors
- **Deep Emerald Green** (`#1b5e4a`) - Main brand color, royal and sophisticated
- **Darker Green** (`#0f4a37`) - Hover states and accents
- **Light Green** (`#2d7a66`) - Lighter variant for backgrounds

#### Accent Colors
- **Champagne Gold** (`#d4a574`) - Main accent for CTAs and highlights
- **Pale Gold** (`#e8c9a0`) - Muted variant for soft accents
- **Muted Gold** (`#c9a876`) - Slightly darker variant

#### Neutral Colors
- **Ivory** (`#faf8f5`) - Primary background, warm off-white
- **Warm White** (`#f5f3f1`) - Secondary background
- **Light Cream** (`#fffbf7`) - Alternative background
- **Black** (`#1a1a1a`) - Text color, deep black
- **Dark Gray** (`#3a3a3a`) - Secondary text
- **Medium Gray** (`#666666`) - Placeholder/muted text
- **Light Gray** (`#e0e0e0`) - Borders and dividers

### Typography

#### Font Families
- **Headings**: Playfair Display (serif)
  - Elegant, luxury fashion aesthetic
  - Used for h1-h6 elements
  - Font weight: 600-700
  
- **Body**: Poppins (sans-serif)
  - Clean, modern, highly readable
  - Used for paragraphs and body text
  - Font weight: 400-600

#### Font Sizes
```
h1: 3rem (48px)
h2: 2rem (32px)
h3: 1.5rem (24px)
h4: 1.25rem (20px)
h5: 1rem (16px)
Body: 1rem (16px)
Small: 0.875rem (14px)
Extra Small: 0.75rem (12px)
```

#### Line Heights
- Tight: 1.2 (headings)
- Normal: 1.5 (default)
- Relaxed: 1.8 (body text)
- Loose: 2 (quotes)

### Spacing System

```
xs: 4px (0.25rem)
sm: 8px (0.5rem)
md: 16px (1rem)
lg: 24px (1.5rem)
xl: 32px (2rem)
xxl: 48px (3rem)
xxxl: 64px (4rem)
```

### Shadows

```
sm: 0 1px 3px rgba(26, 26, 26, 0.08)
base: 0 4px 12px rgba(26, 26, 26, 0.12)
md: 0 8px 24px rgba(26, 26, 26, 0.15)
lg: 0 12px 32px rgba(26, 26, 26, 0.18)
```

### Transitions

```
fast: 150ms ease-in-out
base: 300ms ease-in-out
slow: 500ms ease-in-out
slowest: 800ms ease-in-out
```

## 📐 Layout System

### Container System
- Default: max-width 1280px
- Responsive padding based on screen size
- Mobile (< 768px): 16px padding
- Tablet (768px - 1024px): 24px padding
- Desktop (> 1024px): 32px padding

### Grid System
- **Hero/Sections**: 1-2 column layouts
- **Collections**: 4-column grid on desktop, 2 on tablet, 1 on mobile
- **Features/Values**: 4-column grid responsively
- **FAQ**: 3-column grid on desktop, 1 on mobile

## 🎯 Design Components

### Hero Section
- Full-width gradient background (green primary colors)
- Large headline (3rem) with emotional copy
- Prominent CTA button (accent color)
- Optional image/visual element
- Fade-in animations on load

### Feature Cards
- 4-column grid layout
- White background with subtle shadow
- Icon or number display
- Hover lift effect (transform translate)
- Smooth shadow transition

### Product Cards
- Aspect ratio 1:1 square images
- Hover zoom effect on image (1.05x)
- Favorite button with toggle state
- Product name (serif) and category
- Price with original price struck-through
- Discount badge (if applicable)

### Buttons

#### Primary Button
- Background: Deep green
- Text: White/Ivory
- Hover: Darker green + shadow
- Use: Main navigation CTAs

#### Accent Button
- Background: Champagne gold
- Text: Black
- Hover: Muted gold + shadow
- Use: Shop now, View details, Add to cart

#### Secondary Button
- Background: Transparent
- Border: Green
- Text: Green
- Hover: Green background + white text
- Use: Alternative actions

#### Ghost Button
- Background: Transparent
- Border: None
- Text: Gray
- Hover: Green text + gold underline
- Use: Links, subtle actions

### Forms
- Clean input fields with gentle borders
- Focus states with gold color and soft shadow
- Labels above inputs
- Consistent padding and spacing
- Clear error states (if implemented)

### Navigation
- Sticky header with white background
- Underline animation on hover
- Mobile hamburger menu
- Smooth transitions

## 🎞️ Animations

### Page Load Animations
- **fadeIn**: 300ms ease-in-out (default fade)
- **fadeInUp**: 300ms ease-in-out (fade + slide up)
- **slideInLeft/Right**: 300ms ease-in-out
- **scaleIn**: 300ms ease-in-out

### Interaction Animations
- Button hover: 300ms color + shadow transition
- Card hover: 300ms lift + shadow
- Product hover: 500ms image zoom
- Link hover: 300ms color shift + border

### Scroll Animations
- Lazy fade-in on scroll (if using observer)
- Staggered product card appearance
- Timeline animations on about page

## 🧩 Responsive Breakpoints

```css
Mobile: < 480px
Tablet: 480px - 768px
Desktop: 768px - 1024px
Wide: 1024px - 1280px
Ultra-wide: > 1536px
```

### Mobile-First Approach
- Base styles work on mobile
- Progressively enhance for larger screens
- Media query min-width approach

### Key Changes by Breakpoint
- **Mobile**: 1-column layouts, hamburger menu, 14px minimum text
- **Tablet**: 2-column grids, simplified navigation
- **Desktop**: 4-column grids, full navigation, larger spacing

## 📱 Mobile Optimizations

- Touch-friendly button sizes (minimum 44x44px)
- Increased tap targets on mobile
- Simplified navigation on small screens
- Stack layouts vertically
- Larger text on mobile for readability
- Optimized image sizes

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy, form labels
- **Color Contrast**: All text meets AA standards
- **Focus States**: Visible outlines on interactive elements
- **Keyboard Navigation**: Full keyboard support
- **ARIA Labels**: Descriptive labels on icons
- **Alt Text**: All images have descriptive alt text

## 🎨 Design Principles Applied

1. **White Space**: Generous padding and margins for breathing room
2. **Luxury**: Premium materials and finishes through careful typography
3. **Minimal Clutter**: Only essential information displayed
4. **Emotional**: Soft colors and smooth animations create calm feel
5. **Consistent**: Unified design language across all pages
6. **Accessible**: Inclusive design for all users
7. **Responsive**: Works seamlessly on all devices

## 🚀 Performance Considerations

- CSS animations use `transform` and `opacity` for GPU acceleration
- Smooth 60fps transitions
- Lazy loading ready for images
- Minimal reflows with careful CSS selectors
- Clean component structure for efficient rendering

## 🎭 Visual Hierarchy

1. **Primary**: Hero titles (h1, 3rem, emerald green)
2. **Secondary**: Section titles (h2, 2rem, emerald green)
3. **Tertiary**: Component headings (h3-h4, serif, green)
4. **Body**: Regular text (Poppins, dark gray)
5. **Accent**: Gold for CTAs and highlights
6. **Muted**: Light gray for secondary information

---

This design system ensures a cohesive, luxury brand experience across all pages and devices.
