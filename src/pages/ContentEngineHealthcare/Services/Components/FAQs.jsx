import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Can you really write about our specific medical speciality without being specialists yourself?",
      answer: `We don't pretend to be cardiologists or oncologists. But we research your field, study your existing content, and work with your team to understand the nuances. We're content specialists who become fluent in your medical area, not medical experts trying to write.`
    },
    {
      question: "What if my medical team hates the content and we're stuck with revisions forever?",
      answer: `We get 95% first-draft approval because we do our homework upfront. But if something's off, unlimited revisions are included - no extra charges. Most of our healthcare clients are surprised by how little back-and-forth there actually is once we nail your voice.`
    },
    {
      question: "How fast can you really turn around medical content without cutting corners on quality?",
      answer: `48-72 hours is our standard. Emergency requests get prioritized, but we never sacrifice accuracy for speed. Medical content done wrong isn't just bad marketing, it's dangerous.`
    },
    {
      question: "What does content mean in healthcare?",
      answer: `Healthcare content is everything that educates your audience about your services and medical topics. We create all of this - patient guides, condition explanations, procedure descriptions, health tips - so you can focus on treating patients instead of explaining the same things over and over in writing.`
    },
    {
      question: "How to write medical content?",
      answer: `Medical content needs to be accurate, compliant, and understandable to non-medical people. But don’t worry if this sounds too much, we handle the entire process from research to writing to compliance checks. Now, you can focus on being the healthcare expert while letting us be the experts in content.`
    },
    {
      question: "What is a retainer in marketing?",
      answer: `A retainer means paying a fixed monthly fee for ongoing marketing services instead of per-project pricing. Our retainer gives you unlimited healthcare content for one predictable cost - no surprise bills, no scope creep, just content when you need it.`
    },
    {
      question: "What’s the minimum contract length for your Content Engine?",
      answer: `We start with a 3-month commitment, because effective healthcare content takes a little warm-up.`
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="font-montserrat relative w-full bg-[#022150] py-20 overflow-hidden">
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
        className="w-[80%] mx-auto mb-16 relative z-30 text-center"
      >
        <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
          FAQs on content retainer for healthcare brands
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
          Frequently asked <span className="text-orange-500">questions</span>
        </h2>
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
                  <div className="px-6 py-4 text-gray-300 text-xl whitespace-pre-line">
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
