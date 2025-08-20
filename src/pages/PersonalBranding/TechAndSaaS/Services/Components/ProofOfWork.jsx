import { motion } from "framer-motion";
import MidImge from "./test.png";

const ProofOfWork = () => {
  return (
    <div className="font-montserrat bg-[#022150] py-24 overflow-hidden">
      {/* Wrap entire content in a single motion.div to reduce animation checks */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
        transition={{ duration: 0.6 }}
        className="w-[80%] max-w-7xl mx-auto text-center"
      >
        {/* Header */}
        <motion.div
          variants={{
            hidden: { y: 20 },
            visible: { y: 0 }
          }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
            Proof of work
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mt-2 md:mt-3 mb-3 md:mb-4">
            The screenshots <span className="text-orange-500">(because talk is cheap)</span>
          </h2>
        </motion.div>

        {/* Centered Image - Now at 80% width */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-12 w-full"
          style={{ willChange: 'opacity' }}
        >
          <div className="w-[100%]">
            {/* Consider adding width and height attributes */}
            <img
              src={MidImge}
              alt="Proof of work"
              className="w-full h-auto object-contain"
              loading="lazy"
              // Add these if you know the image dimensions:
              // width={1200}
              // height={800}
            />
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={{
            hidden: { y: 20 },
            visible: { y: 0 }
          }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ willChange: 'transform' }}
        >
          <button 
            onClick={() => window.open("https://calendly.com/asthaverma/build-your-personal-brand-with-me", "_blank")}
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
          className="inline-block px-12 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md hover:text-orange-500 font-semibold rounded-full transition-colors duration-700">
            Get results like these
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProofOfWork;