import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How quickly can you get up to speed on our fintech product?",
      answer: `We've worked with dozens of fintech teams—from payments to regtech—so we know the landscape. Our writers don't bounce between industries; they're trained specifically in fintech and take the time to get it right.`
    },
    {
      question: "What if I need something fast, but you’re handling other clients too?",
      answer: `Totally fair. We don’t take on more work than we can handle. 

Every retainer includes room for last-minute priorities. If something’s urgent, just flag it, we’ll move it up. You won’t be left waiting behind someone else’s newsletter.`
    },
    {
      question: "How do I know the content will actually sound like us?",
      answer: `Because that’s kind of the whole point. We spend time learning your tone and your messaging, whether that’s in a style guide or just how you speak on calls. You’ll never get something that feels generic or “insert fintech buzzword here.”`
    },
    {
      question: "What happens if I don’t like a draft?",
      answer: `No stress - revisions are part of the process. 

Most of our content gets approved on the first go, but if something feels off, just tell us. We’ll fix it quickly and without any extra charges. If it’s way off, we’ll figure out what went wrong and make it right. Simple as that.`
    },
    {
      question: "What is fintech content?",
      answer: `It’s the stuff that makes your complex product sound clear, smart, and trustworthy, without putting people to sleep. Blogs, landing pages, emails, whitepapers – tailored for fintech buyers. 

Our content marketing handles all of it, fast. No freelancers. No filler. Just clean, consistent content that sounds like you.`
    },
    {
      question: "What is fintech in marketing?",
      answer: `It’s how you take your product from “we built this” to “people actually get it, and buy it.” It’s messaging, education, and trust-building, all rolled into one. 

That’s exactly what our content engine delivers: on-brand, high-volume fintech content that keeps pace with your product launches and revenue goals.`
    },
    {
      question: "Which company is best in fintech?",
      answer: `Hard to say. But if they’ve got great content, chances are someone like us is behind it. One company dominating content is Zerodha! 

Our content services power content for fast-growing fintechs that don’t have time for delays, rewrites, or bullsh*t. You focus on growth, we’ll handle the words.`
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
          FAQs on content engine retainer for fintech brands
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
