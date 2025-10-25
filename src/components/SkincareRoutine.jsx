import { motion } from 'framer-motion';

const SkincareRoutine = () => {
  return (
    <div className="pt-[170px] min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="w-24 h-[1px] bg-gray-800 mx-auto mb-6" />
          <h1 className="text-5xl font-serif text-gray-900 mb-6 text-center">Morning Skincare Routine</h1>
          <p className="text-xl text-gray-600 text-center mb-12">Start your day with these essential steps</p>
        </motion.div>

        <img src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&h=600&fit=crop" alt="Skincare" className="w-full h-96 object-cover rounded-lg mb-12" />

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-serif mb-4">Step 1: Cleanse</h2>
          <p className="text-gray-700 mb-6">Start with a gentle cleanser to remove overnight oils and impurities. Use lukewarm water and massage in circular motions for 60 seconds.</p>

          <h2 className="text-3xl font-serif mb-4">Step 2: Tone</h2>
          <p className="text-gray-700 mb-6">Apply toner with a cotton pad or your hands to balance your skin's pH and prepare it for better absorption of subsequent products.</p>

          <h2 className="text-3xl font-serif mb-4">Step 3: Serum</h2>
          <p className="text-gray-700 mb-6">Use a vitamin C serum to brighten and protect your skin from environmental damage. Apply 2-3 drops and gently pat into skin.</p>

          <h2 className="text-3xl font-serif mb-4">Step 4: Moisturize</h2>
          <p className="text-gray-700 mb-6">Lock in hydration with a lightweight moisturizer suitable for your skin type. Don't forget your neck and décolletage.</p>

          <h2 className="text-3xl font-serif mb-4">Step 5: Sunscreen</h2>
          <p className="text-gray-700 mb-6">The most important step! Apply SPF 50 sunscreen as the final step. Reapply every 2 hours if you're outdoors.</p>

          <div className="bg-rose-50 p-6 rounded-lg mt-8">
            <h3 className="text-2xl font-semibold mb-3">Pro Tips</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Wait 30 seconds between each step for better absorption</li>
              <li>Use upward motions when applying products</li>
              <li>Don't skip sunscreen even on cloudy days</li>
              <li>Consistency is key - stick to your routine daily</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkincareRoutine;
