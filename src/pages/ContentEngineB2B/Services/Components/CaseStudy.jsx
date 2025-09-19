import { motion } from "framer-motion";

const CaseStudyZeffy = () => {
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
            {/* Left: Text Section */}
            <div className="p-6 md:p-8 lg:p-10 flex-1 flex flex-col justify-center gap-6">
              <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
                Case studies
              </span>

              <h3 className="text-3xl md:text-4xl font-bold leading-tight text-white">
                How Zeffy scaled from{" "}
                <span className="text-orange-500">
                  zero-fee mission to 55K+ nonprofits
                </span>{" "}
                with unlimited content
              </h3>

              {/* Challenge + Solution stacked */}
              <div className="flex flex-col gap-4">
                <div className="bg-white/3 p-5 rounded-lg border border-white/8">
                  <p className="text-xs text-white/60 uppercase tracking-wider mb-2">
                    The challenge
                  </p>
                  <p className="text-white text-md">
                    Revolutionary fundraising platform with zero fees, but
                    nonprofits didn&apos;t know they existed.
                  </p>
                </div>

                <div className="bg-white/3 p-5 rounded-lg border border-white/8">
                  <p className="text-xs text-white/60 uppercase tracking-wider mb-2">
                    Our solution
                  </p>
                  <p className="text-white text-md">
                    500+ strategic content assets positioning Zeffy as the
                    obvious choice over paid competitors.
                  </p>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-5">
                <p className="text-white italic text-base sm:text-lg">
                  &quot;From the very beginning, I felt like I was in good
                  hands. Working with you was a real highlight - your
                  authenticity and care came through from day one.&quot;
                </p>
                <p className="text-orange-500 font-semibold mt-3">
                  – Zeffy Leadership Team
                </p>
              </div>

              {/* CTA */}
              <a
                href="https://www.writtenlyhub.com/case-studies/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-64 py-3 bg-orange-500 cursor-pointer hover:bg-white text-white hover:text-orange-500 text-lg font-semibold rounded-full transition-colors duration-700"
              >
                Get these wins
              </a>
            </div>

            {/* Right: Modern Results Panel */}
            <div className="md:w-[40%] lg:w-[35%] flex flex-col justify-center p-8 bg-gradient-to-br from-orange-500/20 via-blue-500/10 to-orange-500/5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-[#031536]/70 backdrop-blur-md rounded-2xl border border-white/10 p-8 shadow-lg flex flex-col h-full"
              >
                <p className="text-lg font-semibold text-white mb-4">
                  Results in 6 months
                </p>
                <div className="h-px bg-white/10 mb-6" />

                <div className="flex flex-col gap-12 justify-center flex-1">
                  <StatItemModern
                    label="Organic impression growth"
                    value="220%"
                  />
                  <StatItemModern label="Total traffic increase" value="180%" />
                  <StatItemModern
                    label="Conversion boost"
                    value="35% (platform sign-ups)"
                  />
                  <StatItemModern
                    label="Competitor keywords dominated"
                    value="500+"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Modern stat item
const StatItemModern = ({ label, value }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
    className="flex flex-col"
  >
    <span className="text-2xl md:text-3xl font-extrabold text-orange-400">
      {value}
    </span>
    <span className="text-sm text-white/70 uppercase tracking-wide mt-1">
      {label}
    </span>
  </motion.div>
);

export default CaseStudyZeffy;
