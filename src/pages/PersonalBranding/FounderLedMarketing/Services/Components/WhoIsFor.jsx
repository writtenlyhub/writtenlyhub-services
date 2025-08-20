import { motion } from "framer-motion";

const personas = [
  {
    title: "B2B SaaS founder",
    subtitle: "Generating $25K-500K ARR with product-market fit but struggling with visibility ",
  },
  {
    title: "Tech entrepreneur",
    subtitle: "Ready to invest $1,200/month to stop chasing every demo ",
  },
  {
    title: " Serial entrepreneur",
    subtitle: "Who needs LinkedIn presence that attracts partnerships and investors",
  },
  {
    title: "Global startup founder",
    subtitle: "who requires thought leadership to dominate markets and close strategic deals",
  },
];

const WhoIsFor = () => {
  return (
    <section className="bg-[#022150] py-24 font-montserrat overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-orange-400/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <div className="w-[80%] mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative z-30"
        >
          <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
            Who this is for
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mt-2 md:mt-3 mb-3 md:mb-4">
            If you're reading this, <span className="text-orange-500"> it's probably for you</span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col">
          {/* Personas Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
              {personas.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-orange-500">{item.title}</h3>
                    <p className="text-white/80">{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA - Centered */}
            <div className="mt-12 flex justify-center">
              <motion.a
                       onClick={() => {
              const element = document.getElementById("WhyItWorks");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}

                className="inline-block px-12 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
              >
This is me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsFor;