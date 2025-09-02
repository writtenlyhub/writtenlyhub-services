import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

const faqs = [
  {
    question: "How do you differentiate from other personal branding agencies that claim similar results?",
    answer: "Most agencies are run by marketers who've never actually built anything. We've been in your shoes, freaking out over server crashes at 2 A.M. while trying to close deals. We don't do generic 'thought leadership' – we engineer reputation systems based on what actually opened doors for us."
  },
  {
    question: "How hands-off can this be for me?",
    answer: "About as hands-off as having a private chef. We need 60 minutes upfront to extract the good stuff from your brain, then maybe 15-20 minutes monthly to check in. Your job is to run your business – ours is to make sure people actually know who's running it."
  },
  {
    question: "How do you tailor your approach to fit my personal tone and unique style?",
    answer: "We don't force you into some 'thought leader' mold that makes everyone sound like they graduated from the same LinkedIn course. We figure out what makes you actually interesting, then amplify that instead of burying it under corporate-speak."
  },
  {
    question: "What is the typical timeline for seeing measurable results?",
    answer: "There's no magic timeline – this isn't overnight influencer fame, it's strategic positioning that actually lasts. Some clients see initial movement within weeks (people suddenly responding to messages they previously ignored), while others build more gradually. What matters is building a system that continues working long after trends die down."
  },
  {
    question: "How to pitch to high net worth individuals?",
    answer: "Forget the sales pitch - HNIs respond to expertise and exclusivity, not desperation. At WrittenlyHub, we position you as the obvious choice through strategic LinkedIn authority, so qualified prospects reach out to you first. No cold calls, no networking events, just premium clients discovering your expertise naturally."
  },
  {
    question: "What is considered a high-net-worth individual?",
    answer: "Generally someone with $1M+ in investable assets, though we also focus on business leaders, executives, and wealth managers who control significant capital. We help them in personal branding so that their online presence matches their offline success."
  },
  {
    question: "What is meant by personal branding?",
    answer: "Personal branding is how you're perceived professionally - your reputation, expertise, and authority in your field. Here at WrittenlyHub, we build personal brands that position high net worth individuals as industry leaders who attract premium opportunities. Think less 'influencer with morning routines' and more 'expert that family offices want on their advisory board.'"
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
        className="w-[90%] mx-auto mb-16 relative z-30 text-center"
      >
        <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
          Need Answers?
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
          FAQs on authority building<span className="text-orange-500 "> for HNIs </span>
        </h2>
        {/* <p className="text-gray-300 max-w-2xl mx-auto text-xl">
          Everything you need to know about our personal branding services
        </p> */}
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