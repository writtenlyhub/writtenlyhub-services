import { motion } from "framer-motion";

const ServicesOffering = () => {
  const offerings = [
    {
      title: "Unlimited production capacity",
      points: [
        "No cap on content requests",
        "All content types included",
        "Fixed pricing, unlimited output",
      ],
    },
    {
      title: "SaaS-native expertise",
      points: [
        "Writers who understand your buyer journey",
        "Content that drives trials, not just traffic",
        "Perfect brand voice adoption from day one",
      ],
    },
    {
      title: "Execution-focused delivery",
      points: [
        "48-72 hour average turnaround",
        "One dedicated point of contact",
        "Fits your existing workflow",
      ],
    },
    {
      title: "Execution-only focus",
      points: [
        "No strategy meetings required",
        "Content that follows your plan",
        "Full control over feedback and revisions",
      ],
    },
  ];

  return (
    <section className="font-montserrat relative w-full bg-[#022150] py-12 md:py-20 overflow-hidden">
      {/* Header */}
      <div className="w-[100%] max-w-screen-xl mx-auto mb-12 md:mb-16 relative z-30 text-center px-4">
        <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
          Service offering
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
          Unlimited B2B content <br />{" "}
          <span className="text-orange-500">
            that scales with your growth targets
          </span>
        </h2>
        {/* <p className="text-gray-300 max-w-2xl mx-auto text-xl mb-3">
          Send in requirements, get content, repeat.
        </p> */}
        <p className="text-white max-w-3xl mx-auto text-lg">
          No per-piece fees, no scope creep, no explaining SaaS fundamentals to
          writers who think ARR means "pirate noise."
        </p>
      </div>

      {/* Cards */}
      <div className="w-[98%] max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
        {offerings.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-white shadow-md hover:shadow-lg transition-all duration-500 ease-in-out group min-w-0 md:min-h-[220px] flex flex-col"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-orange-500 mb-6 group-hover:text-white transition-colors duration-300">
              {item.title}
            </h3>

            <ul className="space-y-4 flex-1">
              {item.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start text-white/90 text-base md:text-[16px] leading-relaxed"
                >
                  {/* Custom bullet icon */}
                  <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-orange-500 shrink-0"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="w-full mt-12 md:mt-16 text-center px-4">
        <motion.a
          href="https://calendly.com/asthaverma/build-your-personal-brand-with-me"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="inline-block px-16 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-lg hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
        >
          Let's talk results
        </motion.a>
      </div>
    </section>
  );
};

export default ServicesOffering;
