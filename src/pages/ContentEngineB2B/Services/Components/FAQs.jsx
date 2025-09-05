import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How quickly can you understand our B2B SaaS niche?",
      answer: `Look, we don't pretend to be SaaS experts on day one. But here's the thing - we've worked with 170+ B2B SaaS brands, so we know the difference between churn and burn rate.  

We spend the first week diving deep into your specific use case and stalking your competitors and their industry quirks. Most of our writers have been doing B2B content for years, not jumping from fashion blogs to fintech overnight.`
    },
    {
      question: "What happens when I need something urgent and you're swamped with other clients?",
      answer: `Fair question. We don't oversell our capacity like airlines oversell seats. We maintain a buffer of writers and have a priority queue system - if you mark something urgent, it gets bumped up. Your urgency is our urgency.`
    },
    {
      question: "How do I know you won't just churn out generic content with our logo slapped on it?",
      answer: `Because that would be business suicide. We literally adopt your brand voice guidelines (the ones you probably have buried in some Google Doc) and create content that passes the "did someone internal write this?" test. We're not cranking out template blogs - each piece is written by someone who actually reads your existing content first.`
    },
    {
      question: "If I'm not happy with something, am I stuck with revision hell?",
      answer: `Nope. Revisions are included because we're not sociopaths. If something's off, we fix it. If it's way off, we probably messed up the brief, and that's on us. Most clients get 98% approval on first drafts anyway, but when we miss the mark, we make it right without charging you extra for our mistakes.`
    },
    {
      question: "How do I start content marketing?",
      answer: `Listen, we know content marketing feels like trying to solve a Rubik's cube blindfolded. So here's the deal. you handle the strategy stuff (what you want to promote, topics that matter to your audience, which platforms to hit), and we handle everything else.  

You don't need to become a content expert, hire writers, or stare at a blank Google Doc. Just tell us your goals and watch your content calendar get filled for once.`
    },
    {
      question: "What is a retainer in an agency?",
      answer: `A retainer is paying a fixed monthly fee to keep an agency "on call" - think of it like having a dedicated content team without the payroll headaches. Most agencies then hit you with extras for everything ("that's an additional $50 for revisions"). Our retainer means truly unlimited content - no hidden fees, no surprise charges.`
    },
    {
      question: "What’s the minimum contract length for your Content Engine?",
      answer: `We start with a 3-month commitment – not because we’re clingy, but because great content doesn’t happen overnight.`
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
          FAQs on content retainer for B2B SaaS
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
