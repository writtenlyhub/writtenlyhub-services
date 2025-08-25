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
    traditional: "Random content calendar posts",
    writtenly: "30% more qualified leads within 60 days, not years"
  },
  {
    traditional: "Spray and pray lead generation",
    writtenly: "67% boost in sales-ready prospects (actually worth your time)"
  },
  {
    traditional: "Marketing campaigns that \"look pretty\"",
    writtenly: "94% retention rate. We're good at this sh*t"
  },
  {
    traditional: "Reporting that confuses more than clarifies",
    writtenly: "35% reduction in CAC; more money in your pocket"
  },
  {
    traditional: "Generic strategies from 2019",
    writtenly: "Content that performs 3.2x better than industry average"
  },
  {
    traditional: "Teams that churn every 6 months",
    writtenly: "Marketing spend that actually f*cking makes sense"
  }
];


  return (
    <section id="CMOPComparison" className="font-montserrat relative w-full bg-[#022150] py-12 md:py-20 overflow-hidden">
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
          Compare us!
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
          <span className="">Most auto marketing agencies vs.</span> <span className="text-orange-500">what actually works</span>
        </h2>
   <p className="text-gray-300 max-w-2xl mx-auto text-lg sm:text-xl">
  The WrittenlyHub difference — smarter marketing, better results.
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
                <h3 className="text-3xl font-bold text-white">Standard Agencies</h3>
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
            href="https://www.writtenlyhub.com/call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
          >
Prove it
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CMOPComparison;