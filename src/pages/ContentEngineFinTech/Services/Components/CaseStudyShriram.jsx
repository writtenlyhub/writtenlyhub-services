import { motion } from "framer-motion";
import shriram from "../assets/shriram.png"; // replace with your actual Shriram asset

const CaseStudyShriram = () => {
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
                How{" "}
                <span className="text-orange-500">
                  Shriram Finance dominated digital lending
                </span>{" "}
                with systematic content
              </h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="bg-white/3 p-4 rounded-lg border border-white/8">
                  <p className="text-xs text-white/60 uppercase tracking-wider mb-2">
                    The challenge
                  </p>
                  <p className="text-white text-sm">
                    Launching the app + Established NBFC needed digital
                    transformation of their content to compete with
                    digital-native lenders and educate enterprise clients.
                  </p>
                </div>

                <div className="bg-white/3 p-4 rounded-lg border border-white/8">
                  <p className="text-xs text-white/60 uppercase tracking-wider mb-2">
                    Our solution
                  </p>
                  <p className="text-white text-sm">
                    Comprehensive content strategy covering digital lending,
                    business financing, and regulatory compliance topics for
                    multiple stakeholder types.
                  </p>
                </div>
              </div>

              {/* Results */}
              <div>Results in under 10 months:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 mb-4">
                <StatItem label="Increase in visibility" value="60%+" />
                <StatItem label="Organic keywords ranked" value="30K" />
                <StatItem label="Monthly organic visits" value="600K" />
                <StatItem label="Compliance issues" value="Zero across 400+ pieces" />
                <StatItem label="Cost savings vs. in-house" value="$180K" />
              </div>

              <p className="text-white text-lg md:text-xl max-w-2xl">
                Stop watching competitors outrank you.
              </p>

              <a
                href="https://www.writtenlyhub.com/case-studies/"
                target="_blank"
                className="inline-block mt-4 px-56 py-3 bg-orange-500 cursor-pointer hover:bg-white text-white hover:text-orange-500 text-lg font-semibold rounded-full transition-colors duration-700"
              >
                Scale like this
              </a>
            </div>

            {/* Right: Image */}
            <div className="hidden sm:block md:w-[40%] lg:w-[35%] bg-gradient-to-br from-orange-500/10 to-blue-500/10">
              <img
                src={shriram}
                alt="Shriram Finance case study visual"
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
      <svg
        className="w-5 h-5 text-orange-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    </div>
    <div>
      <p className="text-gray-300 text-xs uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="text-white font-bold text-lg">{value}</p>
    </div>
  </div>
);

export default CaseStudyShriram;
