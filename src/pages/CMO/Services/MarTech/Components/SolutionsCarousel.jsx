import { useEffect, useRef, useState } from 'react';

const ValueProposition = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const numberRef = useRef(null);
  const stickyRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const items = [
    {
      title: "Strategy built for tech",
      points: [
        "MarTech natives",
        "Platform experts",
        "Positioning pros"
      ]
    },
    {
      title: "Technical marketing engine",
      points: [
        "Full campaign management",
        "Implementation-focused content",
        "Data-driven optimization"
      ]
    },
    {
      title: "Beyond lead generation",
      points: [
        "Technical qualification metrics",
        "Implementation success tracking",
        "User onboarding measurement"
      ]
    },
    {
      title: "Zero overhead operations",
      points: [
        "End-to-end ownership",
        "Integrated reporting dashboard",
        "No technical babysitting"
      ]
    }
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
    const cardRotations = [-4, 2, -2, 3]; // Fixed "bent" angles

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
          const rotation = isMobile ? 0 : cardRotations[index % cardRotations.length]; // No rotation on mobile

          card.style.transform = `translateY(${yOffset}px) scale(${scale}) rotate(${rotation}deg)`;
          card.style.opacity = opacity;
          card.style.zIndex = 100 + index;

          // Stack previous cards with slight offset and fixed rotation
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
                Service offering
              </span>
              <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl md:text-5xl'} font-bold leading-tight text-white mb-4 md:mb-6`}>
                The only
                <span className="text-orange-500 block"> CMO you'll need  </span>
              </h2>

              <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-white mb-6 md:mb-8`}>
                Strategic thinking? Check. Hands-on execution? Double check. Get CMO expertise delivering real results.
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
              <div className={`relative w-full ${isMobile ? 'max-w-sm h-[20rem]' : 'max-w-xl h-[24rem]'} flex items-center justify-center`}>
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
                    <div className={`bg-white border border-gray-200 rounded-xl ${isMobile ? 'p-6' : 'p-8'} w-full h-full shadow-2xl flex flex-col justify-center`}>
                      <div className="w-full">
                        <div className="flex items-center mb-4 md:mb-6">
                          <span className="text-orange-500 text-2xl md:text-3xl font-bold mr-2">#{i + 1}</span>
                          <h3 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold text-gray-900 leading-tight`}>
                            {item.title}
                          </h3>
                        </div>

                        <ul className="space-y-3 md:space-y-4">
                          {item.points.map((point, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-orange-500 text-xl md:text-2xl mr-3">•</span>
                              <span className="text-gray-700 text-lg md:text-xl">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`absolute ${isMobile ? 'bottom-8' : 'bottom-12 lg:bottom-8'} left-1/2 transform -translate-x-1/2 text-center pt-4 lg:pt-16 z-30`}>
          <a
            href="https://outlook.office.com/book/G7dffb8790bab4b95b7e8fd20179d2514@writtenlyhub.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md hover:text-orange-500 font-semibold rounded-full transition-colors duration-700 pointer-events-auto"
          >
            Let's talk 
          </a>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;