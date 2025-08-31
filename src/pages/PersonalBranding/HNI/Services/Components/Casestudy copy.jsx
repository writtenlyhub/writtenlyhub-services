import { motion } from "framer-motion";

const CaseStudyIntro = () => {
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
          <div className="p-6 md:p-8">
            <span className="text-orange-500 font-medium text-sm uppercase tracking-widest">
              Case studies
            </span>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white mt-3 mb-6">
              The personal branding formula that made this coach <span className="text-orange-500">#1 in her niche</span>
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
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudyIntro;