import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MarketingJourney = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);
  
  // Enhanced dotFillProgress function with top-to-bottom fill
  const dotFillProgress = (index) => {
    const totalSteps = 7.4; // Number of steps
    const stepSize = 0.9 / totalSteps; // Each step takes this portion of scroll
    const start = index * stepSize;
    const end = (index + 1) * stepSize;
    return useTransform(scrollYProgress, [start, end], [0, 1]);
  };

  // Function to determine if a card is currently active (being filled)
  const getCardActiveState = (index) => {
    const totalSteps = 7;
    const stepSize = 0.9 / totalSteps;
    const start = index * stepSize;
    const end = (index + 1) * stepSize;
    return useTransform(scrollYProgress, [start, end], [0, 1]);
  };

const steps = [
  {
    title: "Portfolio check-up",
    description: "We dig into your startups' marketing mess, identify what's actually working (spoiler: usually not much)."
  },
  {
    title: "Getting intimate",
    description: "We spend time learning your portfolio's unique needs, funding stages, and investor expectations first."
  },
  {
    title: "Competitor stalking",
    description: "We analyze what other incubators do wrong so your portfolio stands out like the obvious choice."
  },
  {
    title: "Marketing detox",
    description: "We organize your portfolio's marketing chaos with proper systems, tools, and processes that actually work."
  },
  {
    title: "Strategic plotting",
    description: "Custom marketing plans for each startup stage - from seed to Series A and beyond."
  },
  {
    title: "Launch & obsess",
    description: "We launch campaigns, obsess over metrics that matter to investors, and tweak until growth happens."
  },
  {
    title: "Scale like crazy",
    description: "What's working gets amplified across the portfolio. What's not gets ditched. Growth with zero waste."
  }
];


  return (
    <section ref={containerRef} className="font-montserrat relative w-full bg-[#022150] py-12 md:py-20 overflow-hidden">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-[80%] mx-auto mb-12 md:mb-16 relative z-30 text-center"
      >
          <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
 Your journey ahead
         </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
  How we turn your  <span className="text-orange-500 block">portfolio into growth machines </span>
        </h2>
          {/* <p className="text-gray-300 max-w-2xl mx-auto text-xl">
          A structured approach to technical marketing that delivers
        </p> */}
      </motion.div>

      {/* Timeline Section */}
      <div className="relative w-[80%] mx-auto z-20">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Vertical Line Background (full height) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-500/30 transform -translate-x-1/2 z-0" />
          
          {/* Animated Fill Line */}
          <motion.div 
            className="absolute left-1/2 top-0 w-1 bg-orange-500 transform -translate-x-1/2 z-0"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-8 relative z-10">
            {steps.map((step, index) => {
              const dotFill = dotFillProgress(index);
              const cardActiveState = getCardActiveState(index);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Dot with fill animation - now top to bottom */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#0a2a6a] border-2 border-orange-500 z-20 overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-orange-500 origin-top"
                      style={{ 
                        scaleY: dotFill,
                        transformOrigin: "top" // Changed from "bottom" to "top"
                      }}
                    />
                  </div>

                  {/* Content positioned to the right of the dot */}
                  <div className={`w-[45%] ${index % 2 === 0 ? "ml-8" : "mr-8"}`}>
                    <motion.div
                      className="relative"
                      style={{
                        filter: useTransform(cardActiveState, [0, 0.3, 0.7, 1], [
                          "drop-shadow(0 0 0px rgba(249, 115, 22, 0))",
                          "drop-shadow(0 0 8px rgba(249, 115, 22, 0.3))",
                          "drop-shadow(0 0 16px rgba(249, 115, 22, 0.6))",
                          "drop-shadow(0 0 8px rgba(249, 115, 22, 0.3))"
                        ]),
                        opacity: useTransform(cardActiveState, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8]) // Added opacity animation
                      }}
                    >
                      <motion.div
                       className="bg-white/5 border rounded-xl p-6 relative overflow-hidden"
                        style={{
                          borderColor: useTransform(cardActiveState, [0, 0.3, 0.7, 1], [
                            "rgba(255, 255, 255, 0.1)",
                            "rgba(249, 115, 22, 0.3)",
                            "rgba(249, 115, 22, 0.8)",
                            "rgba(249, 115, 22, 0.3)"
                          ]),
                          borderWidth: useTransform(cardActiveState, [0, 0.3, 0.7, 1], [
                            "1px",
                            "1px",
                            "2px",
                            "1px"
                          ]),
                          backgroundColor: useTransform(cardActiveState, [0, 1], [
                            "rgba(255, 255, 255, 0.02)",
                            "rgba(255, 255, 255, 0.05)"
                          ])
                        }}
                      >
                        {/* Animated glow border overlay */}
                        <motion.div
                          className="absolute inset-0 rounded-xl pointer-events-none"
                          style={{
                            background: useTransform(cardActiveState, [0, 0.3, 0.7, 1], [
                              "linear-gradient(45deg, transparent, transparent)",
                              "linear-gradient(45deg, rgba(249, 115, 22, 0.05), rgba(249, 115, 22, 0.02))",
                              "linear-gradient(45deg, rgba(249, 115, 22, 0.1), rgba(249, 115, 22, 0.05))",
                              "linear-gradient(45deg, rgba(249, 115, 22, 0.05), rgba(249, 115, 22, 0.02))"
                            ])
                          }}
                        />
                        
                        <div className="relative z-10">
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center mr-3">
                              <span className="text-white font-bold text-sm">{index + 1}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                          </div>
                          <p className="text-gray-300 text-lg leading-relaxed">{step.description}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden">
          {/* Vertical Line Background (full height) */}
          <div className="absolute left-5.5 top-0 bottom-0 w-1 bg-blue-500/30 z-0" />
          
          {/* Animated Fill Line */}
          <motion.div 
            className="absolute left-5.5 top-0 w-1 bg-orange-500 z-0"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-6 relative z-10">
            {steps.map((step, index) => {
              const dotFill = dotFillProgress(index);
              const cardActiveState = getCardActiveState(index);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative flex items-start"
                >
                  {/* Dot with fill animation - now top to bottom */}
                  <div className="absolute left-6 transform -translate-x-1/2 w-5 h-5 rounded-full bg-[#022150] border-2 border-orange-500 z-20 overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-orange-500 origin-top"
                      style={{ 
                        scaleY: dotFill,
                        transformOrigin: "top" // Changed from "bottom" to "top"
                      }}
                    />
                  </div>

                  {/* Content positioned to the right of the dot */}
                  <div className="ml-12 flex-1">
                    <motion.div
                      className="relative"
                      style={{
                        filter: useTransform(cardActiveState, [0, 0.3, 0.7, 1], [
                          "drop-shadow(0 0 0px rgba(249, 115, 22, 0))",
                          "drop-shadow(0 0 6px rgba(249, 115, 22, 0.3))",
                          "drop-shadow(0 0 12px rgba(249, 115, 22, 0.6))",
                          "drop-shadow(0 0 6px rgba(249, 115, 22, 0.3))"
                        ]),
                        opacity: useTransform(cardActiveState, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8]) // Added opacity animation
                      }}
                    >
                      <motion.div
                        className="bg-[#022150] border rounded-lg p-4 relative overflow-hidden"
                        style={{
                          borderColor: useTransform(cardActiveState, [0, 0.3, 0.7, 1], [
                            "rgba(255, 255, 255, 0.1)",
                            "rgba(249, 115, 22, 0.3)",
                            "rgba(249, 115, 22, 0.8)",
                            "rgba(249, 115, 22, 0.3)"
                          ]),
                          borderWidth: useTransform(cardActiveState, [0, 0.3, 0.7, 1], [
                            "1px",
                            "1px",
                            "2px",
                            "1px"
                          ]),
                          backgroundColor: useTransform(cardActiveState, [0, 1], [
                            "rgba(2, 33, 80, 1)",
                            "rgba(2, 33, 80, 0.9)"
                          ])
                        }}
                      >
                        {/* Animated glow border overlay */}
                        <motion.div
                          className="absolute inset-0 rounded-lg pointer-events-none"
                          style={{
                            background: useTransform(cardActiveState, [0, 0.3, 0.7, 1], [
                              "linear-gradient(45deg, transparent, transparent)",
                              "linear-gradient(45deg, rgba(249, 115, 22, 0.05), rgba(249, 115, 22, 0.02))",
                              "linear-gradient(45deg, rgba(249, 115, 22, 0.1), rgba(249, 115, 22, 0.05))",
                              "linear-gradient(45deg, rgba(249, 115, 22, 0.05), rgba(249, 115, 22, 0.02))"
                            ])
                          }}
                        />
                        
                        <div className="relative z-10">
                          <div className="flex items-center mb-3">
                            <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center mr-3">
                              <span className="text-white font-bold text-xs">{index + 1}</span>
                            </div>
                            <h3 className="text-lg font-bold text-white">{step.title}</h3>
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  viewport={{ once: true }}
  className="w-[80%] mx-auto mt-12 md:mt-20 text-center"
>
  <motion.a
    href="https://outlook.office.com/book/G7dffb8790bab4b95b7e8fd20179d2514@writtenlyhub.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-12 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    viewport={{ once: true }}
  >
Start now
  </motion.a>
</motion.div>

    </section>
  );
};

export default MarketingJourney;