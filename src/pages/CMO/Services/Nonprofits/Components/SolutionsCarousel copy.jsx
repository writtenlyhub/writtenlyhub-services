import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const solutions = [
  {
    id: 1,
    title: "Strategic Expertise",
    subtitle: "Senior SaaS Marketers",
    description: "Industry-specific knowledge with growth-focused strategy",
    bullets: [
      "Senior SaaS marketers",
      "Industry-specific knowledge",
      "Growth-focused strategy"
    ],
    visual: "https://i.ibb.co/XxkjpxdW/infdia.png"
  },
  {
    id: 2,
    title: "Comprehensive Execution",
    subtitle: "No Vendor Juggling",
    description: "Complete implementation system for campaigns that perform",
    bullets: [
      "Campaigns that perform",
      "No vendor juggling",
      "Complete implementation system"
    ],
    visual: "https://i.ibb.co/XxkjpxdW/infdia.png"
  },
  {
    id: 3,
    title: "Tangible Results",
    subtitle: "Revenue-Focused Metrics",
    description: "Data-driven optimization with clear performance reporting",
    bullets: [
      "Revenue-focused metrics",
      "Clear performance reporting",
      "Data-driven optimization",
      "Bottom-line impact"
    ],
    visual: "/api/placeholder/600/400"
  },
  {
    id: 4,
    title: "Simplified Touchpoints",
    subtitle: "One Central Team",
    description: "No hiring headaches with single-point accountability",
    bullets: [
      "One central touchpoint",
      "No hiring headaches"
    ],
    visual: "/api/placeholder/600/400"
  }
];

const SolutionsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [slideDirection, setSlideDirection] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isMobile && !isHovered) {
      timerRef.current = setInterval(() => {
        setSlideDirection('right');
        setCurrentIndex((prev) => (prev === solutions.length - 1 ? 0 : prev + 1));
      }, 4000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isMobile, isHovered]);

  const nextSlide = () => {
    setSlideDirection('right');
    setCurrentIndex((prev) => (prev === solutions.length - 1 ? 0 : prev + 1));
    // Reset timer when manually navigating
    resetTimer();
  };

  const prevSlide = () => {
    setSlideDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? solutions.length - 1 : prev - 1));
    // Reset timer when manually navigating
    resetTimer();
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      if (!isHovered) {
        setSlideDirection('right');
        setCurrentIndex((prev) => (prev === solutions.length - 1 ? 0 : prev + 1));
      }
    }, 6000);
  };

  const getVisibleCards = () => {
    const prevIndex = currentIndex === 0 ? solutions.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === solutions.length - 1 ? 0 : currentIndex + 1;
    return [
      { ...solutions[prevIndex], position: 'left' },
      { ...solutions[currentIndex], position: 'center' },
      { ...solutions[nextIndex], position: 'right' }
    ];
  };

  const visibleCards = getVisibleCards();

  const toggleMobileCard = (id) => {
    setMobileOpen(mobileOpen === id ? null : id);
  };

  // Animation variants
  const cardVariants = {
    enter: (direction) => {
      return {
        x: direction === 'right' ? 300 : -300,
        opacity: 0,
        scale: 0.9,
      };
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1.1,
      zIndex: 10,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    exit: (direction) => {
      return {
        x: direction === 'right' ? -300 : 300,
        opacity: 0,
        scale: 0.9,
        transition: {
          duration: 0.5,
          ease: "easeInOut"
        }
      };
    }
  };

  return (
    <section className="font-montserrat relative w-full bg-[#022150] py-12 md:py-20 overflow-hidden flex flex-col">
      <div className="w-[90%] mx-auto relative z-30 mb-auto">
        {/* Header Section */}
        <div className="text-center mb-22 md:mb-28">
          <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
            The only CMO you'll need
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mt-2 md:mt-3 mb-3 md:mb-4">
            Your <span className="text-orange-500">Full-Service</span> marketing team
          </h2>
          <p className="text-gray-300 text-xl">
            Strategic thinking? Check. Hands-on execution? Double check. Get CMO expertise delivering real results.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block relative h-[500px]">
          {/* Cards */}
          <div className="flex items-center justify-center h-full gap-[35%] relative">
            {/* Left Card - Static */}
            <div className="w-[380px] opacity-70 scale-90 z-0">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden h-full transition-all duration-300 shadow-md flex flex-col">
                <div className="p-4 transition-all duration-500 order-1">
                  <div>
                    <h4 className="text-orange-500 text-sm md:text-md font-medium uppercase tracking-wider">
                      {visibleCards[0].subtitle}
                    </h4>
                    <h3 className="font-bold text-white mt-1 transition-all duration-500 text-xl md:text-2xl">
                      {visibleCards[0].title}
                    </h3>
                  </div>
                </div>
                <div className="w-full overflow-hidden transition-all duration-500 h-[250px] order-2">
                  <img
                    src={visibleCards[0].visual}
                    alt={visibleCards[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Center Card - Animated */}
            <AnimatePresence initial={false} custom={slideDirection} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={slideDirection}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-[400px] absolute left-1/2 transform -translate-x-1/2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden h-full transition-all duration-300 shadow-lg flex flex-col">
                  <div className="p-6 transition-all duration-500 order-1">
                    <div>
                      <h4 className="text-orange-500 text-sm md:text-md font-medium uppercase tracking-wider">
                        {visibleCards[1].subtitle}
                      </h4>
                      <h3 className="font-bold text-white mt-1 transition-all duration-500 text-xl md:text-2xl">
                        {visibleCards[1].title}
                      </h3>
                    </div>
                    <div className="max-h-[200px] opacity-100 mt-3">
                      <ul className="space-y-0.5">
                        {visibleCards[1].bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-orange-500 text-lg mr-2">•</span>
                            <span className="text-gray-300 text-md font-medium">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="w-full overflow-hidden transition-all duration-500 h-[300px] order-2">
                    <img
                      src={visibleCards[1].visual}
                      alt={visibleCards[1].title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right Card - Static */}
            <div className="w-[380px] opacity-70 scale-90 z-0">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden h-full transition-all duration-300 shadow-md flex flex-col">
                <div className="p-4 transition-all duration-500 order-1">
                  <div>
                    <h4 className="text-orange-500 text-sm md:text-md font-medium uppercase tracking-wider">
                      {visibleCards[2].subtitle}
                    </h4>
                    <h3 className="font-bold text-white mt-1 transition-all duration-500 text-xl md:text-2xl">
                      {visibleCards[2].title}
                    </h3>
                  </div>
                </div>
                <div className="w-full overflow-hidden transition-all duration-500 h-[250px] order-2">
                  <img
                    src={visibleCards[2].visual}
                    alt={visibleCards[2].title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors z-30 border border-white/10"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors z-30 border border-white/10"
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Mobile Accordion View */}
        <div className="lg:hidden space-y-4">
          {solutions.map((card) => (
            <div key={card.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleMobileCard(card.id)}
                className="w-full p-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500">
                    <img
                      src={card.visual}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-white">{card.title}</h3>
                </div>
                {mobileOpen === card.id ? (
                  <ChevronUp className="text-white" />
                ) : (
                  <ChevronDown className="text-white" />
                )}
              </button>
              <AnimatePresence>
                {mobileOpen === card.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 text-sm text-gray-300">
                      <p className="mb-2">{card.description}</p>
                      <ul className="space-y-1">
                        {card.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-orange-400 mr-2">•</span>
                            <span className="font-medium">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button at the bottom */}
      {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 mb-10 mt-18">
        <div
            className="inline-block px-6 py-3 bg-orange-500 cursor-pointer hover:bg-white text-white text-md  hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
        >
          Get started
        </div>
      </div> */}
    </section>
  );
};

export default SolutionsCarousel;