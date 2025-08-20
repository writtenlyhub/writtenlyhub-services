import { motion } from "framer-motion";

const Pricing = () => {
  const packages = [
    {
      title: "Essential Content Package",
      price: "$X,XXX",
      frequency: "per month",
      description: "Ideal for growing nonprofits needing consistent content support",
      features: [
        "X blog posts/month",
        "X donor emails/month",
        "X social media posts/month",
        "X-day turnaround",
        "Basic revisions included"
      ],
      highlighted: false
    },
    {
      title: "Complete Content Solution",
      price: "$X,XXX",
      frequency: "per month",
      description: "For organizations needing full-service content production",
      features: [
        "Unlimited content requests",
        "Priority turnaround",
        "Dedicated content strategist",
        "Advanced analytics",
        "Unlimited revisions"
      ],
      highlighted: true
    }
  ];

  return (
    <section className="font-montserrat relative w-full bg-[#022150] py-12 md:py-20 overflow-hidden">
      {/* Header */}
      <div className="w-[80%] max-w-6xl mx-auto mb-12 md:mb-16 relative z-30 text-center px-4">
        <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
          Pricing
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
       Mission-friendly <span className="text-orange-500">pricing for your content team</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-xl">
          Simple, transparent pricing designed for nonprofits. Pay for what you need and scale as you grow.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-4">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`bg-white/5 border rounded-2xl p-8 text-white shadow-md hover:shadow-lg transition-all duration-500 ease-in-out group flex flex-col h-full ${
              pkg.highlighted ? "border-orange-500/50 relative" : "border-white/10"
            }`}
          >
            {pkg.highlighted && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
            )}
            
            <div className="flex-grow"> {/* This wrapper ensures content pushes button down */}
              <h3 className="text-2xl md:text-3xl font-semibold mb-2 group-hover:text-orange-500 transition-colors duration-300">
                {pkg.title}
              </h3>
              
              <div className="flex items-end mb-6">
                <span className="text-4xl md:text-5xl font-bold text-orange-500 mr-2">
                  {pkg.price}
                </span>
                <span className="text-white/70 text-lg">{pkg.frequency}</span>
              </div>
              
              <p className="text-white/80 mb-6 text-lg">{pkg.description}</p>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start text-white/90 text-base md:text-[16px] leading-relaxed"
                  >
                    <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-orange-500 shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button
              className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 mt-auto ${
                pkg.highlighted
                  ? "bg-orange-500 hover:bg-orange-600 text-white"
                  : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
              }`}
            >
              Get started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;