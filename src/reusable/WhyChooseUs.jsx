import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

const WhyChooseUs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const cards = [
    {
      title: "Tailored Content Strategy",
      description: "Aligned with your goals, brand, and audience.",
      color: "bg-[#022150]",
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Fast Turnaround",
      description: "Save time with a reliable content creation engine.",
      color: "bg-[#E76D18]",
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Measurable Results",
      description: "Track performance and optimize for ROI.",
      color: "bg-[#1E40AF]",
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Creative Expertise",
      description: "Expert writers, designers, and strategists in sync.",
      color: "bg-[#065F46]",
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    }
  ];

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen flex flex-col items-center justify-center bg-[#022150] py-12 md:py-16"
    >
      {/* Header */}
      <div className="relative text-center w-full px-6" style={{ zIndex: 1000 }}>
        <span className="text-orange-500 font-medium text-sm uppercase tracking-widest">
          Our Advantages
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
          Why <span className="text-orange-500">Choose Us</span>
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto text-lg">
          We transform your content into a powerful growth engine
        </p>
      </div>

      {/* Cards Container */}
      <div className="relative w-[90%] sm:w-[82%] md:w-[87%] max-w-4xl mt-8">
        {cards.map((card, index) => {
          const targetScale = 1 - (cards.length - index) * 0.05;
          const { scrollYProgress } = useScroll({
            target: containerRef,
            offset: ["start start", "end end"],
          });

          const scale = useTransform(scrollYProgress, [index * 0.25, 1], [1, targetScale]);
          const opacity = useTransform(scrollYProgress, [index * 0.25, index * 0.25 + 0.2], [1, 0]);

          return (
            <motion.div
              key={index}
              className="relative flex items-center justify-center h-[85vh] sticky top-0"
              style={{ scale }}
            >
              <div className={`w-full sm:w-[80%] md:w-[75%] max-w-2xl rounded-2xl md:rounded-3xl text-white ${card.color} overflow-hidden relative`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-white/5"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/10 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
                
                {/* Card Content */}
                <div className="relative z-10 h-full flex flex-col justify-center items-center p-6 md:p-8">
                  {/* Icon Container */}
                  <div className="relative mb-6 md:mb-8">
                    <div className="absolute inset-0 bg-white/10 rounded-xl md:rounded-2xl blur-sm"></div>
                    <div className="relative text-white p-4 md:p-6 bg-white/15 rounded-xl md:rounded-2xl border border-white/20 backdrop-blur-sm">
                      {card.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-center px-4 leading-tight">
                    {card.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/90 max-w-lg text-center px-4 md:px-6 text-lg md:text-xl leading-relaxed mb-6 md:mb-8">
                    {card.description}
                  </p>
                  
                  {/* Feature Points */}
                  <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-md">
                    {index === 0 && (
                      <>
                        <span className="px-3 py-1 md:px-4 md:py-2 bg-white/10 rounded-full text-xs md:text-sm border border-white/20">Brand Alignment</span>
                        <span className="px-3 py-1 md:px-4 md:py-2 bg-white/10 rounded-full text-xs md:text-sm border border-white/20">Goal-Oriented</span>
                        <span className="px-3 py-1 md:px-4 md:py-2 bg-white/10 rounded-full text-xs md:text-sm border border-white/20">Audience-Focused</span>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <span className="px-3 py-1 md:px-4 md:py-2 bg-white/10 rounded-full text-xs md:text-sm border border-white/20">Quick Delivery</span>
                        <span className="px-3 py-1 md:px-4 md:py-2 bg-white/10 rounded-full text-xs md:text-sm border border-white/20">Reliable Process</span>
                        <span className="px-3 py-1 md:px-4 md:py-2 bg-white/10 rounded-full text-xs md:text-sm border border-white/20">Time Efficient</span>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <span className="px-3 py-1 md:px-4 md:py-2 bg-white/10 rounded-full text-xs md:text-sm border border-white/20">ROI Tracking</span>
                        <span className="px-3 py-1 md:px-4 md:py-2 bg-white/10 rounded-full text-xs md:text-sm border border-white/20">Performance Metrics</span>
                        <span className="px-3 py-1 md:px-4 md:py-2 bg-white/10 rounded-full text-xs md:text-sm border border-white/20">Data-Driven</span>
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <span className="px-3 py-1 md:px-4 md:py-2 bg-white/10 rounded-full text-xs md:text-sm border border-white/20">Expert Team</span>
                        <span className="px-3 py-1 md:px-4 md:py-2 bg-white/10 rounded-full text-xs md:text-sm border border-white/20">Creative Solutions</span>
                        <span className="px-3 py-1 md:px-4 md:py-2 bg-white/10 rounded-full text-xs md:text-sm border border-white/20">Strategic Approach</span>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Spacer and CTA Button */}
      <div className="mt-8">
        <button className="px-6 py-3 text-lg font-bold text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default WhyChooseUs;