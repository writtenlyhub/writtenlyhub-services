import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How quickly can you start creating content for our nonprofit?",
      answer: "Most nonprofits get their first content piece within one week of onboarding. We handle the discovery and knowledge transfer efficiently so you're not waiting weeks to see results."
    },
    {
      question: "What types of content marketing do you create for nonprofits?",
      answer: "Everything your nonprofit needs: blog posts, social media content, email campaigns, donor newsletters, case studies, and campaign materials. No limits on content types or volume. We do NOT write grant proposals."
    },
    {
      question: "How does unlimited content marketing actually work?",
      answer: "Submit as many content requests as you need through our system. We prioritize by urgency and deliver each piece in 2-3 days. Most nonprofits submit 20-35 requests monthly, but there's no cap."
    },
    {
      question: "Do you understand our specific nonprofit sector and donor base?",
      answer: "Yes. Our team has created 50+ campaigns for platforms serving 50,000+ nonprofits. We understand donor psychology, compliance requirements, and sector-specific messaging that converts."
    },
    {
      question: "How much does your nonprofit content marketing retainer cost?",
      answer: "Plans start at $3,000 monthly for unlimited content requests. That's less than hiring one marketing person and over 60% cheaper than traditional marketing agencies. No setup fees or annual contracts required."
    },
    {
      question: "Can you integrate with our existing nonprofit marketing team?",
      answer: "Absolutely. We work as an extension of your team, following your brand guidelines and campaign calendars. Your staff focuses on strategy while we handle all content creation and optimization."
    },
    {
      question: "How do you ensure content aligns with our nonprofit's mission?",
      answer: "Every project starts with deep mission discovery. We study your programs, impact stories, and donor communication style before writing anything. Plus, unlimited revisions until it perfectly captures your voice."
    },
    {
      question: "What results can we expect from consistent nonprofit content marketing?",
      answer: "Our clients typically see 40%+ increases in donor signups, improved search rankings, and stronger campaign performance within 180 days. Content marketing compounds - results accelerate over time."
    },
    {
      question: "What's the onboarding process like?",
      answer: "Onboarding is pretty fast – it's usually about a week before the first piece of content is out. You'll notice your team feeling less stressed, and nonprofits often see better engagement within the first month of consistent content."
    },
    {
      question: "What's the minimum contract length for your content retainer plan?",
      answer: "We start with a 3-month commitment to ensure proper onboarding and measurable results. Month one covers discovery and alignment, month two delivers consistent content flow, and month three shows real impact on your donor engagement. You start seeing real impact around the 4-6 month period."
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
          Need Answers?
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
          Frequently asked <span className="text-orange-500">questions</span>
        </h2>
        {/* <p className="text-gray-300 max-w-2xl mx-auto text-xl">
          Everything you need to know about our nonprofit content marketing services
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