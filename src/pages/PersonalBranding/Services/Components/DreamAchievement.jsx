// components/DreamAchievement.jsx
import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const blurFadeItem = {
  hidden: { opacity: 0, filter: "blur(12px)" },
  show: {
    opacity: 1, 
    filter: "blur(0px)", 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    }
  },
};

const circleItem = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "backOut"
    }
  }
};

const steps = [
  {
    id: 1,
    title: "Strategy",
    description: "We develop a customized content strategy aligned with your business objectives",
    color: "bg-orange-500"
  },
  {
    id: 2,
    title: "Creation",
    description: "Our team crafts high-quality content that resonates with your audience",
    color: "bg-blue-400"
  },
  {
    id: 3,
    title: "Growth",
    description: "Consistent, strategic content drives engagement and business growth",
    color: "bg-purple-500"
  }
];

const DreamAchievement = () => {
  return (
    <div className="relative bg-[#022150] py-20 overflow-hidden">
  
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
 <motion.div variants={blurFadeItem} className="text-left md:text-center mb-16">
    <span className="inline-block bg-orange-500/20 border border-orange-500 text-white rounded-full px-4 py-1.5 text-xs md:text-sm font-medium tracking-wider mb-4">
      CONTENT JOURNEY
    </span>
    <h2 className="text-3xl md:text-5xl font-extrabold text-white">
      Achieve Your <span className="text-orange-500">Content Vision</span>
    </h2>
    <p className="mt-6 max-w-2xl text-xl text-white/80 md:mx-auto">
      A streamlined process to transform your content from concept to results
    </p>
  </motion.div>

        {/* Circular Process Visualization */}
        <motion.div 
          variants={blurFadeItem}
          className="relative my-12 md:my-20"
        >
          {/* Connecting line - properly centered */}
          <div className="hidden md:block absolute top-1/4 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-1 w-full max-w-xl bg-gradient-to-r from-orange-500 via-blue-400 to-purple-500 opacity-20"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8 lg:gap-16 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                variants={circleItem}
                className="relative z-10 flex flex-col items-center"
              >
                {/* Circle with number */}
                <div className={`w-34 h-34 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full ${step.color} flex items-center justify-center shadow-lg`}>
                  <span className="text-white text-3xl md:text-3xl font-bold">{step.id}</span>
                </div>
                
                {/* Text content */}
                <div className="mt-6 text-center max-w-[180px] md:max-w-[200px]">
                  <h3 className="text-lg md:text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-xs md:text-sm text-white/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default DreamAchievement;