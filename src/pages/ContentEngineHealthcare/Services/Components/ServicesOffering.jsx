import { motion } from "framer-motion";

const ServicesOffering = () => {
  const offerings = [
    {
      title: "Medical content at scale",
      points: [
        "Unlimited content requests",
        "Predictable monthly investment",
        "Volume that grows with your practice"
      ]
    },
    {
      title: "Healthcare experts",
      points: [
        "Healthcare focused writers",
        "Your clinical tone and expertise",
        "Brand voice that builds patient trust"
      ]
    },
    {
      title: "Simple workflow",
      points: [
        "One point of contact",
        "Fast 48-72 hour medical content delivery",
        "Integrates with existing processes"
      ]
    },
    {
      title: "Pure content execution",
      points: [
        "Zero time spent on content meetings",
        "Your medical strategy, our writing muscle",
        "You guide every revision"
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
          Healthcare content that <span className="text-orange-500">builds trust and drives appointments</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-xl mb-3">
          Every healthcare CMO faces the same dilemma: quality, speed, or budget. Pick one. Actually, scratch that. Get all three with our unlimited content retainer.
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
