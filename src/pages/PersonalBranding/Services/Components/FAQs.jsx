import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Are you really going to handle everything, or will I still need to create content myself?",
      answer: "Nope, you won't have to lift a finger! We'll handle everything – coming up with ideas, writing the posts, managing your content calendar, and even optimizing your profiles. You just sit back and watch as we turn your expertise into content that actually attracts clients. We will need one call of 30 minutes every month to get to know your story."
    },
    {
      question: "Will I see results quickly, or is this a long-term strategy?",
      answer: "You'll start seeing results pretty quickly, usually within 3-4 months. More leads, more engagement, and people reaching out to work with you. It's not an overnight thing, but we've got a proven system that gets you there faster than you think."
    },
    {
      question: "What's the minimum commitment to see real results?",
      answer: "3 months minimum. Month 1 is setup and discovery, month 2 shows momentum, month 3 delivers consistent qualified leads. Personal branding agencies typically require 3+ months for measurable results."
    },
    {
      question: "How much does this actually cost compared to hiring internally?",
      answer: "Starting at $1,500/month vs. $6K+ monthly for in-house content manager. Specialist personal branding agencies typically charge £2925+ for comprehensive packages - we're significantly more affordable."
    },
    {
      question: "What does a personal branding agency do?",
      answer: "If you're a coach or consultant and people still don't 'get' what you do after scrolling your profile, that's where we come in. We help you build a brand that speaks clearly, shows off your expertise, and attracts leads, without you needing to post daily or sound like someone else wrote it."
    },
    {
      question: "Do you guarantee results or just promise them?",
      answer: "We guarantee the work gets done to your satisfaction. Results depend on your market, offer quality, and sales process, but we've never had a client not see improvement in lead quality and quantity. You're entitled to a partial refund if it doesn't work for you after 3 months."
    },
    {
      question: "How much do personal branding agencies charge?",
      answer: "Most agencies charge anywhere from $3,000 to $15,000 a month depending on how hands-on they are. Sounds like a lot? Good branding pays for itself. Our clients including coaches and consultants, see 3x to 5x ROI because a strong brand fills up your pipeline, shortens sales cycles, and lets you raise your rates without flinching."
    },
    {
      question: "Is personal branding really worth it?",
      answer: "100%. Coaches with a strong personal brand typically charge 30–50% more, and consultants often double their inbound leads in under three months. When your brand does the talking, you don't have to chase clients they come to you. That's exactly what we help you build through our Personal Branding – strategic positioning, standout content, and a presence that pre-sells your value before you even hop on a call."
    },
    {
      question: "What if my niche is too specific or 'boring'?",
      answer: "We've made supply chain consultants and compliance coaches magnetic on LinkedIn. Every career path can benefit from personal branding - if you solve problems, we can make you unmissable."
    },
    {
      question: "How do you ensure content sounds like me, not some generic ghostwriter?",
      answer: "Deep discovery process captures your unique voice and methodology. Your unique personality, approach, and values should shine through your messaging - unlimited revisions until it's authentically you."
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
          Frequently asked questions<span className="text-orange-500 "></span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-xl">
          Everything you need to know about our personal branding services
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