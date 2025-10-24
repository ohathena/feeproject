import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [activeCollection, setActiveCollection] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const fashionVideoRef = useRef(null);
  const beautyVideoRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const collections = [
    {
      title: "Bridal Couture",
      subtitle: "Timeless Elegance",
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&h=1000&fit=crop",
      gradient: "from-rose-900/30 via-purple-900/20 to-transparent"
    },
    {
      title: "Contemporary Sarees",
      subtitle: "Modern Heritage",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&h=1000&fit=crop",
      gradient: "from-amber-900/30 via-orange-900/20 to-transparent"
    },
    {
      title: "Festive Collection",
      subtitle: "Celebration Ready",
      image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&h=1000&fit=crop",
      gradient: "from-teal-900/30 via-cyan-900/20 to-transparent"
    },
    {
      title: "Indo-Western Fusion",
      subtitle: "Best of Both Worlds",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1000&fit=crop",
      gradient: "from-pink-900/30 via-red-900/20 to-transparent"
    }
  ];

  const features = [
    { symbol: "◆", title: "Curated Collections", desc: "Handpicked by experts" },
    { symbol: "✦", title: "Complimentary Gift Wrap", desc: "Luxury packaging included" },
    { symbol: "◈", title: "Express Delivery", desc: "Worldwide in 2-5 days" },
    { symbol: "◇", title: "Authenticity Guarantee", desc: "Premium quality assured" }
  ];
