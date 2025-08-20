import { motion } from "framer-motion";

const USP = () => {
  const sellingPoints = [
    "Your ENTIRE and ONLY marketing department, not just another vendor in your inbox.",
    "It's not just marketing we create; it's owned, run, and optimized while you build your empire.",
    "Every effort aligned with your revenue goals instead of chasing vanity metrics.",
    "Marketing strategized for Tech SaaS companies by experts who understand your unique challenges.",
    "Zero marketing bulls**t. If we can't measure it, we don't do it."
  ];

  return (
    <section className="relative w-full bg-[#022150] py-12 md:py-20 overflow-hidden">
      {/* Background elements - adjusted for mobile */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-40 h-40 md:w-64 md:h-64 rounded-full bg-orange-400/10 blur-xl md:blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-40 h-40 md:w-64 md:h-64 rounded-full bg-blue-500/10 blur-xl md:blur-3xl"></div>
      </div>

      {/* Main Container - adjusted widths for mobile */}
      <div className="font-montserrat w-[90%] sm:w-[85%] md:w-[80%] max-w-6xl mx-auto">
        {/* Curved Box Container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-xl md:rounded-2xl overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            {/* Left Content - adjusted padding for mobile */}
            <div className="p-6 sm:p-8 md:p-12 flex-1">
              <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
                Unique selling proposition
              </span>

              <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-8 leading-tight">
                Not your average <span className="text-orange-500 block sm:inline">marketing help</span>
              </h2>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {sellingPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white text-base sm:text-lg md:text-xl">{point}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-6 sm:mt-8"
              >
                <button 
                            //it should take me to the id of CMOPComparison 
                onClick={() => {
                  const element = document.getElementById("CMOPComparison");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
  
                  className="inline-block px-12 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
                >
                  Experience the advantage
                </button>
              </motion.div>
            </div>

{/* Right Images - visible on all screens now */}
<div className="flex flex-col md:flex-1 w-full p-6 sm:p-8 gap-4 md:gap-2 mt-8 md:mt-0">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
    className="w-full aspect-[4/3] rounded-xl overflow-hidden border-2 border-white/10 relative"
  >
    <img 
      src="https://i.ibb.co/YrtKjSY/staright-line.png" 
      alt="Marketing strategy meeting"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-orange-400/10 mix-blend-multiply"></div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    viewport={{ once: true }}
    className="w-full aspect-[4/3] rounded-xl overflow-hidden border-2 border-white/10 relative"
  >
    <img 
      src="https://i.ibb.co/mVHGk4tX/bar-graphs.png" 
      alt="Data analytics dashboard"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-orange-500/10 mix-blend-multiply"></div>
  </motion.div>
</div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default USP;