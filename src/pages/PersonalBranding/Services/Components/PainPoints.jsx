import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const painPoints = [
  {
    text: "I'm spending 20 hours weekly creating content but getting zero qualified leads from it.",
    image: "https://i.ibb.co/cXXDGQg8/1.png"
  },
  {
    text: "My competitors with less expertise are booking 3x more discovery calls than me. What am I missing?",
    image: "https://i.ibb.co/R4GvKWx3/2.png"
  },
  {
    text: "Every lead asks for my lowest price instead of seeing my value. This race to the bottom is killing me.",
    image: "https://i.ibb.co/8ghycmd3/3.png"
  },
  {
    text: "Why do potential clients keep asking so what exactly do you do? when I've explained it 47 times?",
    image: "https://i.ibb.co/S4KkBJQC/4.png"
  },
  {
    text: "I throw up posts hoping something sticks, but I feel the strategy goes missing.",
    image: "https://i.ibb.co/xqzG5xg3/5.png"
  }
];

const bubbleVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const PainPoints = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % painPoints.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getPointerPosition = () => {
    const positionIndex = activeIndex % 3;
    return `${(positionIndex * (100 / 3)) + (100 / (3 * 2))}%`;
  };

  const getPointedImageIndex = () => {
    return activeIndex % 3;
  };

  return (
    <div className="font-montserrat bg-[#022150] py-12 md:py-20 px-2 flex justify-center relative">
      <div className="w-full max-w-7xl"> {/* Removed md:w-[70%] for full width */}
        {/* Header */}
   <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:mb-16"
        >
          <div className="text-center">
            <span className="text-orange-500 font-medium text-sm md:text-md uppercase tracking-widest">
              Why you're stuck
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mt-2 md:mt-3 mb-3 md:mb-4">
              The cold hard truths<span className="text-orange-500"> of coaches & consultants</span>
            </h2>
          </div>
        </motion.div>

        {/* Thought Bubble - Made taller to accommodate larger images below */}
        <div className="relative h-40 md:h-58  mb-8 md:mb-4 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={bubbleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute top-0 z-10 w-full max-w-4xl mx-auto text-center"
              style={{ transformOrigin: "bottom center" }}
            >
              <div className="relative h-full">
                <div className="absolute inset-0 w-full h-full flex justify-center items-center">
                  <img 
                    src="https://i.ibb.co/RTDywnZM/Black-White-Dark-Futuristic-Coming-Soon-Website-Coming-Soon-Page-2.png" 
                    alt="Thought bubble" 
                    className="w-full max-w-[700px] h-auto object-contain"
                    style={{ minHeight: '350px' }}
                  />
                </div>
                
                <div className="relative z-10 px-8  md:px-12 py-12 md:py-20 ">
                  <div className="max-w-lg mx-auto">
                    <span className="text-xm md:text-2xl  p-3 font-medium text-black text-center block">
                      {painPoints[activeIndex].text}
                    </span>
                  </div>
                </div>

                {/* Thought bubble tail */}
                          {/* Thought bubble tail */}
         <div 
  className="absolute -bottom-1 w-8 h-8 bg-white rounded-full border border-white/20 shadow-lg"
  style={{ left: getPointerPosition(), transform: 'translateX(-50%)' }}
></div>
<div 
  className="absolute -bottom-8 w-6 h-6 bg-white rounded-full border border-white/20 shadow-lg"
  style={{ 
    left: `calc(${getPointerPosition()} ${
      parseFloat(getPointerPosition()) < 33 ? '- 10px' : 
      parseFloat(getPointerPosition()) > 66 ? '+ 10px' : '+ 1px'
    })`, 
    transform: 'translateX(-50%)' 
  }}
></div>
<div 
  className="absolute -bottom-12 w-4 h-4 bg-white rounded-full border border-white/20 shadow-lg"
  style={{ 
    left: `calc(${getPointerPosition()} ${
      parseFloat(getPointerPosition()) < 33 ? '- 15px' : 
      parseFloat(getPointerPosition()) > 66 ? '+ 15px' : '- 5px'
    })`, 
    transform: 'translateX(-50%)' 
  }}
></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile View - Single Image (Maximized) */}
        <div className="md:hidden flex justify-center mb-8 px-4">
          <motion.img
            src={painPoints[activeIndex].image}
            alt={`Feature ${activeIndex + 1}`}
            className="w-full max-w-[320px] h-auto object-contain rounded-lg"
            draggable="false"
          />
        </div>

        {/* Desktop View - Images Grid (Maximized) */}
        <div className="hidden md:grid grid-cols-3 gap-4 px-4 relative">
          {[0, 1, 2].map((offset) => {
            const index = (activeIndex + offset) % painPoints.length;
            const pointedIndex = getPointedImageIndex();
            return (
              <div key={index} className="relative flex flex-col items-center h-full">
                <motion.img
                  src={painPoints[index].image}
                  alt={`Feature ${index + 1}`}
                  className={`w-full max-w-none h-auto object-contain rounded-lg transition-all duration-500 ${
                    offset === pointedIndex 
                      ? 'opacity-100 scale-110' 
                      : 'opacity-80 scale-90'
                  }`}
                  style={{
                    maxHeight: '400px',
                    minHeight: '300px'
                  }}
                  draggable="false"
                />
              </div>
            );
          })}
        </div>

        {/* Centered Button with more spacing */}
        <div className="w-full text-center pt-4 ">
          <motion.div
            onClick={() => {
              const element = document.getElementById("OldNewWay");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}

            className="inline-block px-12 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md  hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
          >
             Fix these worries
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PainPoints;