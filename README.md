# Glamora - Fashion & Beauty E-Commerce Platform

A modern, elegant e-commerce platform built with React, featuring fashion and beauty products with a complete shopping experience.

## 🚀 Features

### Core Functionality
- **User Authentication**: Login and Signup with profile management
- **Product Browsing**: Browse products across Fashion and Beauty categories
- **Search**: Full-text search across all products with real-time results
- **Shopping Cart**: Add to cart, update quantities, and checkout
- **Wishlist**: Save favorite products for later
- **Order Management**: Place orders and track order history
- **User Profile**: Edit personal information and shipping address

### Product Categories
- **Fashion**: Women's, Men's, Kids fashion with subcategories
- **Beauty**: Skincare, Makeup, Haircare, Fragrance
- **Collections**: Summer, Winter, Accessories
- **Special Pages**: New Arrivals, Sale with discounts

### Key Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Persistent data (localStorage for cart, wishlist, user, orders)
- ✅ Product modals with detailed information
- ✅ Smooth animations with Framer Motion
- ✅ Modern UI with Tailwind CSS
- ✅ Error handling and fallback images
- ✅ Search functionality across all categories
- ✅ Order placement with shipping address
- ✅ Profile management

## 🛠️ Tech Stack

- **React 18** - UI library
- **React Router DOM** - Routing
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icons
- **Context API** - State management

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd glamora
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 🚀 Deployment

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

The base path is set to `/feeproject/` in `vite.config.js`. Update this if deploying to a different path.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Home.jsx        # Homepage
│   ├── Navbar.jsx      # Navigation bar
│   ├── Cart.jsx        # Shopping cart
│   ├── Wishlist.jsx    # Wishlist page
│   ├── Profile.jsx     # User profile
│   ├── Orders.jsx      # Order history
│   ├── SearchResults.jsx # Search results
│   ├── Sale.jsx        # Sale page
│   ├── NewArrivals.jsx # New arrivals page
│   └── ...             # Other components
├── context/            # React Context providers
│   ├── CartContext.jsx
│   ├── WishlistContext.jsx
│   ├── UserContext.jsx
│   └── OrdersContext.jsx
├── data/               # Data files
│   └── allProducts.js  # Product data
└── App.jsx             # Main app component
```

## 🎨 Design Features

- Elegant serif fonts for headings
- Rose/pink color scheme
- Smooth animations and transitions
- Responsive grid layouts
- Product cards with hover effects
- Modal dialogs for product details

## 💾 Data Persistence

All user data is stored in localStorage:
- `glamora_user` - User profile information
- `glamora_cart` - Shopping cart items
- `glamora_wishlist` - Wishlist items
- `glamora_orders` - Order history

## 🔒 Authentication

- Simple authentication system (for demo purposes)
- User data persists across sessions
- Profile management with editable fields
- Logout functionality

## 🛒 Shopping Features

- Add products to cart from any page
- Update quantities in cart
- Remove items from cart
- Checkout with shipping address
- Multiple payment methods
- Order confirmation and tracking

## 📱 Responsive Design

The application is fully responsive and works on:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)

## 🐛 Error Handling

- localStorage error handling
- Image loading fallbacks
- Video play error handling
- Form validation
- User-friendly error messages

## 🎯 Performance Optimizations

- Lazy loading of images
- Optimized re-renders with React Context
- Efficient state management
- Code splitting with React Router
- Efficient search filtering

## 📝 Notes

- This is a frontend-only application (no backend)
- All data is stored in localStorage
- Product images use Unsplash URLs
- Authentication is simplified for demo purposes

## 📄 License

This project is for educational/demo purposes.

## 👨‍💻 Development

To contribute or modify:
1. Follow the existing code structure
2. Maintain consistent styling with Tailwind CSS
3. Use Context API for state management
4. Add error handling for all async operations
5. Ensure responsive design
6. Test all features before committing

---

Built with ❤️ using React and Vite
