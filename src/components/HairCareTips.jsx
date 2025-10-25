import { motion } from 'framer-motion';

const HairCareTips = () => {
  return (
    <div className="pt-[170px] min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="w-24 h-[1px] bg-gray-800 mx-auto mb-6" />
          <h1 className="text-5xl font-serif text-gray-900 mb-6 text-center">Natural Hair Care</h1>
          <p className="text-xl text-gray-600 text-center mb-12">Tips for healthy, shiny hair</p>
        </motion.div>

        <img src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=1200&h=600&fit=crop" alt="Hair Care" className="w-full h-96 object-cover rounded-lg mb-12" />

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-serif mb-4">Wash Properly</h2>
          <p className="text-gray-700 mb-6">Shampoo only your scalp, not the lengths. Use lukewarm water and massage gently. Rinse thoroughly to prevent product buildup.</p>

          <h2 className="text-3xl font-serif mb-4">Condition Right</h2>
          <p className="text-gray-700 mb-6">Apply conditioner from mid-length to ends, avoiding the scalp. Leave for 2-3 minutes before rinsing with cool water to seal cuticles.</p>

          <h2 className="text-3xl font-serif mb-4">Deep Conditioning</h2>
          <p className="text-gray-700 mb-6">Use a hair mask once a week for intense hydration. Apply to damp hair, cover with a shower cap, and leave for 20-30 minutes.</p>

          <h2 className="text-3xl font-serif mb-4">Oil Treatment</h2>
          <p className="text-gray-700 mb-6">Massage warm coconut or argan oil into your scalp and hair. Leave overnight or for at least 2 hours before washing.</p>

          <h2 className="text-3xl font-serif mb-4">Protect from Heat</h2>
          <p className="text-gray-700 mb-6">Always use heat protectant spray before styling. Keep heat tools on medium settings and limit use to 2-3 times per week.</p>

          <div className="bg-rose-50 p-6 rounded-lg mt-8">
            <h3 className="text-2xl font-semibold mb-3">Hair Care Essentials</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Trim hair every 6-8 weeks to prevent split ends</li>
              <li>Use a silk pillowcase to reduce friction</li>
              <li>Avoid tight hairstyles that cause breakage</li>
              <li>Stay hydrated and eat protein-rich foods</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HairCareTips;
