import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HowItWorks = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);
  
  const dotFillProgress = (index) => {
    const totalSteps = 8.4;
    const stepSize = 0.9 / totalSteps;
    const start = index * stepSize;
    const end = (index + 1) * stepSize;
    return useTransform(scrollYProgress, [start, end], [0, 1]);
  };

  const getCardActiveState = (index) => {
    const totalSteps = 8;
    const stepSize = 0.9 / totalSteps;
    const start = index * stepSize;
    const end = (index + 1) * stepSize;
    return useTransform(scrollYProgress, [start, end], [0, 1]);
  };

  const steps = [
    {
      title: "We don’t onboard. We deep dive.",
      description:
        "We steal your tone, decode your product, and download your positioning like it’s core memory. If it’s in your Notion, we’ve read it twice."
    },
    {
      title: "We stalk your rivals",
      description:
        "We pick apart what competitors publish, rank for, and screw up. Then outrank them."
    },
    {
      title: "You brief us (or we read your calendar)",
      description:
        "Send us your content requests through our simple system. Got a calendar? We'll use it. Random ideas? We’ll organize them."
    },
    {
      title: "We write like we’re part of your damn team.",
      description:
        "Our fintech writers deliver content that nails your voice, respects your compliance guardrails, and hits deadlines like it’s a KPI."
    },
    {
      title: "Creating SEO-optimized, conversion-focused content",
      description:
        "We craft buyer-focused pieces that rank for high-intent keywords and actually drive pipeline."
    },
    {
      title: "Legal review? No problem.",
      description:
        "Get your content back in 2-3 days, ready for compliance review. We know what triggers legal flags and write to avoid them."
    },
    {
      title: "You publish. We move to the next piece.",
      description:
        "While you're publishing consistently, we're already working on your next requests. No bottlenecks, no delays, no excuses."
    },
    {
      title: "We track what hits and kill what doesn’t.",
      description:
        "This isn't guesswork. It's iteration. When a format works, we go full throttle. When it doesn't, we pivot fast."
    }
  ];

  return (
    <section ref={containerRef} className="font-montserrat relative w-full bg-[#022150] py-24 overflow-hidden">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-[80%] mx-auto mb-12 md:mb-16 relative z-30 text-center"
      >
        <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
          How we do it
        </span>
   
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
          From regulatory maze to revenue engine:{" "}
          <span className="text-orange-500">Our fintech content system</span>
        </h2>
      </motion.div>

      {/* Timeline Section */}
      <div className="relative w-[80%] mx-auto z-20">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-500/30 transform -translate-x-1/2 z-0" />
          
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
                  className={`relative flex items-start ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#0a2a6a] border-2 border-orange-500 z-20 overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-orange-500 origin-top"
                      style={{ scaleY: dotFill, transformOrigin: "top" }}
                    />
                  </div>

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
                        opacity: useTransform(cardActiveState, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8])
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
                          borderWidth: useTransform(cardActiveState, [0, 0.3, 0.7, 1], ["1px", "1px", "2px", "1px"]),
                          backgroundColor: useTransform(cardActiveState, [0, 1], [
                            "rgba(255, 255, 255, 0.02)",
                            "rgba(255, 255, 255, 0.05)"
                          ])
                        }}
                      >
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
                            <h3 className="text-lg font-bold text-white">{step.title}</h3>
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
        {/* keeping mobile timeline same, only data replaced */}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="w-[80%] mx-auto mt-12 md:mt-20 text-center"
      >
        <a
          href="https://calendly.com/asthaverma/build-your-personal-brand-with-me"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-16 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-lg hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
        >
          See the system
        </a>
      </motion.div>

    </section>
  );
};

export default HowItWorks;
