import { motion } from "framer-motion";

const ServicesOffering = () => {
  const offerings = [
    {
      title: "Enterprise-grade content volume",
      points: [
        "Unlimited content requests",
        "One flat monthly fee",
        "Prioritized to your needs"
      ]
    },
    {
      title: "Plug-and-play production",
      points: [
        "Every writer is fluent in fintech",
        "We write like we work inside your org",
        "Seamlessly fits into your workflow"
      ]
    },
    {
      title: "Fintech-native execution",
      points: [
        "48-72 hour average turnaround",
        "You set the goals, we execute ruthlessly",
        "Full control over feedback, revisions, and tone. Always."
      ]
    },
    {
      title: "Strategic content focus",
      points: [
        "Content that moves enterprise prospects through long sales cycles",
        "Your growth metrics become our content KPIs",
        "Full control over messaging"
      ]
    }
  ];

  return (
    <section className="font-montserrat relative w-full bg-[#022150] py-12 md:py-20 overflow-hidden">
      {/* Header */}
      <div className="w-[100%] max-w-screen-xl mx-auto mb-12 md:mb-16 relative z-30 text-center px-4">
        <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
          Service offering
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
          Done-for-you content that <span className="text-orange-500">actually gets done</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-xl mb-3">
          No per-word pricing games, no explaining what RegTech means, no writers who think smart contracts are just really clever legal documents.
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
          Get started
        </motion.a>
      </div>
    </section>
  );
};

export default ServicesOffering;
