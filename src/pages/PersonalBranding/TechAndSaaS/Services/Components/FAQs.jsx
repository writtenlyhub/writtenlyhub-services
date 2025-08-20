import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

const faqs = [
  {
    question: "What’s the ROI on building my personal brand?",
    answer: "Our SaaS clients average 25+ qualified demos monthly within 90 days. That's roughly $300K+ in additional pipeline annually. One client went from 3 demos monthly to 22+ and closed an extra $250K ARR in 6 months. The math is simple: authority = higher close rates + premium pricing + no more 'you're too expensive' objections."
  },
  {
    question: "How much of my time will this take?",
    answer: "Nothing! We do all the heavy lifting. You get to keep coding and building, while we make sure your brand is out there working for you. You won’t have to stop anything to post on social media every day."
  },
  {
    question: "What makes this different from traditional agencies or other personal branding services?",
    answer: "Well, we’ve worked with businesses like yours, so we’re not out here with some generic playbook. We understand B2B sales cycles, enterprise buyers, and why technical founders struggle with 'marketing speak.' Plus, we cap clients at 6 per quarter so you get actual attention, and not some rushed generic strategy."
  },
  {
    question: "What is SaaS branding?",
    answer: "SaaS branding is how people feel about your product before they ever try it. It’s not just logos and colours, it’s how clearly you show up as a founder, what your product stands for, and why anyone should care. And we do this exactly by helping SaaS & tech founders build a personal brand that connects the dots so buyers think, 'Wait, this is the person behind that? I need to talk to them.'"
  },
  {
    question: "What does a personal branding agency do?",
    answer: "We take your ideas, experience, and founder story and turn them into content that actually builds credibility. Think: smart LinkedIn posts, sharp positioning, and a presence that makes people want to work with you, not just your product. We help you step out from behind the dashboard and become the person your market trusts."
  },
  {
    question: "How much do personal branding agencies charge?",
    answer: "Anywhere from a few hundred bucks to $10K+ a month, depending on how serious they are. We keep it focused: no bloated retainers or random fluff. Just real strategy, real content, and measurable results for tech founders who want traction. If you care about ROI and not just 'looking good online,' we’re probably your people."
  },
  {
    question: "Is personal branding really worth it?",
    answer: "If you're a tech/Saas founder? Absolutely. A strong personal brand means you don’t have to chase every deal—people come to you. Our clients see more leads, faster closes, and way more trust built before a sales call even happens. It’s not optional anymore. In a noisy market, being invisible is the real risk."
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
          FAQs on personal<span className="text-orange-500 "> branding for SaaS founders</span>
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