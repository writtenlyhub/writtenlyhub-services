import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

const faqs = [
  {
    question: "What does a CMO-as-a-Service team do for incubators?",
    answer: "We become your portfolio's entire marketing department. From strategy to execution, we handle everything - brand development, digital campaigns, content creation, and performance optimization. Think of us as the marketing backbone for every startup in your portfolio, ensuring consistent growth strategies across the board."
  },
  {
    question: "How much does CMO-as-a-Service cost?",
    answer: "You'll save up to 70% compared to hiring in-house marketing teams for each startup. Instead of multiple six-figure salaries, benefits, and recruiting costs across your portfolio, you get senior-level marketing expertise for a fraction of the price. No overhead, no hiring drama, just results."
  },
  {
    question: "What's the difference between CMO-as-a-Service and regular marketing agencies?",
    answer: "Regular agencies give you one-size-fits-all solutions and junior teams learning on your dime. We provide dedicated, senior-level marketers who understand incubators specifically. We're not just another vendor - we become part of your team, owning results and scaling with your portfolio's growth."
  },
  {
    question: "Will I really save 70% if I outsource to WrittenlyHub?",
    answer: "Yes, absolutely. You don't need multiple marketing teams or months of vendor drama across your portfolio. Skip the $10K mistakes per startup. Skip the recruiting hell. We plug in, perform, and deliver premium results. No overhead, no hand-holding, just outcomes that make investors happy."
  },
  {
    question: "What metrics do you track for incubator portfolios?",
    answer: "We track what actually moves the needle toward funding milestones - qualified leads, conversion rates, time-to-market, and pipeline contribution. You pick the goals (brand awareness, lead gen, Series A prep), we measure the numbers that matter to investors. Real impact, not vanity metrics."
  },
  {
    question: "How do you integrate with incubator teams and portfolio companies?",
    answer: "We don't just work for you, we work with you. We make your portfolio our mission, treat each startup's business model like our marketing bible. We'll work with your leadership, collaborate with sales teams, and strategize for success - seamlessly, no extra management needed."
  },
  {
    question: "How hands-on will your team be with our startups?",
    answer: "We're knee-deep in the action. From strategizing to executing and optimizing across your entire portfolio, we handle it all while your startups stay focused on their products. No more juggling multiple agencies; our team runs the marketing show for all portfolio companies."
  },
  {
    question: "Do you work with pre-Series A startups?",
    answer: "Absolutely. Whether your portfolio has seed-stage companies or post-Series A, we adapt our strategies to each startup's funding stage and growth needs. We've helped startups at every level scale toward their next milestone."
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
          FAQs on CMO-as-a-Service for EV founders 
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