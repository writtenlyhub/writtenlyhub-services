import { motion } from "framer-motion";

const CaseStudy1 = () => {
  return (
    <div className="bg-[#022150] py-12 md:py-20 px-4 sm:px-6 flex justify-center font-montserrat">
      {/* Responsive container with proper padding */}
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Main Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
        >
          {/* Flex container - column on mobile, row on desktop */}
          <div className="flex flex-col md:flex-row">
            
            {/* Text Content (Left Side) */}
            <div className="p-6 md:p-8 lg:p-10 flex-1 flex flex-col justify-center gap-6">
              {/* Case Study Tag */}
              <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
                Case study
              </span>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                WrittenlyHub's CMOaaS turns Zeffy's platform traction up by 35%
              </h3>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4">
                <StatItem 
                  icon={
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  }
                  label="Organic reach"
                  value="220% impression growth"
                />
                
                <StatItem 
                  icon={
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  }
                  label="Mobile signups"
                  value="180% click acceleration"
                />
              </div>

              {/* Button */}
              <button 
                onClick={() => window.open("https://www.writtenlyhub.com/case-studies/", "_blank")}
                draggable="false"
                onDragStart={(e) => e.preventDefault()}
                onContextMenu={(e) => e.preventDefault()}
                className="w-full sm:w-fit px-8 py-3 sm:px-12 sm:py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
              >
                Read more 
              </button>
            </div>
            
            {/* Image (Right Side) - now visible on all screens */}
            <div className="md:w-[40%] lg:w-[35%] bg-gradient-to-br from-orange-500/10 to-blue-500/10 flex items-center justify-center p-4 sm:p-6">
              <img 
                src="https://i.ibb.co/5XnJ2WY4/area-graph-600-x-720.png" 
                alt="SaaS analytics dashboard showing growth"
                className="w-full h-auto max-h-[300px] md:max-h-none object-contain"
                loading="lazy"
                onDragStart={(e) => e.preventDefault()}
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

// Reusable Stat Component
const StatItem = ({ icon, label, value }) => (
  <div className="flex items-start">
    <div className="bg-orange-500/10 p-2 rounded-lg mr-3 sm:mr-4">
      {icon}
    </div>
    <div>
      <p className="text-gray-300 text-xs sm:text-sm uppercase tracking-wider mb-1">{label}</p>
      <p className="text-white font-bold text-lg sm:text-xl">{value}</p>
    </div>
  </div>
);

export default CaseStudy1;