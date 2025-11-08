// Centralized product data from all categories

export const allProducts = [
  // Women's Fashion
  { id: 1, name: 'Elegant Summer Dress', price: 2499, category: 'dresses', mainCategory: 'fashion', subCategory: 'women', image: '/products/dress1.jpg', rating: 4.5 },
  { id: 2, name: 'Classic Winter Coat', price: 4999, category: 'outerwear', mainCategory: 'fashion', subCategory: 'women', image: '/products/coat1.jpg', rating: 4.8 },
  { id: 3, name: 'Stylish Jacket', price: 3499, category: 'outerwear', mainCategory: 'fashion', subCategory: 'women', image: '/products/jacket1.jpg', rating: 4.6 },
  { id: 4, name: 'Summer Collection Top', price: 1499, category: 'tops', mainCategory: 'fashion', subCategory: 'women', image: '/products/summer1.jpg', rating: 4.3 },
  { id: 5, name: 'Designer Dress', price: 5999, category: 'dresses', mainCategory: 'fashion', subCategory: 'women', image: '/products/dress1.jpg', rating: 4.9 },
  { id: 6, name: 'Casual Jacket', price: 2999, category: 'outerwear', mainCategory: 'fashion', subCategory: 'women', image: '/products/jacket1.jpg', rating: 4.4 },
  { id: 7, name: 'Premium Coat', price: 7999, category: 'outerwear', mainCategory: 'fashion', subCategory: 'women', image: '/products/coat1.jpg', rating: 4.7 },
  { id: 8, name: 'Trendy Summer Wear', price: 1999, category: 'tops', mainCategory: 'fashion', subCategory: 'women', image: '/products/summer1.jpg', rating: 4.2 },

  // Men's Fashion
  { id: 101, name: 'Classic Blazer', price: 5499, category: 'formal', mainCategory: 'fashion', subCategory: 'men', image: '/products/jacket1.jpg', rating: 4.7 },
  { id: 102, name: 'Winter Overcoat', price: 6999, category: 'outerwear', mainCategory: 'fashion', subCategory: 'men', image: '/products/coat1.jpg', rating: 4.8 },
  { id: 103, name: 'Casual Jacket', price: 3999, category: 'casual', mainCategory: 'fashion', subCategory: 'men', image: '/products/jacket1.jpg', rating: 4.5 },
  { id: 104, name: 'Summer Shirt', price: 1799, category: 'casual', mainCategory: 'fashion', subCategory: 'men', image: '/products/summer1.jpg', rating: 4.3 },
  { id: 105, name: 'Premium Suit Jacket', price: 8999, category: 'formal', mainCategory: 'fashion', subCategory: 'men', image: '/products/jacket1.jpg', rating: 4.9 },
  { id: 106, name: 'Trench Coat', price: 7499, category: 'outerwear', mainCategory: 'fashion', subCategory: 'men', image: '/products/coat1.jpg', rating: 4.6 },
  { id: 107, name: 'Denim Jacket', price: 2999, category: 'casual', mainCategory: 'fashion', subCategory: 'men', image: '/products/jacket1.jpg', rating: 4.4 },
  { id: 108, name: 'Linen Shirt', price: 1499, category: 'casual', mainCategory: 'fashion', subCategory: 'men', image: '/products/summer1.jpg', rating: 4.2 },

  // Kids Baby
  { id: 201, name: 'Baby Romper Set', price: 899, category: 'rompers', mainCategory: 'fashion', subCategory: 'kids-baby', image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=400&h=500&fit=crop', rating: 4.8 },
  { id: 202, name: 'Soft Cotton Onesie', price: 599, category: 'onesies', mainCategory: 'fashion', subCategory: 'kids-baby', image: 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=400&h=500&fit=crop', rating: 4.9 },
  { id: 203, name: 'Baby Winter Jacket', price: 1299, category: 'outerwear', mainCategory: 'fashion', subCategory: 'kids-baby', image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&h=500&fit=crop', rating: 4.7 },
  { id: 204, name: 'Cute Bodysuit Pack', price: 799, category: 'onesies', mainCategory: 'fashion', subCategory: 'kids-baby', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=500&fit=crop', rating: 4.6 },
  { id: 205, name: 'Baby Dress', price: 999, category: 'dresses', mainCategory: 'fashion', subCategory: 'kids-baby', image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=500&fit=crop', rating: 4.8 },
  { id: 206, name: 'Cozy Sleepsuit', price: 699, category: 'sleepwear', mainCategory: 'fashion', subCategory: 'kids-baby', image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=500&fit=crop', rating: 4.5 },

  // Skincare
  { id: 301, name: 'Vitamin C Serum', price: 2499, category: 'serums', mainCategory: 'beauty', subCategory: 'skincare', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=500&fit=crop', rating: 4.9 },
  { id: 302, name: 'Hydrating Face Cream', price: 2199, category: 'moisturizers', mainCategory: 'beauty', subCategory: 'skincare', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=500&fit=crop', rating: 4.8 },
  { id: 303, name: 'Gentle Face Cleanser', price: 1299, category: 'cleansers', mainCategory: 'beauty', subCategory: 'skincare', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=500&fit=crop', rating: 4.7 },
  { id: 304, name: 'Night Repair Cream', price: 3499, category: 'moisturizers', mainCategory: 'beauty', subCategory: 'skincare', image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=500&fit=crop', rating: 4.8 },
  { id: 305, name: 'Retinol Serum', price: 2899, category: 'serums', mainCategory: 'beauty', subCategory: 'skincare', image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=500&fit=crop', rating: 4.9 },
  { id: 306, name: 'Exfoliating Toner', price: 1599, category: 'toners', mainCategory: 'beauty', subCategory: 'skincare', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=500&fit=crop', rating: 4.6 },
  { id: 307, name: 'Eye Cream', price: 1899, category: 'treatments', mainCategory: 'beauty', subCategory: 'skincare', image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=500&fit=crop', rating: 4.7 },
  { id: 308, name: 'Sunscreen SPF 50', price: 1499, category: 'suncare', mainCategory: 'beauty', subCategory: 'skincare', image: 'https://images.unsplash.com/photo-1556228852-80a5e2c53b0e?w=400&h=500&fit=crop', rating: 4.8 },

  // Makeup
  { id: 401, name: 'Matte Lipstick Set', price: 1499, category: 'lips', mainCategory: 'beauty', subCategory: 'makeup', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=500&fit=crop', rating: 4.8 },
  { id: 402, name: 'Eye Shadow Palette', price: 1899, category: 'eyes', mainCategory: 'beauty', subCategory: 'makeup', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=500&fit=crop', rating: 4.9 },
  { id: 403, name: 'Foundation', price: 2299, category: 'face', mainCategory: 'beauty', subCategory: 'makeup', image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=500&fit=crop', rating: 4.7 },
  { id: 404, name: 'Mascara', price: 999, category: 'eyes', mainCategory: 'beauty', subCategory: 'makeup', image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=500&fit=crop', rating: 4.6 },
  { id: 405, name: 'Blush Palette', price: 1299, category: 'face', mainCategory: 'beauty', subCategory: 'makeup', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=500&fit=crop', rating: 4.8 },
  { id: 406, name: 'Lip Gloss', price: 799, category: 'lips', mainCategory: 'beauty', subCategory: 'makeup', image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=500&fit=crop', rating: 4.5 },
  { id: 407, name: 'Eyeliner Pen', price: 699, category: 'eyes', mainCategory: 'beauty', subCategory: 'makeup', image: 'https://images.unsplash.com/photo-1583241800698-c318c76ca4e8?w=400&h=500&fit=crop', rating: 4.7 },
  { id: 408, name: 'Makeup Brush Set', price: 2499, category: 'tools', mainCategory: 'beauty', subCategory: 'makeup', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=500&fit=crop', rating: 4.9 },

  // Haircare
  { id: 501, name: 'Hair Treatment Oil', price: 1799, category: 'oils', mainCategory: 'beauty', subCategory: 'haircare', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=500&fit=crop', rating: 4.7 },
  { id: 502, name: 'Nourishing Shampoo', price: 999, category: 'shampoos', mainCategory: 'beauty', subCategory: 'haircare', image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400&h=500&fit=crop', rating: 4.6 },
  { id: 503, name: 'Deep Conditioner', price: 1299, category: 'conditioners', mainCategory: 'beauty', subCategory: 'haircare', image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=500&fit=crop', rating: 4.8 },
  { id: 504, name: 'Hair Serum', price: 1499, category: 'serums', mainCategory: 'beauty', subCategory: 'haircare', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=500&fit=crop', rating: 4.7 },
  { id: 505, name: 'Hair Mask', price: 1699, category: 'masks', mainCategory: 'beauty', subCategory: 'haircare', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=500&fit=crop', rating: 4.9 },
  { id: 506, name: 'Styling Spray', price: 899, category: 'styling', mainCategory: 'beauty', subCategory: 'haircare', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=500&fit=crop', rating: 4.5 },
  { id: 507, name: 'Hair Growth Serum', price: 2299, category: 'treatments', mainCategory: 'beauty', subCategory: 'haircare', image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=500&fit=crop', rating: 4.8 },
  { id: 508, name: 'Leave-in Conditioner', price: 1199, category: 'conditioners', mainCategory: 'beauty', subCategory: 'haircare', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=500&fit=crop', rating: 4.6 },

  // Fragrance
  { id: 601, name: 'Luxury Perfume', price: 4999, category: 'perfumes', mainCategory: 'beauty', subCategory: 'fragrance', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop', rating: 4.9 },
  { id: 602, name: 'Floral Eau de Parfum', price: 3999, category: 'perfumes', mainCategory: 'beauty', subCategory: 'fragrance', image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=500&fit=crop', rating: 4.8 },
  { id: 603, name: 'Body Mist', price: 1299, category: 'mists', mainCategory: 'beauty', subCategory: 'fragrance', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=500&fit=crop', rating: 4.6 },
  { id: 604, name: 'Woody Cologne', price: 5499, category: 'colognes', mainCategory: 'beauty', subCategory: 'fragrance', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=500&fit=crop', rating: 4.9 },
  { id: 605, name: 'Rose Perfume', price: 4499, category: 'perfumes', mainCategory: 'beauty', subCategory: 'fragrance', image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400&h=500&fit=crop', rating: 4.7 },
  { id: 606, name: 'Fresh Body Spray', price: 999, category: 'mists', mainCategory: 'beauty', subCategory: 'fragrance', image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=500&fit=crop', rating: 4.5 },
  { id: 607, name: 'Citrus Cologne', price: 3499, category: 'colognes', mainCategory: 'beauty', subCategory: 'fragrance', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop', rating: 4.8 },
  { id: 608, name: 'Vanilla Perfume', price: 4299, category: 'perfumes', mainCategory: 'beauty', subCategory: 'fragrance', image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=500&fit=crop', rating: 4.7 },

  // Summer Collection
  { id: 701, name: 'Floral Summer Dress', price: 2499, category: 'dresses', mainCategory: 'fashion', subCategory: 'summer', image: '/products/dress1.jpg', rating: 4.7 },
  { id: 702, name: 'Light Cotton Shirt', price: 1499, category: 'tops', mainCategory: 'fashion', subCategory: 'summer', image: '/products/summer1.jpg', rating: 4.5 },
  { id: 703, name: 'Casual Summer Jacket', price: 2999, category: 'outerwear', mainCategory: 'fashion', subCategory: 'summer', image: '/products/jacket1.jpg', rating: 4.6 },
  { id: 704, name: 'Breezy Maxi Dress', price: 3499, category: 'dresses', mainCategory: 'fashion', subCategory: 'summer', image: '/products/dress1.jpg', rating: 4.8 },
  { id: 705, name: 'Linen Shorts', price: 1299, category: 'bottoms', mainCategory: 'fashion', subCategory: 'summer', image: '/products/summer1.jpg', rating: 4.4 },
  { id: 706, name: 'Summer Tank Top', price: 999, category: 'tops', mainCategory: 'fashion', subCategory: 'summer', image: '/products/summer1.jpg', rating: 4.3 },

  // Winter Collection
  { id: 801, name: 'Wool Winter Coat', price: 7999, category: 'outerwear', mainCategory: 'fashion', subCategory: 'winter', image: '/products/coat1.jpg', rating: 4.9 },
  { id: 802, name: 'Cashmere Sweater', price: 5499, category: 'tops', mainCategory: 'fashion', subCategory: 'winter', image: '/products/jacket1.jpg', rating: 4.8 },
  { id: 803, name: 'Thermal Jacket', price: 4999, category: 'outerwear', mainCategory: 'fashion', subCategory: 'winter', image: '/products/jacket1.jpg', rating: 4.7 },
  { id: 804, name: 'Winter Dress', price: 3999, category: 'dresses', mainCategory: 'fashion', subCategory: 'winter', image: '/products/dress1.jpg', rating: 4.6 },
  { id: 805, name: 'Heavy Coat', price: 8999, category: 'outerwear', mainCategory: 'fashion', subCategory: 'winter', image: '/products/coat1.jpg', rating: 4.8 },
  { id: 806, name: 'Knit Cardigan', price: 3499, category: 'tops', mainCategory: 'fashion', subCategory: 'winter', image: '/products/jacket1.jpg', rating: 4.5 },

  // Accessories
  { id: 901, name: 'Designer Handbag', price: 5999, category: 'bags', mainCategory: 'fashion', subCategory: 'accessories', image: '/products/jacket1.jpg', rating: 4.8 },
  { id: 902, name: 'Leather Belt', price: 1499, category: 'belts', mainCategory: 'fashion', subCategory: 'accessories', image: '/products/summer1.jpg', rating: 4.6 },
  { id: 903, name: 'Sunglasses', price: 2499, category: 'eyewear', mainCategory: 'fashion', subCategory: 'accessories', image: '/products/dress1.jpg', rating: 4.7 },
  { id: 904, name: 'Silk Scarf', price: 1999, category: 'scarves', mainCategory: 'fashion', subCategory: 'accessories', image: '/products/summer1.jpg', rating: 4.5 },
  { id: 905, name: 'Watch', price: 6999, category: 'jewelry', mainCategory: 'fashion', subCategory: 'accessories', image: '/products/coat1.jpg', rating: 4.9 },
  { id: 906, name: 'Hat', price: 1299, category: 'hats', mainCategory: 'fashion', subCategory: 'accessories', image: '/products/jacket1.jpg', rating: 4.4 },
];

