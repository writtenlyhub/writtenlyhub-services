import { motion } from "framer-motion";
import EV  from "./EV.gif" // Adjust this import to your actual image path

const WhoIsCMO = () => {
  return (
    <section className="font-montserrat relative w-full bg-[#022150] py-12 md:py-20 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 text-center w-[80%] mx-auto "
      >
        <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
          Leaders who need us  
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-18">
          <span className="text-orange-500">Perfect fit clients </span>(be honest with yourself)
        </h2>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 w-[100%] max-w-3xl mx-auto mb-12"
      >
        <img
          src={EV}
          alt="Leaders who need us"
          className="w-full h-auto object-contain pointer-events-none select-none"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />
      </motion.div>

       <span className="font-medium text-md text-center block">
          If this describes your reality, we should talk. 
        </span>
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-4"
        >
          <a
            href="https://outlook.office.com/book/G7dffb8790bab4b95b7e8fd20179d2514@writtenlyhub.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
          >
Let's talk
          </a>
        </motion.div>

    </section>
  );
};

export default WhoIsCMO;
