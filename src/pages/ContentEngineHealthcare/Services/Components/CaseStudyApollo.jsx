import { motion } from "framer-motion";
import apollo from "../assets/apollo247.png"; // replace with your actual Apollo 24/7 asset

const CaseStudyApollo = () => {
  return (
    <div className="bg-[#022150] py-12 md:py-20 flex justify-center font-montserrat">
      <div className="w-[80%] max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:min-h-[420px] h-full">
            {/* Left: Text */}
            <div className="p-6 md:p-8 lg:p-10 flex-1 flex flex-col justify-center gap-6">
              <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
                Case studies
              </span>

              <h3 className="text-3xl md:text-4xl font-bold leading-tight text-white mb-4">
                How <span className="text-orange-500">Apollo 24/7 scaled to 3,000+ locations</span> with consistent medical content
              </h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="bg-white/3 p-4 rounded-lg border border-white/8">
                  <p className="text-xs text-white/60 uppercase tracking-wider mb-2">The challenge</p>
                  <p className="text-white text-sm">
                    Massive healthcare network needed standardized patient education across thousands of locations and medical specialties.
                  </p>
                </div>

                <div className="bg-white/3 p-4 rounded-lg border border-white/8">
                  <p className="text-xs text-white/60 uppercase tracking-wider mb-2">Our solution</p>
                  <p className="text-white text-sm">
                    Systematic content creation for multiple medical categories and local market optimization.
                  </p>
                </div>
              </div>

              {/* Results */}
              {/* <div>
                <p className="text-md text-white">Results:</p>
              </div> */}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 mb-4">
                <StatItem label="Google My Business profiles driving local patient traffic" value="3,000+" />
                <StatItem label="YouTube video descriptions driving health education engagement" value="350+" />
                <StatItem label="Medical category pages ranking for high-intent searches" value="240+" />
                <StatItem label="Consistent content production without internal bandwidth strain" value="✔" />
              </div>

              <p className="text-white text-lg md:text-xl max-w-2xl">
                Your medical practice deserves the same growth.
              </p>

              <a
                href="https://www.writtenlyhub.com/case-studies/"
                target="_blank"
                className="inline-block mt-4 px-64 py-3 bg-orange-500 cursor-pointer hover:bg-white text-white hover:text-orange-500 text-lg font-semibold rounded-full transition-colors duration-700"
              >
                Scale like Apollo
              </a>
            </div>

            {/* Right: Image */}
            <div className="hidden sm:block md:w-[40%] lg:w-[35%] bg-gradient-to-br from-orange-500/10 to-blue-500/10">
              <img
                src={apollo}
                alt="Apollo 24/7 case study visual"
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

const StatItem = ({ label, value }) => (
  <div className="flex items-start bg-white/3 p-3 rounded-lg border border-white/8">
    <div className="mr-3 p-2 bg-orange-500/10 rounded-lg">
      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    </div>
    <div>
      <p className="text-gray-300 text-xs uppercase tracking-wider mb-1">{label}</p>
      <p className="text-white font-bold text-lg">{value}</p>
    </div>
  </div>
);

export default CaseStudyApollo;
