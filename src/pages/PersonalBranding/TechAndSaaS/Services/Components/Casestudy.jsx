import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CaseStudy = () => {
  return (
    <div className="bg-[#022150] py-12 md:py-20 flex justify-center font-montserrat">
      <div className="w-[90%] md:w-[80%] max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Text Content - Left Side */}
            <div className="p-6 md:p-8 flex-1">
              <span className="text-orange-500 font-medium text-sm uppercase tracking-widest">
                Case studies
              </span>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white mt-3 mb-6">
                The personal branding formula <span className="text-orange-500">that made this coach #1</span>
              </h3>
              
              {/* Before/After Comparison */}
              <div className="relative mb-8">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <h4 className="text-white font-bold mb-3">Before:</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-start">
                        <span className="text-white mr-2">•</span>
                        <span>Struggling to explain unique positioning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white mr-2">•</span>
                        <span>Getting price objections</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white mr-2">•</span>
                        <span>Inconsistent lead flow</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <h4 className="text-orange-500 font-bold mb-3">After:</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>12+ qualified leads monthly</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Doubled rates to $5K per engagement</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Turning prospects away</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Result Highlight */}
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mb-8">
                <p className="text-white font-bold text-lg md:text-xl">
                  $100K+ additional revenue in 6 months
                </p>
              </div>

              <button 
                  onClick={() => window.open("https://www.writtenlyhub.com/case-studies/", "_blank")}
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
                className="inline-block px-12 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
              >
Get your transformation
              </button>
            </div>

            {/* Image on Right Side */}
            <div className="lg:w-[40%] p-6  lg:flex items-center justify-center bg-gradient-to-b from-orange-500/5 to-blue-500/5">
              <div className="relative h-full w-full">
                <img 
                  src="https://i.ibb.co/C55jZB46/Untitled-design-33.png"
                  alt="Case study visualization"
                  className="w-full h-auto object-contain max-h-[1000px] rounded-xl"
                  loading="lazy"
                  onDragStart={(e) => e.preventDefault()}
                  style={{ userSelect: "none" }}
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudy;