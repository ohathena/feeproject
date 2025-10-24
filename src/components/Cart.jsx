import { motion } from 'framer-motion';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const navigate = useNavigate();

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
              <button className="w-full py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
