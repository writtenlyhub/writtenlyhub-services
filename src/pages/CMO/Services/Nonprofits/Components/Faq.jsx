import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

const faqs = [
  {
    question: "Will I really save 70% compared to hiring in-house?",
    answer: "Absolutely. No salaries, benefits, or months teaching someone what 'unrestricted funds' means. We're your ready-to-go team that already speaks nonprofit fluency. No overhead, no hand-holding, just strategic marketing at a fraction of the cost."
  },
  {
    question: "What if your approach doesn't align with our mission?",
    answer: "We'd rather pass than misrepresent your cause. We start with deep mission immersion, understanding your values and impact stories. We refuse generic templates and create authentic campaigns that honor your work."
  },
  {
    question: "How do you handle sensitive topics?",
    answer: "Our team includes former nonprofit professionals who know how to balance emotional storytelling with ethical fundraising. We prioritize transparency, authenticity, and respect for your donors' values in every campaign."
  },
  {
    question: "What metrics do CMO as-a-Service agencies actually track?",
    answer: "We track what moves the needle: donor acquisition costs, recurring donation rates, donor lifetime value, and program awareness. You set the priorities, we measure the numbers that matter. No vanity metrics."
  },
  {
    question: "How does your CMO as-a-Service team integrate with our team?",
    answer: "We become part of your nonprofit family. We learn your programs, understand your funding cycles, and collaborate seamlessly with your development team. No extra bureaucracy, just results that make board meetings enjoyable."
  },
  {
    question: "Can outsourced marketing teams work with our existing donors?",
    answer: "We're extensions of your team, not replacements. We work behind the scenes to amplify your voice and strengthen existing relationships. Your donors see improved engagement, not a jarring change in approach."
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