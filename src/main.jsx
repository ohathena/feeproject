import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WishlistProvider } from './context/WishlistContext'
import { CartProvider } from './context/CartContext'
import { UserProvider } from './context/UserContext'
import { OrdersProvider } from './context/OrdersContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <WishlistProvider>
          <OrdersProvider>
            <App />
          </OrdersProvider>
        </WishlistProvider>
      </CartProvider>
    </UserProvider>
  </React.StrictMode>,
)
