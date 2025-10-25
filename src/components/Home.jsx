/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const Home = () => {

  const [hoveredSection, setHoveredSection] = useState(null);
  const [activeCollection, setActiveCollection] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const fashionVideoRef = useRef(null);
  const beautyVideoRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { name: "Priya Sharma", location: "Mumbai", rating: 5, text: "Absolutely stunning quality and the customer service is impeccable. The bridal collection exceeded all my expectations." },
    { name: "Ananya Verma", location: "Delhi", rating: 5, text: "The attention to detail in every piece is remarkable. I've never felt more elegant and confident in traditional wear." },
    { name: "Sanya Mehta", location: "Chennai", rating: 5, text: "The fabrics are luxurious and comfortable. I received so many compliments at my wedding!" },
    { name: "Isha Reddy", location: "Hyderabad", rating: 5, text: "Every outfit tells a story. The customization options made my experience truly unique." },
    { name: "Tanya Singh", location: "Kolkata", rating: 5, text: "Prompt delivery and excellent packaging. The craftsmanship is top-notch." },
    { name: "Meera Joshi", location: "Pune", rating: 5, text: "Beautiful designs that perfectly blend tradition and modern style. Highly recommended!" },
    { name: "Nisha Gupta", location: "Ahmedabad", rating: 5, text: "Amazing attention to detail. I felt like royalty wearing their collection at my event." },
    { name: "Anika Rao", location: "Jaipur", rating: 5, text: "The color combinations are breathtaking. I can't wait to shop here again for another occasion." },
    { name: "Kavya Iyer", location: "Lucknow", rating: 5, text: "Excellent customer support and gorgeous ensembles. Truly exceeded my expectations." },
    { name: "Priyanka Desai", location: "Chandigarh", rating: 5, text: "The handwork on the outfits is flawless. Every piece is a work of art!" },
    { name: "Riya Kapoor", location: "Bangalore", rating: 5, text: "From browsing to delivery, the entire experience was seamless. The Indo-Western collection is absolutely divine." }
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const getVisibleTestimonials = () => {
    const prev = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    const next = (currentIndex + 1) % testimonials.length;
    return [prev, currentIndex, next];
  };

  const [prevIdx, centerIdx, nextIdx] = getVisibleTestimonials();

  const collections = [
    {
      title: "Bridal Couture",
      subtitle: "Timeless Elegance",
      image: "https://www.kalkifashion.com/blogs/wp-content/uploads/2025/08/bridal-blog-banner-1536x977.jpg",
      gradient: "from-rose-900/30 via-purple-900/20 to-transparent"
    },
    {
      title: "Contemporary Sarees",
      subtitle: "Modern Heritage",
      image: "https://i.pinimg.com/1200x/4f/57/49/4f57497fd7fd342b72a51fd171744c43.jpg",
      gradient: "from-amber-900/30 via-orange-900/20 to-transparent"
    },
    {
      title: "Festive Collection",
      subtitle: "Celebration Ready",
      image: "https://i.pinimg.com/1200x/60/0b/f7/600bf7399ab526e9fd8371ff624e5850.jpg",
      gradient: "from-teal-900/30 via-cyan-900/20 to-transparent"
    },
    {
      title: "Indo-Western Fusion",
      subtitle: "Best of Both Worlds",
      image: "https://i.pinimg.com/736x/54/74/fe/5474fe37490fc863c4b5e85d042fd404.jpg",
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div className="min-h-screen ">
      {/* Hero Split Section */}
     <div className=" lg:pt-[144px] pt-[112px] sm:pt-[128px]">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[calc(100vh-144px)]">
    {/* Fashion Section */}
    <motion.div
      className="relative overflow-hidden cursor-pointer group h-[60vh] lg:h-[calc(100vh-144px)]"
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
      <div className="absolute inset-0 flex flex-col items-start justify-end p-6 sm:p-10 lg:p-16 transition-all duration-500 z-20">
        <div className="max-w-md transform transition-all duration-500 group-hover:translate-y-[-8px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-12 sm:w-16 h-[1px] bg-white/60 mb-4 sm:mb-6" />
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-white mb-6 sm:mb-8 drop-shadow-2xl leading-tight">
              Fashion & Accessories
            </h2>
            <motion.button
              whileHover={{ scale: 1.08, x: 4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/fashion')}
              className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-white text-black text-xs sm:text-sm font-medium uppercase tracking-widest shadow-2xl hover:shadow-white/20 transition-all duration-300"
            >
              Explore Collection
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>

    {/* Beauty Section */}
    <motion.div
      className="relative overflow-hidden cursor-pointer group h-[60vh] lg:h-[calc(100vh-144px)]"
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
      <div className="absolute inset-0 flex flex-col items-start justify-end p-6 sm:p-10 lg:p-16 transition-all duration-500 z-20">
        <div className="max-w-md transform transition-all duration-500 group-hover:translate-y-[-8px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="w-12 sm:w-16 h-[1px] bg-white/60 mb-4 sm:mb-6" />
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-white mb-6 sm:mb-8 drop-shadow-2xl leading-tight">
              Fragrance & Beauty
            </h2>
            <motion.button
              whileHover={{ scale: 1.08, x: 4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/beauty')}
              className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-white text-black text-xs sm:text-sm font-medium uppercase tracking-widest shadow-2xl hover:shadow-white/20 transition-all duration-300"
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
  className="relative z-30 my-10 sm:my-16 lg:my-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
>
  <div className="relative bg-white rounded-sm shadow-[0_2px_40px_rgba(0,0,0,0.08)] overflow-hidden">
    {/* Subtle top border accent */}
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-900 to-transparent opacity-20" />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
      {features.map((feature, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 + idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative text-center py-10 sm:py-12 lg:py-16 px-6 sm:px-8 cursor-pointer group transition-all duration-500 hover:bg-gray-50/50"
        >
          {/* Minimal hover indicator */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gray-900 group-hover:w-12 sm:group-hover:w-16 transition-all duration-700 ease-out" />

          {/* Icon */}
          <div className="text-4xl sm:text-5xl mb-6 sm:mb-8 text-gray-800 group-hover:text-gray-900 transition-colors duration-700">
            {feature.symbol}
          </div>

          {/* Refined divider */}
          <div className="w-10 sm:w-12 h-[0.5px] bg-gray-300 mx-auto mb-4 sm:mb-6" />

          {/* Title */}
          <h3 className="text-sm sm:text-base uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-900 mb-3 sm:mb-4">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed sm:leading-loose font-light max-w-[180px] sm:max-w-[200px] mx-auto">
            {feature.desc}
          </p>
        </motion.div>
      ))}
    </div>

    {/* Subtle bottom border */}
    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
  </div>
</motion.div>

     {/* Beauty Products Showcase */}
<section className="min-h-screen py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-rose-50/30">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12 sm:mb-16 lg:mb-20"
    >
      <div className="w-16 sm:w-20 lg:w-24 h-[1px] bg-gray-800 mx-auto mb-6 sm:mb-8" />
      <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-gray-900 mb-4 sm:mb-6">
        Beauty Essentials
      </h2>
      <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
        Discover our curated selection of premium fragrances and skincare
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-6 lg:gap-8">
      {[
        { name: "Signature Perfume", category: "Fragrance", price: "₹8,500", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop", path: "/beauty/fragrance" },
        { name: "Radiance Serum", category: "Skincare", price: "₹4,200", image: "https://www.dotandkey.com/cdn/shop/files/1_e8b0f15f-f194-4d5c-b733-3ea1c099b04d.jpg?v=1744620473&width=700", path: "/beauty/skincare" },
        { name: "Luxury Lipstick", category: "Makeup", price: "₹2,800", image: "https://www.rasluxuryoils.com/cdn/shop/files/ChampaigneBlush_c2484f01-b702-4092-97e8-c24419530452.jpg?v=1710490244&width=600", path: "/beauty/makeup" },
        { name: "Hydrating Mist", category: "Skincare", price: "₹3,500", image: "https://aflairza.com/cdn/shop/files/Hydratante1st2.jpg?v=1749987561&width=1024", path: "/beauty/skincare" },
        { name: "Night Cream", category: "Skincare", price: "₹5,200", image: "https://mitchellmalaysia.com/cdn/shop/files/MitchellUsa_AgeLess_NightTherapy_Cream-01_1.webp?v=1729493846&width=713", path: "/beauty/skincare" },
        { name: "Rose Gold Palette", category: "Makeup", price: "₹6,800", image: "https://i.pinimg.com/736x/1c/20/bc/1c20bc566b235fb4dd6d2735a17a7b96.jpg", path: "/beauty/makeup" },
        { name: "Body Lotion", category: "Body Care", price: "₹3,200", image: "https://lovebeautyandplanet.in/cdn/shop/files/Cherry_blossom_body_lotion.jpg?v=1757130547&width=713", path: "/beauty/skincare" },
        { name: "Hair Elixir", category: "Hair Care", price: "₹4,800", image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=500&fit=crop", path: "/beauty/haircare" }  ].map((product, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, duration: 0.6 }}
          whileHover={{ y: -12, scale: 1.03 }}
          className="group cursor-pointer"
        >
          <div className="relative overflow-hidden mb-4 sm:mb-6 bg-gray-100">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
            >
              <button 
                onClick={() => navigate(product.path)}
                className="w-full py-2 sm:py-3 bg-white text-black text-xs sm:text-sm uppercase tracking-wider font-medium hover:bg-gray-100 transition-colors"
              >
                Quick View
              </button>
            </motion.div>
          </div>
          <div className="text-center px-2">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 sm:mb-2">{product.category}</p>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">{product.name}</h3>
            <p className="text-sm sm:text-base text-gray-700 font-medium">{product.price}</p>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className="text-center mt-12 sm:mt-14 lg:mt-16"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/beauty')}
        className="px-10 sm:px-12 lg:px-16 py-4 sm:py-4 lg:py-5 bg-black text-white text-xs sm:text-sm font-medium uppercase tracking-widest hover:bg-gray-900 transition-all duration-300"
      >
        View All Products
      </motion.button>
    </motion.div>
  </div>
</section>

      {/* Full Screen Indian Heritage Section */}
      <section className="flex items-center justify-center bg-black relative overflow-hidden min-h-screen">
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
                  className="w-full h-full object-cover opacity-100"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${collection.gradient} opacity-20`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Elegant grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

        <div className="relative z-10 max-w-7xl mx-auto px-16 py-20 flex items-center justify-between w-full">
          <motion.div
            key={activeCollection}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl"
          >
            {/* Refined top accent line */}
            <div className="w-32 h-[0.5px] bg-white/40 mb-8" />

            {/* Subtitle with elegant spacing */}
            <p className="text-white/60 text-xs uppercase tracking-[0.4em] mb-6 font-light">
              {collections[activeCollection].subtitle}
            </p>

            {/* Hero title - refined */}
            <h2 className="text-7xl font-light text-white mb-10 leading-[1.1] tracking-tight">
              {collections[activeCollection].title}
            </h2>

            {/* Divider */}
            <div className="w-20 h-[0.5px] bg-white/30 mb-8" />

            {/* Description */}
            <p className="text-white/70 text-base mb-12 leading-relaxed max-w-xl font-light">
              Experience the perfect blend of tradition and contemporary design.
              Each piece is crafted with meticulous attention to detail.
            </p>

            {/* CTA Button - refined */}
            <motion.button
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-4 text-white text-xs font-light uppercase tracking-[0.3em] border border-white/30 hover:border-white transition-all duration-700 overflow-hidden"
            >
              <span className="relative z-10">Discover Collection</span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-black text-xs tracking-[0.3em]">
                Discover Collection
              </span>
            </motion.button>
          </motion.div>

          {/* Navigation - refined and elegant */}
          <div className="flex flex-col gap-8">
            {collections.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveCollection(idx)}
                className="group flex items-center gap-6"
                whileHover={{ x: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Line indicator */}
                <div className={`h-[0.5px] transition-all duration-700 ${activeCollection === idx
                  ? 'w-20 bg-white'
                  : 'w-10 bg-white/20 group-hover:w-16 group-hover:bg-white/40'
                  }`} />

                {/* Number */}
                <span className={`text-sm font-light transition-all duration-500 tracking-wider ${activeCollection === idx
                  ? 'text-white'
                  : 'text-white/30 group-hover:text-white/60'
                  }`}>
                  0{idx + 1}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Subtle bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* Brand Story Section */}
    <section className="min-h-screen flex items-center justify-center bg-gray-800/90 relative overflow-hidden py-16 sm:py-24 lg:py-32">
  {/* Subtle background elements */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-white rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px]" />
    <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-white rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px]" />
  </div>

  {/* Grain texture */}
  <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

  <motion.div
    style={{
      y: useTransform(smoothProgress, [0, 1], [0, -100])
    }}
    className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 text-center"
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Top accent line */}
      <div className="w-20 sm:w-24 lg:w-32 h-[0.5px] bg-white/30 mx-auto mb-8 sm:mb-10 lg:mb-12" />

      {/* Subtitle */}
      <p className="text-white/50 text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-6 sm:mb-8 font-light">
        Our Philosophy
      </p>

      {/* Main heading */}
      <h2 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white mb-4 sm:mb-6 leading-[1.1] tracking-tight px-4">
        Crafted with Passion,
        <br />
        <span className="text-white/80">Designed for You</span>
      </h2>

      {/* Divider */}
      <div className="w-16 sm:w-20 lg:w-24 h-[0.5px] bg-white/20 mx-auto my-6 sm:my-8 lg:my-10" />

      {/* Description */}
      <p className="text-sm sm:text-base lg:text-lg text-white/60 mb-12 sm:mb-16 lg:mb-20 max-w-2xl mx-auto leading-relaxed sm:leading-loose font-light px-4">
        Every piece in our collection tells a story of craftsmanship, heritage, and timeless elegance.
        We believe in creating experiences that transcend mere fashion.
      </p>

      {/* Stats section */}
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-12 lg:gap-20 justify-center items-center max-w-4xl mx-auto">
        <div className="flex-1 text-center group cursor-default w-full sm:w-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-3 sm:mb-4 group-hover:text-white/90 transition-colors duration-500">
              10K+
            </div>
            <div className="w-10 sm:w-12 h-[0.5px] bg-white/20 mx-auto mb-3 sm:mb-4 group-hover:w-16 sm:group-hover:w-20 transition-all duration-500" />
            <div className="text-white/50 text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] font-light">
              Happy Customers
            </div>
          </motion.div>
        </div>

        <div className="hidden sm:block w-[0.5px] h-20 lg:h-24 bg-white/10" />

        <div className="flex-1 text-center group cursor-default w-full sm:w-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-3 sm:mb-4 group-hover:text-white/90 transition-colors duration-500">
              500+
            </div>
            <div className="w-10 sm:w-12 h-[0.5px] bg-white/20 mx-auto mb-3 sm:mb-4 group-hover:w-16 sm:group-hover:w-20 transition-all duration-500" />
            <div className="text-white/50 text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] font-light">
              Unique Designs
            </div>
          </motion.div>
        </div>

        <div className="hidden sm:block w-[0.5px] h-20 lg:h-24 bg-white/10" />

        <div className="flex-1 text-center group cursor-default w-full sm:w-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-3 sm:mb-4 group-hover:text-white/90 transition-colors duration-500">
              25+
            </div>
            <div className="w-10 sm:w-12 h-[0.5px] bg-white/20 mx-auto mb-3 sm:mb-4 group-hover:w-16 sm:group-hover:w-20 transition-all duration-500" />
            <div className="text-white/50 text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] font-light">
              Countries Worldwide
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </motion.div>

  {/* Bottom accent line */}
  <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
</section>

      {/* Testimonials */}
<section className="min-h-screen flex items-center justify-center py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto w-full">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12 sm:mb-16 lg:mb-20"
    >
      <div className="w-16 sm:w-20 lg:w-24 h-[1px] bg-gray-800 mx-auto mb-6 sm:mb-8" />
      <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-gray-900 mb-4 sm:mb-6 px-4">
        Testimonials
      </h2>
      <p className="text-base sm:text-lg lg:text-xl text-gray-600">What our clients say about us</p>
    </motion.div>

    {/* Carousel Container */}
    <div className="relative flex items-center justify-center gap-3 sm:gap-4 lg:gap-6 px-2 sm:px-4">
      <AnimatePresence mode="wait">
        {/* Left Box - Smaller (Hidden on mobile) */}
        <motion.div
          key={`left-${prevIdx}`}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 0.5, scale: 0.85 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:flex bg-neutral-50 p-6 lg:p-8 border border-gray-200 w-60 lg:w-72 h-60 lg:h-72 flex-shrink-0 flex-col justify-between"
        >
          <div>
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[prevIdx].rating)].map((_, i) => (
                <span key={i} className="text-gray-800 text-sm">★</span>
              ))}
            </div>
            <div className="w-8 h-[1px] bg-gray-300 mb-4" />
            <p className="text-gray-700 leading-relaxed text-sm line-clamp-4">
              "{testimonials[prevIdx].text}"
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 tracking-wide text-sm">{testimonials[prevIdx].name}</p>
            <p className="text-xs text-gray-500 uppercase tracking-wider">{testimonials[prevIdx].location}</p>
          </div>
        </motion.div>

        {/* Center Box - Larger and Prominent */}
        <motion.div
          key={`center-${centerIdx}`}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 sm:p-8 lg:p-12 border-2 border-gray-800 w-full sm:w-80 lg:w-96 h-auto min-h-[320px] sm:h-80 lg:h-96 flex-shrink-0 flex flex-col justify-between shadow-2xl z-10"
        >
          <div>
            <div className="flex gap-1 mb-4 sm:mb-6">
              {[...Array(testimonials[centerIdx].rating)].map((_, i) => (
                <span key={i} className="text-gray-800 text-lg sm:text-xl">★</span>
              ))}
            </div>
            <div className="w-10 sm:w-12 h-[1px] bg-gray-800 mb-4 sm:mb-6" />
            <p className="text-gray-800 leading-relaxed text-base sm:text-lg">
              "{testimonials[centerIdx].text}"
            </p>
          </div>
          <div className="mt-6">
            <p className="font-bold text-gray-900 tracking-wide text-base sm:text-lg">{testimonials[centerIdx].name}</p>
            <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider mt-1">{testimonials[centerIdx].location}</p>
          </div>
        </motion.div>

        {/* Right Box - Smaller (Hidden on mobile) */}
        <motion.div
          key={`right-${nextIdx}`}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 0.5, scale: 0.85 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:flex bg-neutral-50 p-6 lg:p-8 border border-gray-200 w-60 lg:w-72 h-60 lg:h-72 flex-shrink-0 flex-col justify-between"
        >
          <div>
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[nextIdx].rating)].map((_, i) => (
                <span key={i} className="text-gray-800 text-sm">★</span>
              ))}
            </div>
            <div className="w-8 h-[1px] bg-gray-300 mb-4" />
            <p className="text-gray-700 leading-relaxed text-sm line-clamp-4">
              "{testimonials[nextIdx].text}"
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 tracking-wide text-sm">{testimonials[nextIdx].name}</p>
            <p className="text-xs text-gray-500 uppercase tracking-wider">{testimonials[nextIdx].location}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>

    {/* Navigation Dots */}
    <div className="flex justify-center gap-2 mt-8 sm:mt-10 lg:mt-12">
      {testimonials.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setCurrentIndex(idx)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            idx === currentIndex ? 'bg-gray-800 w-6 sm:w-8' : 'bg-gray-300'
          }`}
          aria-label={`Go to testimonial ${idx + 1}`}
        />
      ))}
    </div>
  </div>
</section>


      {/* Newsletter Section */}
<section className="min-h-screen h-auto sm:h-screen flex items-center justify-center bg-black relative overflow-hidden py-16 sm:py-0">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 0.1 }}
    viewport={{ once: true }}
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074')",
      transform: `translateY(${scrollY * 0.3}px)`
    }}
  />
  <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="w-16 sm:w-20 lg:w-24 h-[1px] bg-white/60 mx-auto mb-6 sm:mb-8" />
      <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-white mb-6 sm:mb-8 px-4">
        Join Our Circle
      </h2>
      <p className="text-base sm:text-lg lg:text-xl text-white/70 mb-8 sm:mb-10 lg:mb-12 leading-relaxed px-4">
        Receive exclusive access to new collections, private sales, and styling insights.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 px-6 sm:px-8 py-4 sm:py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-all duration-300 text-sm sm:text-base"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 sm:px-10 lg:px-12 py-4 sm:py-5 bg-white text-black font-medium uppercase tracking-wider sm:tracking-widest hover:bg-transparent hover:text-white border border-white transition-all duration-500 text-xs sm:text-sm whitespace-nowrap"
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