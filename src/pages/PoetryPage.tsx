import React, { useState } from 'react';
import Tree from '../components/Tree';
import PoetryCard from '../components/PoetryCard';
import Modal from '../components/Modal';
import Firefly from '../components/Firefly';
import FallingLeaf from '../components/FallingLeaf';
import ScrollReveal from '../components/ScrollReveal';
import Footer from '../components/Footer';

const poems = [
  {
    title: "Stunning Sight",
    preview: "She walks with grace, a stunning sight to see...",
    fullPoem: `She walks with grace, a stunning sight to see,
Her eyes like the ocean, a deep mystery.
A beautiful brown girl, with lips so sweet,
A temptation to kiss, with every beat.

The way she moves, a dance of pure delight,
Her beauty so rare, it's a wondrous sight.
Her eyes draw you in, like a swirling sea,
A magical world, full of mystery.

And when her lips part, a soft and gentle touch,
You can't help but be lost, in a love so much.
You want to take every drip, into your mouth,
And savor the sweetness, from north to south.

She's a vision of beauty, a goddess in brown,
Her presence alone, can turn your world around.
And when she smiles, your heart skips a beat,
A moment in time, that's truly a treat.

So here's to the brown girl, with eyes like the sea,
Whose beauty and grace, leave us all in ecstasy.
May she always shine, like the stars up above,
And know that her beauty, is a symbol of love..`,
    image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "She",
    preview: "She was a melody....",
    fullPoem: `She was a melody, 
They called her sweet. 
She was an open book 
Whom anyone could read. 
Heart as beautiful as roses  
And a sun smile 
Oh! How lucky is one to have her in their life. 
Someone who is admired 
Someone who is strong 
But what is that life 
When there’s nothing wrong? 
She had some hidden chapters 
That no one ever read. 
Some raw emotions 
Which were left unexpressed. 
Only the mirror knew 
What she hides 
Though, says she is fine 
But 
Eyes – they never lie.
No wonder! 
She is perfect, admirable 
And pretty. 
That is what makes her a sweet melody.`,
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&q=80&w=600",
  },
  
];

function PoetryPage() {
  const [selectedPoem, setSelectedPoem] = useState<typeof poems[0] | null>(null);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 overflow-hidden pt-16 md:pt-20">
      <Tree />
      {[...Array(20)].map((_, i) => (
        <Firefly key={`firefly-${i}`} />
      ))}
      {[...Array(10)].map((_, i) => (
        <FallingLeaf key={`leaf-${i}`} />
      ))}
      
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        <ScrollReveal>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center text-pink-800 mb-6 md:mb-8">
            Love's Poetry Garden
          </h1>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center mt-8 md:mt-16">
          {poems.map((poem, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <PoetryCard
                {...poem}
                onClick={() => setSelectedPoem(poem)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedPoem}
        onClose={() => setSelectedPoem(null)}
        title={selectedPoem?.title || ''}
        poem={selectedPoem?.fullPoem || ''}
        image={selectedPoem?.image || ''}
      />

      <Footer />
    </div>
  );
}

export default PoetryPage