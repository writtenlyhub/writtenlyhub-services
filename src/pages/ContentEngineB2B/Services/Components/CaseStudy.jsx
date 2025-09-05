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
                How Zeffy scaled from <span className="text-orange-500">zero-fee mission to 55K+ nonprofits</span> with unlimited content
              </h3>
              
              {/* Challenge */}
              <p className="text-white/80 text-base md:text-lg">
                <span className="font-semibold text-white">The challenge:</span> Revolutionary fundraising platform with zero fees, but nonprofits didn&apos;t know they existed.
              </p>

              {/* Solution */}
              <p className="text-white/80 text-base md:text-lg">
                <span className="font-semibold text-white">Our solution:</span> 500+ strategic content assets positioning Zeffy as the obvious choice over paid competitors.
              </p>
              
              {/* Results */}
              <p className="text-orange-500 font-semibold text-lg md:text-xl">
                Results in 6 months:
              </p>

              {/* Results Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4">
                <StatItem 
                  icon={
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  }
                  label="Organic impression growth"
                  value="220%"
                />
                
                <StatItem 
                  icon={
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  }
                  label="Total traffic increase"
                  value="180%"
                />

                <StatItem 
                  icon={
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  }
                  label="Conversion boost"
                  value="35% (platform sign-ups)"
                />
                
                <StatItem 
                  icon={
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  }
                  label="Competitor keywords"
                  value="500+ dominated"
                />
              </div>

              {/* Testimonial */}
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="text-white italic text-base sm:text-lg">
                  &quot;From the very beginning, I felt like I was in good hands. Working with you was a real highlight - your authenticity and care came through from day one.&quot; 
                </p>
                <p className="text-orange-500 font-semibold mt-2">– Zeffy Leadership Team</p>
              </div>

              {/* Button */}
              <a
                href="https://www.writtenlyhub.com/case-studies/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-60 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-lg hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
              >
                Get these wins
              </a>

            </div>
            
            {/* Image (Right Side) */}
            <div className="hidden sm:block md:w-[40%] lg:w-[35%] bg-gradient-to-br from-orange-500/10 to-blue-500/10">
              <img 
                src="https://i.ibb.co/hFPgkCVn/Untitled-design-14.png" 
                alt="Zeffy success story showing growth"
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
      <p className="text-white font-bold text-md sm:text-md">{value}</p>
    </div>
  </div>
);

export default CaseStudy;
