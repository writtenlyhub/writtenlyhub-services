import { motion } from "framer-motion";
import React from "react";

const RotatingBenefits = () => {
  return (
    <section className="font-montserrat bg-[#022150] py-12 md:py-20 relative overflow-hidden">
      <div className="w-[90%] md:w-[80%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <span className="text-orange-500 font-medium text-sm md:text-base uppercase tracking-widest">
            What sets us apart
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mt-2 md:mt-3 mb-3 md:mb-4 leading-tight">
            <span className="block md:inline">Your on-demand content team</span>{' '}
            <span className="text-orange-500 block">Built from 50+ nonprofit campaigns</span>
          </h2>
        </motion.div>

        <div className="relative w-full max-w-5xl mx-auto">
          {/* Shadow container with padding to allow shadow to be visible */}
          <div className="p-4">
            <div className="relative rounded-2xl shadow-xl shadow-black/30">
              <img 
                src="https://i.ibb.co/3Y8wgb0T/2-3-day-delivery-not-weeks-2.png" 
                alt="2-3 day delivery, not weeks" 
                className="w-full h-auto rounded-2xl relative z-10"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RotatingBenefits;