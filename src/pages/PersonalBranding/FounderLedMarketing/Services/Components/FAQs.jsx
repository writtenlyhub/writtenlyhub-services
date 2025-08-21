import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

const faqs = [
  {
    question: "How exactly do you position me without making me look fake or overly promotional?",
    answer: "We focus on your actual stories and real experiences, not made-up achievements. Think of it like having a smart friend who knows how to highlight your best moments without the cringe. We avoid the whole 'thought leader' nonsense and just make you sound like... well, you."
  },
  {
    question: "What's your actual process for creating content when I have zero time?",
    answer: "Super simple - we do a quick brain dump session where you share what's on your mind (like 30 minutes), then we handle everything. Need a quote or approval? We'll send you options via Teams or Email. You just pick what sounds like you, and we handle the rest."
  },
  {
    question: "How do you measure 'business impact' versus vanity metrics?",
    answer: "We look at stuff that actually matters to your bottom line - qualified leads, meaningful conversations, and actual interest from potential clients. Likes are nice, but we care more about 'I saw your post and want to hire you' DMs."
  },
  {
    question: "What's the actual time commitment? I'm already stretched thin.",
    answer: "Three months, but we're talking 30-45 minutes of your time per month. We handle everything - writing, posting, engagement. You just approve the strategy and content calendar. Think of it as hiring a CMO who only needs your input, not your time."
  },
  {
    question: "What happens if I don't like the content or it doesn't feel like me?",
    answer: "We don't publish anything without your approval. Every piece gets your green light first. If something feels off, we revise it until it sounds exactly like you - just the version of you that knows how to sell. We'd rather take longer to get it right than push out content that makes you cringe."
  },
  {
    question: "How quickly will I see results?",
    answer: "Month 1 is strategy and setup. Month 2, you'll start seeing engagement and initial inquiries. By Month 3, qualified leads should be flowing consistently. Some founders see their first serious prospect in week 6, others take 10 weeks. But by quarter-end, you'll know this is working."
  },
  {
    question: "What's your contingency plan if the algorithm changes or platforms shift?",
    answer: "Honestly? We roll with it. Platforms change all the time (remember BeReal?), so we never put all our eggs in one basket. Good content works everywhere - whether it's LinkedIn today or whatever comes next. We adapt, test, and keep your voice consistent across channels."
  },
  {
    question: "How do you deal with trolls, critics, and negative feedback?",
    answer: "We handle 90% of it for you. For genuine criticism, we draft thoughtful responses. For trolls and random hate, we either ignore or block - you don't need that energy in your life. Plus, we'll prep you with comeback strategies for when you want to handle it yourself."
  },
  {
    question: "What is founder branding?",
    answer: "It's making sure when people think of your industry, they think of YOU first. We turn invisible founders into the obvious choice - the one prospects seek out, VCs remember, and partners want to work with. No more introducing yourself at networking events."
  },
  {
    question: "How to humanize your brand on social media?",
    answer: "Stop posting corporate bullshit and start sharing your actual founder journey - the wins, lessons, and insights that make you relatable. People buy from humans, not faceless companies. We help you do this authentically without sounding like every other 'hustle culture' bro posting 5am gym selfies. Your story becomes your competitive advantage."
  },
  {
    question: "What does a branding agency do?",
    answer: "Most agencies create pretty logos and generic messaging that looks nice but doesn't drive business results. They focus on brand guidelines while your pipeline stays empty. We build personal brands that generate qualified leads and make VCs slide into your DMs. Less pretty presentations, more revenue in your bank account."
  },
  {
    question: "How much does a personal branding consultant cost?",
    answer: "Probably more than us, and they'll make you do half the work yourself - attending weekly calls, writing content briefs, managing revisions. You'll spend more time on branding than building. We handle everything so you can focus on your company instead of becoming a full-time content creator. Better results, less hassle, lower cost."
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