import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const MagneticLinkedIn = () => {
  return (
    <section id="MagnaticLinkedIn" className="bg-[#022150] py-24 font-montserrat overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-orange-400/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <div className="w-[80%] mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20 relative z-30">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-orange-500 font-medium text-md uppercase tracking-widest inline-block mb-2"
          >
            How we make you unmissable
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mt-2 md:mt-3 mb-3 md:mb-4"

          >
            How I make founders <span className="text-orange-500 block">impossible to ignore on LinkedIn</span>
          </motion.h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl">
My 5-step system that turns invisible founders into industry authorities: 
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Benefit Cards */}
          {[
  {
    title: "Generate pipeline while you focus on building",
    desc: "Create founder presence so enterprise buyers find you while you're coding, not when you're desperately networking."
  },
  {
    title: "10x your demo requests with strategic positioning",
    desc: "Founder-led content that converts casual browsers into high-intent prospects ready to buy what you're building."
  },
  {
    title: "Reclaim your calendar while maintaining thought leadership",
    desc: "End-to-end LinkedIn management so you ship features while ideal customers find and choose you automatically."
  },
  {
    title: "Track exactly how your brand drives business",
    desc: "Real data tied to pipeline, demos, and revenue you actually care about - zero vanity metrics."
  },
  {
    title: "Attract clients and partners already sold on you",
    desc: "No more pitch decks, no more proving your worth – just aligned people with budget, urgency, and intent."
  },
  {
    title: "Scale your influence without sacrificing time",
    desc: "Automated systems that keep your brand growing while you focus on what matters most - building your business."
  }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white/5 border border-white/10 rounded-xl p-8 "
            >
              <div className="flex items-start gap-4">
                <div className="text-orange-500 text-2xl font-bold">0{i+1}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center">
            <p className="text-white/80 mb-6 text-lg">Ready to dominate your niche?</p>
            <button 
            onClick={() => window.open("https://calendly.com/asthaverma/build-your-personal-brand-with-me", "_blank")}
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
className="inline-block px-12 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md  hover:text-orange-500 font-semibold rounded-full transition-colors duration-700">
Get your leads 
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MagneticLinkedIn;