import { FaHeart } from 'react-icons/fa';
import { useWishlist } from '../context/WishlistContext';

const WishlistButton = ({ product }) => {
  const { addToWishlist, isInWishlist } = useWishlist();

  return (
    <button 
      onClick={(e) => {
        e.stopPropagation();
        addToWishlist(product);
      }}
      className="p-3 bg-white rounded-full shadow-lg hover:bg-rose-50"
    >
      <FaHeart className={isInWishlist(product.id) ? 'text-rose-500' : 'text-gray-700'} />
    </button>
  );
};

export default WishlistButton;
