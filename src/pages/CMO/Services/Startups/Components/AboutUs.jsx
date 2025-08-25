import { motion } from "framer-motion";
import focus from "../assets/focus.png"

const AboutUs = () => {
const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Growth Partnership",
      description: "We optimize for metrics that matter to investors, not vanity. ",
      image: "https://i.ibb.co/Csw3qpKC/CARD-3-revision.png"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Startup fluency ",
      description: "We speak runway, not retainer. No explaining why CAC matters. ",
      image: "https://i.ibb.co/pvym57WD/5.png"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Premium Positioning",
      description: "We elevate your brand above the noise, making excellence marketable without compromising your integrity.",
      image: "https://i.ibb.co/B2bh6ryG/22.png"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Execution ready",
      description: "Strategy plus hands-on work. No 'here's your plan, good luck.' ",
      image: focus
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Stage adaptive",
      description: "From MVP validation to Series B scaling, we adjust with you. ",
      image: "https://i.ibb.co/vvD2vsRC/19.png"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Industry Insiders ",
      description: "We become experts in your niche before writing a single word, no generic templates here.",
      image: "https://i.ibb.co/3mr0S2Gs/4-1.jpg"
    },
{
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      ),
      title: "Revenue Focus",
      description: "Every piece we create is designed to move prospects closer to buying, not just consuming content.",
      image: "https://i.ibb.co/v6v8G6pq/9.jpg"
    }
    
  ];

  return (
    <section className="relative w-full bg-[#022150] py-12 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-40 h-40 md:w-64 md:h-64 rounded-full bg-orange-400/10 blur-xl md:blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-40 h-40 md:w-64 md:h-64 rounded-full bg-blue-500/10 blur-xl md:blur-3xl"></div>
      </div>

      <div className="w-[90%] md:w-[80%] mx-auto font-montserrat">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-8 relative z-30 text-center"
        >
          <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
            Who are we?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            The marketing team <span className="text-orange-500">that speaks your language</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-xl">
Generic content is where good companies go to die. WrittenlyHub exists to save you from that fate.
        </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto">
While other agencies churn out templated garbage and call it "strategy," we're obsessed with understanding what makes your business actually unique. We dig into the stuff they're too lazy to research and create marketing that honors your intelligence.   </p>
          <p className="max-w-3xl pt-2 text-orange-500 mx-auto text-xl">
We think deeper, execute smarter, and refuse to make you sound like every other company begging for attention. 
     </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6"
        >
          {/* First 6 cards */}
          {features.slice(0, 6).map((feature, idx) => (
            <motion.div
              key={idx}
              className={`bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col ${
                [0, 3].includes(idx) ? 'col-span-2 md:col-span-2 md:flex-row' : ''
              }`}
            >
              {idx % 2 === 0 || idx === 0 || idx === 3 ? (
                <>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className={`object-cover ${[0, 3].includes(idx) ? 'md:w-1/2 w-full h-48 md:h-full' : 'w-full h-32 md:h-40'}`} 
                  />
                  <div className={`${[0, 3].includes(idx) ? 'md:w-1/2' : ''} p-4 md:p-6 flex flex-col`}>
                    <div className="w-10 h-10 rounded-full bg-orange-400/10 flex items-center justify-center mb-4 text-orange-500">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-4 md:p-6 flex flex-col">
                    <div className="w-10 h-10 rounded-full bg-orange-400/10 flex items-center justify-center mb-4 text-orange-500">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className={`w-full h-32 md:h-44 object-cover ${feature.title === "Startup fluency " || feature.title === "Industry Insiders " ? "mt-10" : ""}`} 
                  />
                </>
              )}
            </motion.div>
          ))}
          
          {/* Last card */}
          <motion.div
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col col-span-2 md:col-span-1"
          >
            <div className="p-4 md:p-6 flex flex-col">
              <div className="w-10 h-10 rounded-full bg-orange-400/10 flex items-center justify-center mb-4 text-orange-500">
                {features[6].icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{features[6].title}</h3>
              <p className="text-gray-300 text-sm">{features[6].description}</p>
            </div>
            <img 
              src={features[6].image} 
              alt={features[6].title} 
              className="w-full h-32 md:h-44 mt-5 object-cover" 
            />
          </motion.div>
        </motion.div>
         {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://outlook.office.com/book/G7dffb8790bab4b95b7e8fd20179d2514@writtenlyhub.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
          >
            Get started
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;