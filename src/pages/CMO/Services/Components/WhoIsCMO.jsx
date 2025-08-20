import { motion } from "framer-motion";
import WhoIsThisFor from "../assets/whoisthisfor.gif";

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
          Who is this for
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-18">
          Is this solution <span className="text-orange-500">for you?</span>
        </h2>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 w-[100%] max-w-3xl mx-auto mb-8"
      >
        <img
          src={WhoIsThisFor}
          alt="Who is this for"
          className="w-full h-auto object-contain pointer-events-none select-none"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />
      </motion.div>
              {/* <div className="w-full text-center pt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
className="inline-block px-12 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md  hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"          >
Yep, that’s me. Let’s go. 
          </motion.div>
        </div> */}
    </section>
  );
};

export default WhoIsCMO;
