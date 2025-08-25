import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is a fractional CMO for Startups?",
      answer:
        "A fractional CMO is a seasoned marketing executive who works with your startup on a part-time basis, providing senior-level strategy and leadership without the full-time exec price tag. Think of it as getting a $250k CMO's brain for a fraction of the cost, perfect for startups that need strategic marketing leadership but can't justify (or afford) a full-time hire.",
    },
    {
      question: "How much does a CMO-as-a-Service cost?",
      answer:
        "Our CMO-as-a-Service costs 70% less than hiring a full-time CMO. Instead of paying $200k+ for an in-house CMO (plus benefits, equity, and the hiring drama), you get strategic leadership and hands-on execution for a fraction of that cost. No overhead, no office politics, just results.",
    },
    {
      question: "What is the difference between a CMO-as-a-Service and a marketing agency?",
      answer:
        "Marketing agencies focus on executing specific tactics like campaigns and content creation, while a CMO-as-a-Service provides strategic leadership first, then guides the execution. Agencies need direction; we ARE the direction. We don't just run your ads, we figure out if you should be running ads at all.",
    },
    {
      question: "Do you work with all startup stages?",
      answer:
        "From seed-stage chaos to Series B scaling madness, we've got you covered. Our approach adapts to your stage, whether you need to establish product-market fit, build lead generation systems, or scale what's already working.",
    },
    {
      question: "How quickly will we see results?",
      answer:
        "Most clients see improvement in lead quality within 30-60 days, but we're not here to sell you magic beans. Real marketing takes time to compound, but you'll see strategic improvements and better direction from day one.",
    },
    {
      question: "What makes WrittenlyHub different from other fractional CMO services?",
      answer:
        "We're not just strategic consultants who disappear after giving you a PowerPoint. We combine senior-level strategy with hands-on execution, provide dedicated account management, and actually give a damn about your results. Plus, we're not afraid to tell you when something isn't working, even if it hurts.",
    },
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
          FAQs on CMO-as-a-Service for startup founders
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
                activeIndex === index
                  ? "bg-[#0a2a6a]"
                  : "bg-[#0a2a6a]/70 hover:bg-[#0a2a6a]"
              } border border-white/10`}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4"
                >
                  <svg
                    className="w-5 h-5 text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
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
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
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
