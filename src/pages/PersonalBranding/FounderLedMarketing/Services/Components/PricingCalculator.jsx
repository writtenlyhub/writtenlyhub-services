import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const PricingCalculator = () => {
  const features = [
    "Profile optimization",
    "Content calendar and strategy",
    "25+ strategic LinkedIn posts monthly",
    "4 LinkedIn articles for thought leadership",
    "30+ daily engagement comments",
    "Direct message outreach strategy",
    "Weekly analytics and optimization",
    "Competitor analysis reports"
  ];

  return (
    <section className="bg-[#022150] py-24 font-montserrat overflow-hidden relative">
      <div className="w-[80%] max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
            Pricing calculator domination
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mt-2 md:mt-3 mb-3 md:mb-4">
            Calculate the price of being <span className="text-orange-500">unforgettable</span>
          </h2>
          <p className="text-gray-300 text-base md:text-xl">
            Limited availability: 3 spots remaining
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              LinkedIn Lead Gen Accelerator
            </h3>
            
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <FiCheck className="text-orange-500" />
                  </div>
                  <span className="text-white/90 text-lg">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Pricing card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-[#1d3557] p-8 rounded-2xl text-center"
          >
            <div className="mb-6">
              <span className="text-white/70">Starting at</span>
              <p className="text-5xl font-bold text-orange-500 mt-2">$1,200<span className="text-white/70 text-xl">/month</span></p>
            </div>
            
            <motion.a
              onClick={() => window.open("https://calendly.com/asthaverma/build-your-personal-brand-with-me", "_blank")}
              draggable="false"
              onDragStart={(e) => e.preventDefault()}
              onContextMenu={(e) => e.preventDefault()}
              className="inline-block px-12 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
            >
              Claim your spot
            </motion.a>
            
            <p className="text-white/60 mt-4 text-sm">
              *3-month minimum commitment for optimal results
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;