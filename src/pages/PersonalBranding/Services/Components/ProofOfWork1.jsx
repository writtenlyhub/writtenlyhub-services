import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const ProofOfWork = () => {
  const marqueeRef = useRef(null);
  const controls = useAnimation();
  
  // Array of image URLs - replace these with your actual images
  const images = [
    "https://i.ibb.co/tMwRrNvx/1.png",
    "https://i.ibb.co/jk1f0k1R/3.png",
        "https://i.ibb.co/b5zj38nM/2.png",
    "https://i.ibb.co/tTd477Yg/4.png",
  "https://i.ibb.co/tMwRrNvx/1.png",
    "https://i.ibb.co/jk1f0k1R/3.png",
        "https://i.ibb.co/b5zj38nM/2.png",
    "https://i.ibb.co/tTd477Yg/4.png",

  ];

  // Double the array to create seamless loop
  const doubledImages = [...images, ...images];

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const duration = 40; // seconds for one complete loop
    const startPosition = 0;
    const endPosition = -marquee.scrollWidth / 2;

    const animate = async () => {
      await controls.start({
        x: [startPosition, endPosition],
        transition: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    };

    animate();

    return () => controls.stop();
  }, [controls]);

  return (
    <div className="font-montserrat bg-[#022150] py-24 overflow-hidden">
      <div className="w-[80%] max-w-7xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
            Proof of work
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mt-2 md:mt-3 mb-3 md:mb-4">
            The screenshots <span className="text-orange-500 ">(because talk is cheap)</span>
          </h2>
        </motion.div>

        {/* Image Marquee Container */}
        <div className="relative mb-12 overflow-hidden">
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#022150] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#022150] to-transparent z-10 pointer-events-none" />

          {/* Infinite Marquee */}
          <motion.div 
            className="flex"
            ref={marqueeRef}
            animate={controls}
          >
            {doubledImages.map((img, index) => (
              <div 
                key={`${index}-${img}`}
                className="flex-shrink-0 mx-3 relative"
              >
                <div className="w-90 h-64 md:w-110 md:h-80 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={img}
                    alt={`Proof ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Optional: Keep overlay only if you want the text label */}
                  {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white font-medium text-sm">Result #{index % images.length + 1}</p>
                  </div> */}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <button 
className="inline-block px-12 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md  hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
>              Get results like these
    
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProofOfWork;