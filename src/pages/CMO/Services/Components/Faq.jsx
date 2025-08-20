import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How fast will we see results with WrittenlyHub's CMO as a Service?",
      answer: "Most clients see measurable improvements within 60 days. By month 3, you'll have a marketing system driving qualified leads."
    },
    {
      question: "Why should I choose WrittenlyHub over hiring in-house?",
      answer: "You're not paying more — you're getting more. With us, you skip hiring delays, training costs, and overhead. Instead, you get a full-stack SaaS marketing team that delivers 3x better results, faster."
    },
    {
      question: "Is there a contract with WrittenlyHub's CMO as-a-Service?",
      answer: "We work in the plug-and-play field. Marketing that works takes time to build, but there's no long-term lock-in."
    },
    {
      question: "Will I really save 70% if I outsource WrittenlyHub's end-to-end SaaS marketing?",
      answer: "Yes, absolutely. You don't need a team of marketers or months of vendor drama. Skip the $10K mistakes. Skip the hires. We plug in, perform, and deliver premium results. No overhead, no hand-holding, just outcomes that speak for themselves."
    },
    {
      question: "What are the key metrics you track to measure success?",
      answer: "We track what really moves the needle—conversion rates, retention, content performance, and pipeline contribution. You pick the goal (brand awareness, lead gen, revenue, etc.), we measure the numbers that matter. It's all about real impact, no fluff."
    },
    {
      question: "How do you integrate with our team and process?",
      answer: "We don't just work for you, we work with you. We make your product our own, treat your business model like our marketing bible, and bring it all together with our playbook. We'll work with your leadership, collaborate with sales, and strategize for success, seamlessly, no extra management needed."
    },
    {
      question: "How hands-on will your team be?",
      answer: "We're knee-deep in the action. From strategizing to executing and optimizing, we handle it all while you stay focused on your product. No more juggling 10 different roles; our team runs the show and keeps things moving. No need to micromanage, just sit back and watch the results stack up."
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
          Everything you need to know about our CMO as a Service
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
