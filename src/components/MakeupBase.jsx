import { motion } from 'framer-motion';

const MakeupBase = () => {
  return (
    <div className="pt-[170px] min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="w-24 h-[1px] bg-gray-800 mx-auto mb-6" />
          <h1 className="text-5xl font-serif text-gray-900 mb-6 text-center">Perfect Makeup Base</h1>
          <p className="text-xl text-gray-600 text-center mb-12">Create a flawless foundation</p>
        </motion.div>

        <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1200&h=600&fit=crop" alt="Makeup" className="w-full h-96 object-cover rounded-lg mb-12" />

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-serif mb-4">Step 1: Prime Your Skin</h2>
          <p className="text-gray-700 mb-6">Apply primer to create a smooth canvas. Choose a hydrating primer for dry skin or mattifying for oily skin. Let it set for 2-3 minutes.</p>

          <h2 className="text-3xl font-serif mb-4">Step 2: Color Correct</h2>
          <p className="text-gray-700 mb-6">Use color correctors to neutralize dark circles, redness, or discoloration before applying foundation. Green for redness, peach for dark circles.</p>

          <h2 className="text-3xl font-serif mb-4">Step 3: Foundation Application</h2>
          <p className="text-gray-700 mb-6">Apply foundation with a damp beauty sponge or brush. Start from the center of your face and blend outward. Build coverage gradually.</p>

          <h2 className="text-3xl font-serif mb-4">Step 4: Conceal</h2>
          <p className="text-gray-700 mb-6">Apply concealer in an inverted triangle under eyes and on any blemishes. Use a shade lighter than your foundation for brightening.</p>

          <h2 className="text-3xl font-serif mb-4">Step 5: Set with Powder</h2>
          <p className="text-gray-700 mb-6">Set your base with translucent powder focusing on T-zone. Use a light hand to avoid a cakey finish.</p>

          <div className="bg-rose-50 p-6 rounded-lg mt-8">
            <h3 className="text-2xl font-semibold mb-3">Expert Tips</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Match foundation to your neck, not your face</li>
              <li>Use natural lighting when applying makeup</li>
              <li>Less is more - build coverage gradually</li>
              <li>Set with setting spray for long-lasting wear</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeupBase;
