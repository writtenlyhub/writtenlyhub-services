import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Is there a contract with WrittenlyHub's CMO-as-a-Service?",
      answer: "Yes, we do contracts because real marketing takes time to build momentum. But we're not into hostage situations, our contracts are reasonable, and good marketing should keep you because it works, not because you're legally trapped."
    },
    {
      question: "Will I really save 70% if I outsource to WrittenlyHub's automotive marketing?",
      answer: "Hell yes, you'll save big. No hiring a small army of marketers who need six months to understand what regenerative braking is. Skip the 3-5 month trial-and-error phase with agencies that think EVs are just 'green cars.' We're your plug-and-play team that already speaks automotive. No overhead, no micromanaging, just premium results at a fraction of the cost."
    },
    {
      question: "What are the key metrics you track to measure success?",
      answer: "We track what actually matters: pilot program conversions, partnership deals, fleet inquiries, and revenue impact. You pick the goal (government contracts, fleet pilots, Series B funding), we measure the numbers that count. Real impact, zero BS metrics like 'brand awareness lift.'"
    },
    {
      question: "How do you integrate with our team without creating more chaos?",
      answer: "We become part of your automotive family. We study your supply chain like it's our own, treat your technology roadmap like gospel, and collaborate seamlessly with your engineering and sales teams. No extra meetings, no process overhauls, just results that make everyone look good."
    },
    {
      question: "Do you actually understand automotive tech or just pretend to?",
      answer: "We're the nerds who debate battery chemistry at dinner parties and know why 800V architecture matters. Half our team has worked with OEMs, suppliers, or mobility startups. We don't fake it till we make it, we already know your world inside out."
    },
    {
      question: "How hands-on will your team be without becoming micromanagers?",
      answer: "We're elbow-deep in execution while you focus on building the future of mobility. From strategy to optimization, we handle it all. No 47-person conference calls, no asking what V2G means, we run the marketing show while you run your business. Easy as that."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="font-montserrat relative w-full bg-[#022150] py-12 md:py-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-orange-400/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-[90%] mx-auto mb-16 relative z-30 text-center"
      >
        <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
          Need Answers?
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
          Frequently asked <span className="text-orange-500 ">questions</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-xl">
          FAQs on CMO as-a-Service for EV founders 
        </p>
      </motion.div>

      {/* FAQ List */}
      <div className="w-[80%] max-w-4xl mx-auto relative z-20">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
            className="mb-4"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full text-left px-6 py-4 rounded-lg transition-all ${
                activeIndex === index ? 'bg-[#0a2a6a]' : 'bg-[#0a2a6a]/70 hover:bg-[#0a2a6a]'
              } border border-white/10`}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-semibold text-white">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4"
                >
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: 'auto' },
                    collapsed: { opacity: 0, height: 0 }
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 text-gray-300 text-xl">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;