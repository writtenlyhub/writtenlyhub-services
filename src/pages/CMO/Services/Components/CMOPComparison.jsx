import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const blurFadeItem = {
  hidden: { opacity: 0, filter: "blur(12px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { 
      duration: 0.6,
      ease: [0.16, 0.77, 0.47, 0.97]
    }
  },
};

const CMOPComparison = () => {
  const comparisons = [
    {
      traditional: "Slow, untargeted leads that waste time",
      writtenly: "30% more qualified leads in first 60 days"
    },
    {
      traditional: "Haphazard strategies, dragging out timelines",
      writtenly: "40% shorter sales cycles (measured & proven)"
    },
    {
      traditional: "Higher costs, with zero efficiency",
      writtenly: "25% lower customer acquisition costs"
    },
    {
      traditional: "Empty promises, emptier results",
      writtenly: "2.8x marketing ROI (actual tracked results)"
    },
    {
      traditional: "Generic content, failing to engage",
      writtenly: "3x industry average content engagement"
    }
  ];

  return (
    <section id="CMOPComparison" className="font-montserrat relative w-full bg-[#022150] py-12 md:py-20   overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-5"></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 text-center w-[80%] mx-auto mb-16"
      >
        <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
          Service Comparison
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
          <span className="">Traditional CMO vs.</span> <span className="text-orange-500">Writtenlyhub's way</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg sm:text-xl">
          Leadership redefined: Standard marketers vs. our CMO-as-a-Service
        </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="w-[80%] mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Traditional Marketers - Card */}
          <motion.div
            variants={blurFadeItem}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 backdrop-blur-lg"
          >
            <div className="relative">
              <div className="mb-8 pb-4 border-b border-white/10">
                <h3 className="text-3xl font-bold text-white">Traditional Marketers</h3>
              </div>
              
              <ul className="space-y-5">
                {comparisons.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-white/90 text-lg">{item.traditional}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* WrittenlyHub's Way - Card */}
          <motion.div
            variants={blurFadeItem}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 backdrop-blur-lg"
          >
            <div className="relative">
              <div className="mb-8 pb-4 border-b border-orange-500/30">
                <h3 className="text-3xl font-bold text-orange-500">WrittenlyHub's Way</h3>
              </div>
              
              <ul className="space-y-5">
                {comparisons.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white/90 text-lg">{item.writtenly}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
 <motion.div 
  variants={blurFadeItem}
  className="flex justify-center mt-16"
>
  <a
    href="https://outlook.office.com/book/G7dffb8790bab4b95b7e8fd20179d2514@writtenlyhub.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-12 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
  >
    Fix my brand's ROI
  </a>
</motion.div>

        </motion.div>

    </section>
  );
};

export default CMOPComparison;