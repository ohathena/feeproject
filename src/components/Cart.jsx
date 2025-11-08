import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrdersContext';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, setCart } = useCart();
  const { placeOrder } = useOrders();
  const { user } = useUser();
  const navigate = useNavigate();
  const [showCheckout, setShowCheckout] = useState(false);
  const [shippingAddress, setShippingAddress] = useState({
    street: user?.address?.street || '',
    city: user?.address?.city || '',
    state: user?.address?.state || '',
    zipCode: user?.address?.zipCode || '',
    country: user?.address?.country || 'India',
  });
  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery');

  useEffect(() => {
    if (user?.address) {
      setShippingAddress({
        street: user.address.street || '',
        city: user.address.city || '',
        state: user.address.state || '',
        zipCode: user.address.zipCode || '',
        country: user.address.country || 'India',
      });
    }
  }, [user]);

  return (
    <div className="pt-[170px] min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-serif font-bold mb-8">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg">
            <h2 className="text-2xl text-gray-600 mb-4">Your cart is empty</h2>
            <button onClick={() => navigate('/')} className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <motion.div key={item.id} layout className="bg-white p-6 rounded-lg shadow-md flex gap-6">
                  <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">₹{item.price}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 border rounded-lg">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-2 hover:bg-gray-100">
                          <FaMinus />
                        </button>
                        <span className="px-4">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-2 hover:bg-gray-100">
                          <FaPlus />
                        </button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-rose-500 hover:text-rose-600">
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold">₹{item.price * item.quantity}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md h-fit">
              <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{getCartTotal()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t pt-4 flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>₹{getCartTotal()}</span>
                </div>
              </div>
              {!showCheckout ? (
                <button
                  onClick={() => {
                    if (!user) {
                      alert('Please log in to place an order');
                      navigate('/login');
                      return;
                    }
                    setShowCheckout(true);
                  }}
                  className="w-full py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
                >
                  Proceed to Checkout
                </button>
              ) : (
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Shipping Address</h3>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Street Address"
                      value={shippingAddress.street}
                      onChange={(e) =>
                        setShippingAddress({ ...shippingAddress, street: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-rose-500"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="City"
                        value={shippingAddress.city}
                        onChange={(e) =>
                          setShippingAddress({ ...shippingAddress, city: e.target.value })
                        }
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-rose-500"
                      />
                      <input
                        type="text"
                        placeholder="State"
                        value={shippingAddress.state}
                        onChange={(e) =>
                          setShippingAddress({ ...shippingAddress, state: e.target.value })
                        }
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-rose-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="ZIP Code"
                        value={shippingAddress.zipCode}
                        onChange={(e) =>
                          setShippingAddress({ ...shippingAddress, zipCode: e.target.value })
                        }
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-rose-500"
                      />
                      <input
                        type="text"
                        placeholder="Country"
                        value={shippingAddress.country}
                        onChange={(e) =>
                          setShippingAddress({ ...shippingAddress, country: e.target.value })
                        }
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-rose-500"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Payment Method</h3>
                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-rose-500"
                    >
                      <option value="Cash on Delivery">Cash on Delivery</option>
                      <option value="Credit Card">Credit Card</option>
                      <option value="Debit Card">Debit Card</option>
                      <option value="UPI">UPI</option>
                      <option value="Net Banking">Net Banking</option>
                    </select>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        if (!shippingAddress.street || !shippingAddress.city || !shippingAddress.state) {
                          alert('Please fill in all required address fields');
                          return;
                        }
                        placeOrder(cart, shippingAddress, paymentMethod, user.id);
                        setCart([]);
                        setShowCheckout(false);
                        alert('Order placed successfully!');
                        navigate('/orders');
                      }}
                      className="flex-1 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600"
                    >
                      Place Order
                    </button>
                    <button
                      onClick={() => setShowCheckout(false)}
                      className="px-4 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
