import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

const ProductModal = ({ product, isOpen, onClose, type = 'fashion' }) => {
  const { addToWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');
  const [selectedShade, setSelectedShade] = useState('Natural');
  const [selectedSkinType, setSelectedSkinType] = useState('Normal');
  const [selectedVolume, setSelectedVolume] = useState('50ml');
  const [selectedHairType, setSelectedHairType] = useState('Normal');
  const [selectedFragranceType, setSelectedFragranceType] = useState('Eau de Parfum');
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['Black', 'White', 'Blue', 'Red', 'Green'];
  const shades = ['Natural', 'Light', 'Medium', 'Dark'];
  const skinTypes = ['Oily', 'Dry', 'Normal', 'Combination', 'Sensitive'];
  const volumes = ['30ml', '50ml', '100ml', '150ml'];
  const hairTypes = ['Straight', 'Wavy', 'Curly', 'Coily', 'All Types'];
  const fragranceSizes = ['30ml', '50ml', '100ml'];
  const fragranceTypes = ['Eau de Parfum', 'Eau de Toilette', 'Cologne'];
  
  const isSkincare = product.category === 'skincare' || ['serums', 'moisturizers', 'cleansers', 'toners', 'treatments', 'suncare'].includes(product.category);
  const isMakeup = product.category === 'makeup' || ['face', 'eyes', 'lips', 'tools'].includes(product.category);
  const isHaircare = product.category === 'haircare' || ['shampoos', 'conditioners', 'oils', 'masks', 'styling'].includes(product.category);
  const isFragrance = product.category === 'fragrance' || ['perfumes', 'colognes', 'mists'].includes(product.category);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                {/* Left Side - Image */}
                <div className="relative">
                  <button
                    onClick={onClose}
                    className="absolute top-0 right-0 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 z-10"
                  >
                    <FaTimes className="text-gray-700" />
                  </button>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[500px] object-cover rounded-lg"
                  />
                </div>

                {/* Right Side - Details */}
                <div className="flex flex-col">
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">{product.category}</p>
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">{product.name}</h2>
                    <div className="flex items-center gap-4 mb-4">
                      <p className="text-3xl font-bold text-gray-900">₹{product.price}</p>
                      {product.originalPrice && (
                        <p className="text-xl text-gray-400 line-through">₹{product.originalPrice}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="flex items-center text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.floor(product.rating) ? 'text-amber-500' : 'text-gray-300'}>★</span>
                        ))}
                      </div>
                      <span className="text-gray-600">({product.rating})</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Description</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {type === 'fashion' 
                        ? 'Premium quality fabric with excellent comfort and durability. Perfect for any occasion, this piece combines style with functionality. Made with care and attention to detail.'
                        : 'High-quality beauty product formulated with premium ingredients. Dermatologically tested and suitable for all skin types. Achieve the perfect look with this essential item.'}
                    </p>
                  </div>

                  {/* Fashion Filters */}
                  {type === 'fashion' && (
                    <>
                      <div className="mb-6">
                        <h3 className="font-semibold mb-3">Size</h3>
                        <div className="flex gap-2 flex-wrap">
                          {sizes.map(size => (
                            <button
                              key={size}
                              onClick={() => setSelectedSize(size)}
                              className={`px-4 py-2 border rounded-lg transition-all ${
                                selectedSize === size
                                  ? 'bg-gray-900 text-white border-gray-900'
                                  : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h3 className="font-semibold mb-3">Color</h3>
                        <div className="flex gap-2 flex-wrap">
                          {colors.map(color => (
                            <button
                              key={color}
                              onClick={() => setSelectedColor(color)}
                              className={`px-4 py-2 border rounded-lg transition-all ${
                                selectedColor === color
                                  ? 'bg-gray-900 text-white border-gray-900'
                                  : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'
                              }`}
                            >
                              {color}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Skincare Filters */}
                  {type === 'beauty' && isSkincare && (
                    <>
                      <div className="mb-6">
                        <h3 className="font-semibold mb-3">Skin Type</h3>
                        <div className="flex gap-2 flex-wrap">
                          {skinTypes.map(skinType => (
                            <button key={skinType} onClick={() => setSelectedSkinType(skinType)} className={`px-4 py-2 border rounded-lg transition-all ${selectedSkinType === skinType ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'}`}>
                              {skinType}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="mb-6">
                        <h3 className="font-semibold mb-3">Volume</h3>
                        <div className="flex gap-2 flex-wrap">
                          {volumes.map(volume => (
                            <button key={volume} onClick={() => setSelectedVolume(volume)} className={`px-4 py-2 border rounded-lg transition-all ${selectedVolume === volume ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'}`}>
                              {volume}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Makeup Filters */}
                  {type === 'beauty' && isMakeup && (
                    <>
                      <div className="mb-6">
                        <h3 className="font-semibold mb-3">Shade</h3>
                        <div className="flex gap-2 flex-wrap">
                          {shades.map(shade => (
                            <button key={shade} onClick={() => setSelectedShade(shade)} className={`px-4 py-2 border rounded-lg transition-all ${selectedShade === shade ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'}`}>
                              {shade}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="mb-6">
                        <h3 className="font-semibold mb-3">Size</h3>
                        <div className="flex gap-2 flex-wrap">
                          {volumes.map(volume => (
                            <button key={volume} onClick={() => setSelectedVolume(volume)} className={`px-4 py-2 border rounded-lg transition-all ${selectedVolume === volume ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'}`}>
                              {volume}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Haircare Filters */}
                  {type === 'beauty' && isHaircare && (
                    <>
                      <div className="mb-6">
                        <h3 className="font-semibold mb-3">Hair Type</h3>
                        <div className="flex gap-2 flex-wrap">
                          {hairTypes.map(hairType => (
                            <button key={hairType} onClick={() => setSelectedHairType(hairType)} className={`px-4 py-2 border rounded-lg transition-all ${selectedHairType === hairType ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'}`}>
                              {hairType}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="mb-6">
                        <h3 className="font-semibold mb-3">Volume</h3>
                        <div className="flex gap-2 flex-wrap">
                          {volumes.map(volume => (
                            <button key={volume} onClick={() => setSelectedVolume(volume)} className={`px-4 py-2 border rounded-lg transition-all ${selectedVolume === volume ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'}`}>
                              {volume}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Fragrance Filters */}
                  {type === 'beauty' && isFragrance && (
                    <>
                      <div className="mb-6">
                        <h3 className="font-semibold mb-3">Type</h3>
                        <div className="flex gap-2 flex-wrap">
                          {fragranceTypes.map(fragType => (
                            <button key={fragType} onClick={() => setSelectedFragranceType(fragType)} className={`px-4 py-2 border rounded-lg transition-all ${selectedFragranceType === fragType ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'}`}>
                              {fragType}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="mb-6">
                        <h3 className="font-semibold mb-3">Size</h3>
                        <div className="flex gap-2 flex-wrap">
                          {fragranceSizes.map(size => (
                            <button key={size} onClick={() => setSelectedVolume(size)} className={`px-4 py-2 border rounded-lg transition-all ${selectedVolume === size ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'}`}>
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Quantity */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Quantity</h3>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="text-lg font-semibold">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-auto">
                    <button 
                      onClick={() => {
                        addToCart(product, quantity);
                        onClose();
                      }}
                      className="flex-1 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                    >
                      <FaShoppingCart />
                      Add to Cart
                    </button>
                    <button 
                      onClick={() => addToWishlist(product)}
                      className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <FaHeart className={isInWishlist(product.id) ? 'text-rose-500' : 'text-gray-700'} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
