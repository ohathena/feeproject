import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const CartButton = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <button 
      onClick={(e) => {
        e.stopPropagation();
        addToCart(product, 1);
      }}
      className="p-3 bg-white rounded-full shadow-lg hover:bg-rose-50"
    >
      <FaShoppingCart className="text-gray-700 hover:text-rose-500" />
    </button>
  );
};

export default CartButton;
