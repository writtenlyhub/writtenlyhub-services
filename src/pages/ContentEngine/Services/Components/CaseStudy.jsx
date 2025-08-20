import { motion } from "framer-motion";

const CaseStudy = () => {
  return (
    <div className="bg-[#022150] py-12 md:py-20 flex justify-center font-montserrat">
      {/* 80% width container with max-width constraint */}
      <div className="w-[80%] max-w-6xl mx-auto">
        
        {/* Main Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
        >
          {/* Flex container - column on mobile, row on desktop */}
          <div className="flex flex-col md:flex-row md:min-h-[400px] h-full">
            
            {/* Text Content (Left Side) */}
            <div className="p-6 md:p-8 lg:p-10 flex-1 flex flex-col justify-center gap-6">
              {/* Case Study Tag */}
              <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
                Case studies
              </span>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold leading-tight text-white mb-4">
                How one nonprofit <span className="text-orange-500 ">6X'd their impact with our end-to-end</span> content expertise
              </h3>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4">
                <StatItem 
                  icon={
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  }
                  label="Content production"
                  value="350+ blog posts"
                />
                
                <StatItem 
                  icon={
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  }
                  label="Monthly traffic"
                  value="180K visitors"
                />

                <StatItem 
                  icon={
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  }
                  label="Signup growth"
                  value="23K to 55K in 18mo"
                />
                
                <StatItem 
                  icon={
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  }
                  label="Top rankings"
                  value="180+ pages #1 on Google"
                />
              </div>

              {/* Additional stat */}
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="text-white font-bold text-lg sm:text-xl">$200K saved vs in-house content team</p>
              </div>

              {/* Subheading */}
              <p className="text-white text-lg md:text-xl">
                Your nonprofit's growth story starts here.
              </p>

              {/* Button */}
              <button 
className="inline-block px-16 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-lg hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
              >
                Get similar results
              </button>
            </div>
            
            {/* Image (Right Side) */}
            <div className="hidden sm:block md:w-[40%] lg:w-[35%] bg-gradient-to-br from-orange-500/10 to-blue-500/10">
              <img 
                src="https://i.ibb.co/hFPgkCVn/Untitled-design-14.png" 
                alt="Nonprofit success story showing growth"
                className="w-full h-full object-cover"
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

export default CaseStudy;