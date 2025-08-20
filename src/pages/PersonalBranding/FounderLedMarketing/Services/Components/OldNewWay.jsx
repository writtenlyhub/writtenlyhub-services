import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const altCards = [
  {
    title: "DIY Founder Content",
    points: [
      "Post product updates when you remember",
      "3-4 likes from fellow founders",
      "20+ hours weekly away from building",
      "Sound like every other tech founder",
      "Result: Who are you again?",
    ],
  },
  {
    title: "Generic Marketing Agencies",
    points: [
      "Different writer every month",
      "Vanity metrics, no actual pipeline",
      "Constant re-explaining your vision",
      "Treat you like a generic client",
      "Result: Wasted budget",
    ],
  },
  {
    title: "Freelancer Roulette",
    points: [
      "Mass-market founder templates",
      "Generic visibility, zero leads",
      "Pay per post, hope something sticks",
      "One template fits all industries",
      "Result: Totally forgettable",
    ],
  },
];

const writtenlyCard = {
  title: "Astha's System",
  points: [
    { text: "Founder-first personal branding specialists", highlight: true },
    { text: "Strategic founder positioning that sells", highlight: false },
    { text: "22+ qualified prospects monthly", highlight: false },
    { text: "Done-for-you system, 45-minute commitment", highlight: false },
    { text: "Startup founder mindset + lead generation", highlight: false },
    { text: "Built specifically for founder problems", highlight: false },
    // { text: "Result: Industry authority", highlight: false },
  ],
};

const cardRotations = [-3, 2, -2]; // For 3 cards

const OldNewWay = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const stickyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !stickyRef.current) return;
      
      const container = containerRef.current;
      const sticky = stickyRef.current;
      const containerRect = container.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, -containerRect.top / (containerRect.height - window.innerHeight)));
      
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
        sticky.style.bottom = '120px'; // Reduced space for CTA on mobile
        sticky.style.left = '0';
        sticky.style.right = '0';
      }
      
      // Get the left card (WrittenlyHub card)
      const leftCard = document.querySelector('.left-card');
      
      // Animate cards
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        const cardProgress = Math.max(0, Math.min(1, (scrollProgress * altCards.length) - index));
        const isActive = cardProgress > 0;
        
        if (isActive) {
          const scale = 0.95 + (cardProgress * 0.05);
          const opacity = Math.min(1, cardProgress * 2);
          const yOffset = (1 - cardProgress) * (window.innerWidth < 640 ? 40 : 60); // Smaller offset on mobile
          const rotation = cardRotations[index % cardRotations.length];
          
          card.style.transform = `translateY(${yOffset}px) scale(${scale}) rotate(${rotation}deg)`;
          card.style.opacity = opacity;
          card.style.zIndex = 100 + index;
          
          // Animate left card simultaneously with first right card
          if (index === 0 && leftCard) {
            leftCard.style.opacity = opacity;
            leftCard.style.transform = `translateY(${yOffset}px) scale(${scale})`;
          }
          
          // Stack previous cards
          for (let i = 0; i < index; i++) {
            const prevCard = cardsRef.current[i];
            if (prevCard) {
              const stackOffset = (index - i) * (window.innerWidth < 640 ? 8 : 12); // Smaller stack offset on mobile
              const stackRotation = cardRotations[i % cardRotations.length];
              prevCard.style.transform = `translateY(${-stackOffset}px) scale(0.92) rotate(${stackRotation}deg)`;
              prevCard.style.opacity = Math.max(0.4, 1 - (index - i) * 0.2);
              prevCard.style.zIndex = 100 - (index - i);
            }
          }
        } else {
          const rotation = cardRotations[index % cardRotations.length];
          card.style.transform = `translateY(${window.innerWidth < 640 ? 60 : 100}px) scale(0.9) rotate(${rotation}deg)`;
          card.style.opacity = '0';
          card.style.zIndex = 100 - index;
          
          // Hide left card when no right cards are active
          if (index === 0 && leftCard) {
            leftCard.style.opacity = '0';
            leftCard.style.transform = `translateY(${window.innerWidth < 640 ? 60 : 100}px) scale(0.9)`;
          }
        }
      });
    };
    
    // Initial setup
    cardsRef.current.forEach((card, index) => {
      if (card) {
        const rotation = cardRotations[index % cardRotations.length];
        card.style.transform = `translateY(${window.innerWidth < 640 ? 60 : 100}px) scale(0.9) rotate(${rotation}deg)`;
        card.style.opacity = '0';
        card.style.transition = 'all 0.3s cubic-bezier(.4,1,.4,1)';
        card.style.zIndex = 100 - index;
      }
    });
    
    // Initialize left card
    const leftCard = document.querySelector('.left-card');
    if (leftCard) {
      leftCard.style.opacity = '0';
      leftCard.style.transform = `translateY(${window.innerWidth < 640 ? 60 : 100}px) scale(0.9)`;
      leftCard.style.transition = 'all 0.3s cubic-bezier(.4,1,.4,1)';
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section
    id="OldNewWay"
      ref={containerRef}
      className="relative w-full bg-[#022150] py-12 sm:py-20"
      style={{ height: `${window.innerHeight * (altCards.length + (window.innerWidth < 640 ? 1.2 : 1.5))}px` }} // Adjusted height for mobile
    >
      {/* Header - Fixed at top */}
      <div className="w-[90%] sm:w-[80%] mx-auto mb-12 sm:mb-32 text-center relative z-50">
        <span className="text-orange-500 font-medium text-sm sm:text-md uppercase tracking-widest">
          Old way vs new way
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
          The 4 ways founders handle {" "}
          <span className="text-orange-500 block">LinkedIn marketing (only 1 actually works)</span>
        </h2>
        {/* <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg">
          The proven alternative to traditional LinkedIn approaches
        </p> */}
      </div>

      {/* Cards container - not absolutely positioned */}
      <div 
        ref={stickyRef}
        className="flex items-start justify-center z-50 mt-8 sm:mt-34"
      >
        <div className="w-[90%] sm:w-[80%] mx-auto flex flex-col lg:flex-row gap-6 sm:gap-10 lg:gap-16 items-start justify-center">
          {/* WrittenlyHub Card (left) */}
          <div
            className="left-card bg-orange-500 p-5 sm:p-7 rounded-2xl shadow-2xl border-4 border-orange-500 w-full sm:min-w-[280px] sm:max-w-xs flex-shrink-0 lg:ml-8"
            style={{
              opacity: 0,
              transform: `translateY(${window.innerWidth < 640 ? 60 : 100}px) scale(0.9)`,
              transition: 'all 0.3s cubic-bezier(.4,1,.4,1)'
            }}
          >
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-5">
              {writtenlyCard.title}
            </h4>
            <div className="flex flex-col gap-2 sm:gap-3">
              {writtenlyCard.points.map((point, idx) => (
                <div
                  key={idx}
                  className={`text-xs sm:text-sm md:text-base rounded-md px-3 py-2 ${
                    typeof point === "string"
                      ? "bg-white/10 text-white"
                      : point.highlight
                      ? "bg-white text-orange-500 font-bold"
                      : "bg-white/10 text-white"
                  } flex items-start gap-2`}
                >
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span>{typeof point === "string" ? point : point.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Alternatives (right, stacked scroll animation) */}
          <div className="relative flex-1 w-full sm:max-w-lg lg:max-w-xl min-h-[320px] sm:min-h-[480px]">
            {altCards.map((card, i) => (
              <div
                key={card.title}
                ref={addToRefs}
                className="absolute inset-0 w-full p-5 sm:p-7 rounded-xl border border-[#1a3f77] shadow-2xl bg-[#102e5c] flex flex-col justify-between min-h-[300px] sm:min-h-[420px] will-change-transform"
                style={{
                  transformOrigin: 'center center',
                }}
              >
                <div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-500 mb-3 sm:mb-5">
                    {card.title}
                  </h4>
                  <div className="flex flex-col gap-2 sm:gap-3 flex-1">
                    {card.points.map((point, idx) => (
                      <div
                        key={idx}
                        className="text-xs sm:text-sm md:text-base rounded-md px-3 sm:px-4 py-2 sm:py-3 bg-[#173a6d] text-white"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA - Fixed at bottom */}
               <div className="absolute bottom-6  left-1/2 transform -translate-x-1/2 text-center z-50">
                 <motion.button 
className="inline-block px-12 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md  hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"             
                     onClick={() => window.open("https://calendly.com/asthaverma/build-your-personal-brand-with-me", "_blank")}
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
                 >
                   Claim authority  
                 </motion.button>
               </div>
             </section>
           );
         };
         
         export default OldNewWay;