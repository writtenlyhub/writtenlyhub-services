import { useEffect, useRef, useState } from 'react';

const ValueProposition = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const numberRef = useRef(null);
  const stickyRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

 const items = [
  {
    title: "LinkedIn presence that books demos while you sleep",
    desc: "Turn your profile into a lead magnet that attracts enterprise buyers who already want to pay premium pricing.",
  },
  {
    title: "Content strategy that sells before you pitch",
    desc: "Establish yourself as the go-to tech authority and pull in 3x more inbound prospects without burning weekends on content.",
  },
  {
    title: "Messaging that makes competitors irrelevant",
    desc: "Differentiate yourself from every other SaaS & Tech founder with content that outperforms typical tech posts by 67%.",
  },
  {
    title: "Reliable lead flow that scales",
    desc: "Generate 25-30 qualified prospects monthly, even when your sales team hits a wall and paid ads tank.",
  },
  {
    title: "Hands-off system that runs without you",
    desc: "Grow your personal brand consistently so you can ship features while qualified enterprise buyers find you organically.",
  },
];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const cardRotations = [-4, 2, -2, 3, 1]; // Fixed "bent" angles

    const handleScroll = () => {
      if (!containerRef.current || !stickyRef.current) return;

      const container = containerRef.current;
      const sticky = stickyRef.current;
      const containerRect = container.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, -containerRect.top / (containerRect.height - window.innerHeight)));

      // Update number based on scroll progress
      const newIndex = Math.min(Math.floor(scrollProgress * items.length), items.length - 1);
      if (newIndex !== currentIndex && numberRef.current) {
        currentIndex = newIndex;
        numberRef.current.textContent = currentIndex + 1;
      }

      // Pin/unpin logic
      if (containerRect.top <= 0 && containerRect.bottom >= window.innerHeight) {
        sticky.style.position = 'fixed';
        sticky.style.top = '0';
        sticky.style.left = '0';
        sticky.style.right = '0';
      } else if (containerRect.top > 0) {
        sticky.style.position = 'absolute';
        sticky.style.top = '0';
        sticky.style.left = '0';
        sticky.style.right = '0';
      } else {
        sticky.style.position = 'absolute';
        sticky.style.top = 'auto';
        sticky.style.bottom = '0';
        sticky.style.left = '0';
        sticky.style.right = '0';
      }

      // Animate cards
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const cardProgress = Math.max(0, Math.min(1, (scrollProgress * items.length) - index));
        const isActive = cardProgress > 0;

        if (isActive) {
          const scale = 0.95 + (cardProgress * 0.05);
          const opacity = Math.min(1, cardProgress * 2);
          const yOffset = (1 - cardProgress) * (isMobile ? 30 : 50);
          const rotation = isMobile ? 0 : cardRotations[index % cardRotations.length];

          card.style.transform = `translateY(${yOffset}px) scale(${scale}) rotate(${rotation}deg)`;
          card.style.opacity = opacity;
          card.style.zIndex = 100 + index;

          // Stack previous cards
          for (let i = 0; i < index; i++) {
            const prevCard = cardsRef.current[i];
            if (prevCard) {
              const stackOffset = (index - i) * (isMobile ? 4 : 8);
              const stackRotation = isMobile ? 0 : cardRotations[i % cardRotations.length];
              prevCard.style.transform = `translateY(${-stackOffset}px) scale(0.95) rotate(${stackRotation}deg)`;
              prevCard.style.opacity = Math.max(0.3, 1 - (index - i) * 0.2);
              prevCard.style.zIndex = 100 - (index - i);
            }
          }
        } else {
          const rotation = isMobile ? 0 : cardRotations[index % cardRotations.length];
          card.style.transform = `translateY(${isMobile ? 50 : 100}px) scale(0.9) rotate(${rotation}deg)`;
          card.style.opacity = '0';
          card.style.zIndex = 100 - index;
        }
      });
    };

    // Initial setup
    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.transform = 'translateY(100px) scale(0.9) rotate(0deg)';
        card.style.opacity = '0';
        card.style.transition = 'all 0.3s ease-out';
        card.style.zIndex = 100 - index;
      }
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section
      ref={containerRef}
      className="bg-[#022150] py-12 md:py-24 font-sans overflow-hidden relative"
      style={{ minHeight: `${(isMobile ? 140 : 100) * items.length + 100}vh` }}
    >
      <div className="w-[90%] md:w-[80%] mx-auto max-w-7xl">
        {/* Sticky container */}
        <div 
          ref={stickyRef}
          className={`h-screen flex items-center justify-center z-20 ${isMobile ? 'pb-36' : 'pb-0'} pointer-events-none`}
          style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
        >
          <div className={`flex ${isMobile ? 'flex-col' : 'items-center justify-between'} w-full max-w-7xl px-4 ${isMobile ? 'gap-6' : 'gap-12'}`}>
            {/* Left Title Section */}
            <div className={`${isMobile ? 'w-full text-center' : 'flex-1 max-w-lg'}`}>
              <span className="text-orange-500 font-medium text-xs md:text-sm uppercase tracking-widest inline-block mb-3 md:mb-4">
                What you’re signing up for
              </span>
              <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl md:text-5xl'} font-bold leading-tight text-white mb-4 md:mb-6`}>
               How I turn your LinkedIn 
                <span className="text-orange-500 ">  into a $300K+ pipeline machine </span>
              </h2>

              <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-white mb-6 md:mb-8`}>
Here's what happens when you stop posting random shit and start building systematic authority: 
              </p>

              {/* Progress indicator */}
              <div className={`flex items-center ${isMobile ? 'justify-center' : ''} gap-4`}>
                <div className={`text-orange-500 ${isMobile ? 'text-2xl' : 'text-4xl'} font-bold`}>
                  <span ref={numberRef}>1</span>
                  <span className={`text-white ${isMobile ? 'text-lg' : 'text-2xl'}`}>/{items.length}</span>
                </div>
                <div className={`${isMobile ? 'flex-1 max-w-32' : 'flex-1'} bg-white/20 h-1 rounded-full overflow-hidden`}>
                  <div 
                    className="bg-orange-500 h-full transition-all duration-300 ease-out"
                    style={{ width: `${((parseInt(numberRef.current?.textContent || '1') - 1) / (items.length - 1)) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Right Cards Section */}
            <div className={`${isMobile ? 'w-full' : 'flex-1'} flex items-center justify-center`}>
              <div className={`relative w-full ${isMobile ? 'max-w-sm h-64' : 'max-w-xl h-96'} flex items-center justify-center`}>
                {items.map((item, i) => (
                  <div
                    key={i}
                    ref={addToRefs}
                    className="absolute inset-0 will-change-transform"
                    style={{ 
                      width: '100%',
                      height: '100%',
                      transformOrigin: 'center center'
                    }}
                  >
                    <div className={`bg-white border border-gray-200 rounded-xl ${isMobile ? 'p-4' : 'p-6'} w-full h-full shadow-2xl flex flex-col items-left justify-center text-left`}>
                      <div className="flex items-left gap-2 md:gap-4">
                        <div className={`text-orange-500 ${isMobile ? 'text-lg' : 'text-3xl'} font-bold`}>
                          #{i + 1}
                        </div>
                        <h3 className={`${isMobile ? 'text-base' : 'text-xl md:text-3xl'} font-bold text-gray-900`}>
                          {item.title}
                        </h3>
                      </div>
                      <p className={`mt-2 md:mt-4 text-gray-600 ${isMobile ? 'text-sm' : 'text-base md:text-xl'} max-w-prose`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`absolute ${isMobile ? 'bottom-8' : 'bottom-12 lg:bottom-8'} left-1/2 transform -translate-x-1/2 text-center pt-4 lg:pt-16 z-30`}>
          <button 
            className="inline-block px-12 py-4 bg-orange-500 hover:bg-white text-white hover:text-orange-500 font-semibold rounded-full transition-colors duration-700 pointer-events-auto"
            onClick={() => window.open("https://calendly.com/asthaverma/build-your-personal-brand-with-me", "_blank")}
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
          >
            Start this
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;