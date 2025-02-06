import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import Firefly from '../components/Firefly';
import Tree from '../components/Tree';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50">
      <Tree />
      {[...Array(20)].map((_, i) => (
        <Firefly key={`firefly-${i}`} />
      ))}

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 pb-12 md:pb-16 px-4">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-4 md:mb-6"
              >
                <Heart className="w-12 h-12 md:w-16 md:h-16 text-pink-500" />
              </motion.div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-pink-800 mb-4 md:mb-6">
                Dear Jyoti
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 px-4">
                Every moment with you is a poem waiting to be written
              </p>
              <motion.a
                href="/poetry"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors text-sm md:text-base"
              >
                View My Poetry
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <ScrollReveal delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-[16/9] rounded-xl md:rounded-2xl overflow-hidden mb-8 md:mb-12">
                <img
                  src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&q=80&w=1200"
                  alt="Romantic sunset"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center px-4 md:px-0">
                <h2 className="font-serif text-2xl md:text-3xl text-pink-800 mb-4 md:mb-6">Dedicated to Your Beauty</h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  This collection of poetry is a tribute to your radiant beauty, both inside and out.
                  Each verse is inspired by your smile, your grace, and the countless moments we've shared together.
                  You are my muse, my inspiration, and the reason these words flow from my heart.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;