const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCollection((prev) => (prev + 1) % collections.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleVideoHover = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log('Play error:', err));
    }
  };

  const handleVideoLeave = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Split Section */}
      <div className="pt-[144px]">
        <div className="grid grid-cols-2 gap-0 h-[calc(100vh-144px)]">
          {/* Fashion Section */}
          <motion.div
            className="relative overflow-hidden cursor-pointer group"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onMouseEnter={() => handleVideoHover(fashionVideoRef)}
            onMouseLeave={() => handleVideoLeave(fashionVideoRef)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/60 transition-all duration-700 z-10" />
            <video
              ref={fashionVideoRef}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              muted
              playsInline
              loop
            >
              <source src="/fashion.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex flex-col items-start justify-end p-16 transition-all duration-500 z-20">
              <div className="max-w-md transform transition-all duration-500 group-hover:translate-y-[-8px]">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-16 h-[1px] bg-white/60 mb-6" />
                  <h2 className="text-7xl font-serif text-white mb-8 drop-shadow-2xl leading-tight">
                    Fashion & Accessories
                  </h2>
                  <motion.button
                    whileHover={{ scale: 1.08, x: 4 }}
                    whileTap={{ scale: 0.95 }}
                     onClick={() => navigate('/fashion')}
                    className="px-10 py-4 bg-white text-black text-sm font-medium uppercase tracking-widest shadow-2xl hover:shadow-white/20 transition-all duration-300"
                  >
                    Explore Collection
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Beauty Section */}
          <motion.div
            className="relative overflow-hidden cursor-pointer group"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onMouseEnter={() => handleVideoHover(beautyVideoRef)}
            onMouseLeave={() => handleVideoLeave(beautyVideoRef)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/60 transition-all duration-700 z-10" />
            <video
              ref={beautyVideoRef}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              muted
              playsInline
              loop
            >
              <source src="/beauty.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex flex-col items-start justify-end p-16 transition-all duration-500 z-20">
              <div className="max-w-md transform transition-all duration-500 group-hover:translate-y-[-8px]">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-16 h-[1px] bg-white/60 mb-6" />
                  <h2 className="text-7xl font-serif text-white mb-8 drop-shadow-2xl leading-tight">
                    Fragrance & Beauty
                  </h2>
                  <motion.button
                    whileHover={{ scale: 1.08, x: 4 }}
                    whileTap={{ scale: 0.95 }}
                     onClick={() => navigate('/beauty')}
                    className="px-10 py-4 bg-white text-black text-sm font-medium uppercase tracking-widest shadow-2xl hover:shadow-white/20 transition-all duration-300"
                  >
                    Explore Collection
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Feature Bar */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-30 my-20 mx-auto max-w-7xl px-8"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-12 grid grid-cols-4 gap-12 border border-gray-100 backdrop-blur-sm">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + idx * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="text-center cursor-pointer group"
            >
              <motion.div 
                className="text-5xl mb-4 text-gray-800 group-hover:text-black transition-colors duration-500"
                whileHover={{ rotate: 180, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                {feature.symbol}
              </motion.div>
              <motion.div 
                className="w-8 h-[1px] bg-gray-300 mx-auto mb-3 transition-all duration-500"
                whileHover={{ width: 64 }}
              />
              <h3 className="font-semibold text-gray-900 mb-2 tracking-wide">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Beauty Products Showcase */}
      <section className="min-h-screen py-32 px-8 bg-gradient-to-b from-white to-rose-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="w-24 h-[1px] bg-gray-800 mx-auto mb-8" />
            <h2 className="text-7xl font-serif text-gray-900 mb-6">
              Beauty Essentials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our curated selection of premium fragrances and skincare
            </p>
          </motion.div>

          <div className="grid grid-cols-4 gap-8">
            {[
              { name: "Signature Perfume", category: "Fragrance", price: "₹8,500", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop", path: "/beauty/fragrance" },
              { name: "Radiance Serum", category: "Skincare", price: "₹4,200", image: "https://www.dotandkey.com/cdn/shop/files/1_e8b0f15f-f194-4d5c-b733-3ea1c099b04d.jpg?v=1744620473&width=700", path: "/beauty/skincare" },
              { name: "Luxury Lipstick", category: "Makeup", price: "₹2,800", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=500&fit=crop", path: "/beauty/makeup" },
              { name: "Hydrating Mist", category: "Skincare", price: "₹3,500", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=500&fit=crop", path: "/beauty/skincare" },
              { name: "Night Cream", category: "Skincare", price: "₹5,200", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=500&fit=crop", path: "/beauty/skincare" },
              { name: "Rose Gold Palette", category: "Makeup", price: "₹6,800", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=500&fit=crop", path: "/beauty/makeup" },
              { name: "Body Lotion", category: "Body Care", price: "₹3,200", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=500&fit=crop", path: "/beauty/skincare" },
              { name: "Hair Elixir", category: "Hair Care", price: "₹4,800", image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=500&fit=crop", path: "/beauty/haircare" }
            ].map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden mb-6 bg-gray-100">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                  >
                    <button 
                      onClick={() => navigate(product.path)}
                      className="w-full py-3 bg-white text-black text-sm uppercase tracking-wider font-medium hover:bg-gray-100 transition-colors"
                    >
                      Quick View
                    </button>
                  </motion.div>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{product.category}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-700 font-medium">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/beauty')}
              className="px-16 py-5 bg-black text-white text-sm font-medium uppercase tracking-widest hover:bg-gray-900 transition-all duration-300"
            >
              View All Products
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Full Screen Indian Heritage Section */}
      <section className="h-screen flex items-center justify-center bg-black relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          {collections.map((collection, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{
                opacity: activeCollection === idx ? 1 : 0,
                scale: activeCollection === idx ? 1 : 1.05,
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className="relative h-full w-full">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${collection.gradient}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-16 flex items-center justify-between w-full">
          <motion.div
            key={activeCollection}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl"
          >
            <div className="w-24 h-[1px] bg-white/60 mb-6" />
            <p className="text-white/70 text-sm uppercase tracking-[0.3em] mb-4">
              {collections[activeCollection].subtitle}
            </p>
            <h2 className="text-8xl font-serif text-white mb-8 leading-tight">
              {collections[activeCollection].title}
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed max-w-xl">
              Experience the perfect blend of tradition and contemporary design. 
              Each piece is crafted with meticulous attention to detail.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, x: 8 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-white text-black text-sm font-medium uppercase tracking-widest border border-white hover:bg-transparent hover:text-white transition-all duration-500"
            >
              Discover Collection
            </motion.button>
          </motion.div>

          <div className="flex flex-col gap-6">
            {collections.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCollection(idx)}
                className="group flex items-center gap-4"
              >
                <div className={`h-[1px] transition-all duration-500 ${
                  activeCollection === idx ? 'w-16 bg-white' : 'w-8 bg-white/30'
                }`} />
                <span className={`text-sm font-medium transition-all duration-300 ${
                  activeCollection === idx ? 'text-white' : 'text-white/40'
                }`}>
                  0{idx + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive Brand Story Section */}
      <section className="h-screen flex items-center justify-center bg-neutral-900 relative">
        <motion.div
          style={{
            y: useTransform(smoothProgress, [0, 1], [0, -100])
          }}
          className="max-w-5xl mx-auto px-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="w-24 h-[1px] bg-white/40 mx-auto mb-8" />
            <h2 className="text-7xl font-serif text-white mb-8 leading-tight">
              Crafted with Passion,
              <br />
              Designed for You
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Every piece in our collection tells a story of craftsmanship, heritage, and timeless elegance. 
              We believe in creating experiences that transcend mere fashion.
            </p>
            <div className="flex gap-8 justify-center items-center">
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-6xl font-serif text-white mb-2"
                >
                  10K+
                </motion.div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Happy Customers</div>
              </div>
              <div className="w-[1px] h-16 bg-white/20" />
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-6xl font-serif text-white mb-2"
                >
                  500+
                </motion.div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Unique Designs</div>
              </div>
              <div className="w-[1px] h-16 bg-white/20" />
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-6xl font-serif text-white mb-2"
                >
                  25+
                </motion.div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Countries Worldwide</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Elegant Testimonials */}
      <section className="min-h-screen flex items-center justify-center py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="w-24 h-[1px] bg-gray-800 mx-auto mb-8" />
            <h2 className="text-7xl font-serif text-gray-900 mb-6">
              Testimonials
            </h2>
            <p className="text-xl text-gray-600">What our clients say about us</p>
          </motion.div>

          <div className="grid grid-cols-3 gap-12">
            {[
              { name: "Priya Sharma", location: "Mumbai", rating: 5, text: "Absolutely stunning quality and the customer service is impeccable. The bridal collection exceeded all my expectations." },
              { name: "Ananya Verma", location: "Delhi", rating: 5, text: "The attention to detail in every piece is remarkable. I've never felt more elegant and confident in traditional wear." },
              { name: "Riya Kapoor", location: "Bangalore", rating: 5, text: "From browsing to delivery, the entire experience was seamless. The Indo-Western collection is absolutely divine." }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="bg-neutral-50 p-12 rounded-none border border-gray-200 group cursor-pointer"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gray-800 text-lg">★</span>
                  ))}
                </div>
                <div className="w-12 h-[1px] bg-gray-300 mb-6 group-hover:w-20 transition-all duration-500" />
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900 tracking-wide">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="h-screen flex items-center justify-center bg-black relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&h=900&fit=crop')",
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="w-24 h-[1px] bg-white/60 mx-auto mb-8" />
            <h2 className="text-7xl font-serif text-white mb-8">
              Join Our Circle
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              Receive exclusive access to new collections, private sales, and styling insights.
            </p>
            <div className="flex gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-8 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-white text-black font-medium uppercase tracking-widest hover:bg-transparent hover:text-white border border-white transition-all duration-500"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;