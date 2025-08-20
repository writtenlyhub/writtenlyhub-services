import { motion } from "framer-motion";

const ServicesOffering = () => {
  const offerings = [
    {
      title: "Unlimited content requests",
      points: [
        "No cap on content requests",
        "Fixed nonprofit-friendly pricing",
        "Priority support during campaign seasons"
      ]
    },
    {
      title: "Nonprofit marketing expertise",
      points: [
        "Writers who understand donor psychology",
        "Your mission's voice, never a generic copy",
        "Adapts to your existing workflow"
      ]
    },
    {
      title: "Seamless team integration",
      points: [
        "2–3 day turnaround (urgent requests too)",
        "Dedicated content POC",
        "Complete revision flexibility"
      ]
    }
  ];

  return (
    <section className="font-montserrat relative w-full bg-[#022150] py-12 md:py-20 overflow-hidden">
      {/* Header */}
      <div className="w-[90%] max-w-6xl mx-auto mb-12 md:mb-16 relative z-30 text-center px-4">
        <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
          Service Offering
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
          Content marketing that moves <span className="text-orange-500">at the speed of your impact</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-xl">
          Stop choosing between overpriced agencies and impossible-to-manage freelancers. Get unlimited nonprofit content requests at one predictable monthly price.
        </p>
      </div>

      {/* Cards */}
<div className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4">
  {offerings.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-white shadow-md hover:shadow-lg transition-all duration-500 ease-in-out group"
    >
      <h3 className="text-xl md:text-2xl font-semibold text-orange-500 mb-6 group-hover:text-white transition-colors duration-300">
        {item.title}
      </h3>
      
      <ul className="space-y-4">
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
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
className="inline-block px-16 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-lg hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
        >
          Start scaling today
        </motion.button>
      </div>
    </section>
  );
};

export default ServicesOffering;
