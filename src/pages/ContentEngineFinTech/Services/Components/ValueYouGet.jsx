import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import apollo from "../assets/apolloChart.png";

const ValueSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    apollo,
     "https://i.ibb.co/WpKshsMn/Bar-Line-Chart.png",
    "https://i.ibb.co/wr08D7ss/Area-graph-2.png",
    "https://i.ibb.co/S4zKHHHY/Untitled-design-36.png",
    "https://i.ibb.co/LdGz71VK/Untitled-design-37.png",
  ];

  const texts = [
    "Emma's content got traffic but zero demos. Our content Engine fixed her conversion problem - 3x more demo bookings from the same traffic. Quality > quantity proved.",
    "Sarah was haemorrhaging $20K monthly on freelancers who kept disappearing. Our team gave her enterprise-level writers without the enterprise-level costs.",
    "Lisa spent 25 hours weekly chasing writers and managing revisions. With us, she finally got her life back - now she spends 2 hours approving and 23 hours strategizing.",
    "Jennifer's team could barely squeeze out 8 pieces quarterly. Working with us flipped the script - now she publishes 8 pieces weekly.",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-scroll every 35 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 35000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="font-montserrat bg-[#022150] py-16 md:py-24 flex justify-center">
      <div className="w-[80%] max-w-7xl text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
            Value you get
          </span>
        </motion.div>

        {/* Image Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full flex items-center justify-center mb-8"
        >
          {/* Left Navigation Button */}
          <button
            onClick={prevImage}
            className="absolute left-0 z-10 p-2 rounded-full bg-orange-500 backdrop-blur-sm border border-white/20 hover:bg-orange-500 transition-all duration-300 -translate-x-4"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Image Container */}
          <div className="w-full max-w-[1000px] h-auto aspect-video overflow-hidden rounded-xl shadow-2xl border">
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={`Result showcase ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={nextImage}
            className="absolute right-0 z-10 p-2 rounded-full bg-orange-500 backdrop-blur-sm border border-white/20 hover:bg-orange-500 transition-all duration-300 translate-x-4"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </motion.div>

        {/* Text that changes with image */}
        <motion.p
          key={currentImageIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-8"
        >
          {/* {texts[currentImageIndex]} */}
        </motion.p>

        {/* Image Indicator Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentImageIndex === index ? "bg-orange-500 w-6" : "bg-white/30"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="pt-4"
        >
          <button
            className="inline-block px-12 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
            onClick={() =>
              window.open(
                "https://calendly.com/asthaverma/build-your-personal-brand-with-me",
                "_blank"
              )
            }
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
          >
            This could be you
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ValueSection;
