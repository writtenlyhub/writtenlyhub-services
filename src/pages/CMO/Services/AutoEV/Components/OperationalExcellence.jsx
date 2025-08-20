import { motion } from "framer-motion";

const OperationalExcellence = () => {
  return (
    <section className="font-montserrat relative w-full bg-[#022150] py-12 md:py-20 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-[80%] mx-auto mb-16 relative z-30 text-center"
      >
        <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
          What makes us different?
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
          <span className="text-orange-500 block">Why automotive leaders dump </span>other agencies for us
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-xl">
          We speak your language and deliver measurable business impact
        </p>
      </motion.div>

      {/* Content */}
      <div className="w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Column - Points */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex-1"
          >
            <div className="space-y-8">
              {[
                "Debating CHAdeMO vs. CCS while others think V2G is a typo",
                "Tracking pilot program conversions, not just website clicks",
                "Technical credibility > shiny creative awards. Every single time",
                "Turning horsepower into business power, without losing the engineering edge",
                "We test-drive your marketing; no guesswork, no fluff"
              ].map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white text-lg md:text-xl">{point}</p>
                </div>
              ))}
            </div>

            {/* CTA - Aligned with text */}
            <div className="mt-12 pl-11">
              <a
                href="https://www.writtenlyhub.com/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
              >
                Fire your clueless agency 
              </a>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="relative rounded-xl overflow-hidden border-2 border-orange-400/30 hidden md:block">
              <img 
                src="https://i.ibb.co/M5grSycn/Scatter-Chart.png" 
                alt="Automotive marketing excellence"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-orange-400/10 mix-blend-multiply"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-orange-400/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>
    </section>
  );
};

export default OperationalExcellence;