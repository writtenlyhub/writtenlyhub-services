import { motion, useAnimationFrame } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

// Sample logos and avatars
const companies = [
  { id: 1, name: "upGrad", logo: "https://ik.imagekit.io/upgrad1/abroad-images/logo/upGrad_logo_web.svg?tr=w-118,q-70" },
  { id: 2, name: "Ask-Apollo-Health", logo: "https://images.apollo247.in/images/icons/apollo247.svg" },
  { id: 3, name: "Shriram-Finance-Logo", logo: "https://cdn.shriramfinance.in/sfl-fe/assets/images/sw-logo.svg" },
  { id: 4, name: "Zeffy", logo: "https://cdn.prod.website-files.com/60af7f6d21134db12548f5b9/62a23ee189b58ad0dd096db0_Zeffy-Logo-White.svg" },
  { id: 5, name: "Kreatr", logo: "https://www.thekreatr.com/assets/images/kreatrLogo.svg" },
  { id: 6, name: "Growth Jockey", logo: "https://intellsys-optimizer.b-cdn.net/growthjockey/logo/gj-white-text-logo.svg" },
  { id: 7, name: "CoinDCX", logo: "https://coindcx.com/wp-content/uploads/2024/02/coindcx-logo.svg" },
  { id: 8, name: "FiMoney", logo: "https://dza2kd7rioahk.cloudfront.net/assets/svgs/logo-footer.svg" },
  { id: 9, name: "Basofa", logo: "https://www.basofa.com/wp-content/uploads/2024/01/BSF-Logo-Dimensions-Fit-1.png" },
  { id: 10, name: "Look Forward Foundation", logo: "https://lookforward.in/wp-content/uploads/2023/07/LFF-Logo-1-Recovered-Recovered.png" },
];

// Stats with multiplier flag added
const stats = [
  { id: 1, name: 'LinkedIn impressions', value: 500000 },
  { id: 2, name: 'Relaxed tech/SaaS founders', value: 17 },
  { id: 3, name: 'Inbound leads', value: 780 },
  { id: 4, name: 'Leadership pieces', value: 2000 }
];


// Animation variants
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Updated Counter component
const Counter = ({ value, isPercentage = false, isMultiplier = false }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const increment = value / (duration / 16);
      let start = 0;
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  let formatted;
  if (isMultiplier) {
    formatted = `${count.toFixed(1)}x`;
  } else if (value >= 1000000) {
    formatted = `${(count / 1000000).toFixed(count % 1000000 !== 0 ? 1 : 0)}M`;
  } else if (value >= 1000) {
    formatted = `${(count / 1000).toFixed(count % 1000 !== 0 ? 1 : 0)}k`;
  } else if (isPercentage) {
    formatted = `${Math.ceil(count)}%`;
  } else {
    formatted = Math.ceil(count);
  }

  return (
    <span ref={ref} className="text-orange-500 font-bold">
      {formatted}{(!isPercentage && !isMultiplier) && '+'}
    </span>
  );
};

// Infinite scrolling logos
const InfiniteScrollLogos = () => {
  const scrollRef = useRef(null);
  const [x, setX] = useState(0);
  const [paused, setPaused] = useState(false);
  const duplicated = [...companies, ...companies];
  const speed = 1;

  useAnimationFrame(() => {
    if (!paused && scrollRef.current) {
      setX(prev => {
        const reset = -(scrollRef.current.scrollWidth / 2);
        return prev <= reset ? 0 : prev - speed;
      });
    }
  });

  return (
    <div
      className="font-montserrat relative overflow-hidden py-12 md:py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#022150] to-transparent" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#022150] to-transparent" />
      </div>

      <div className="w-[90%] max-w-7xl mx-auto">
        <motion.div
          ref={scrollRef}
          className="flex w-max space-x-16 px-4"
          animate={{ x }}
          transition={{ ease: "linear", duration: 0 }}
          style={{ willChange: "transform" }}
        >
          {duplicated.map((c, i) => (
            <img
              key={`${c.id}-${i}`}
              src={c.logo}
              alt={c.name}
              className="h-10 opacity-70 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
              draggable="false"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Main SocialProof component
const SocialProof = () => {
  return (
    <section className="bg-[#022150] text-white py-16">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto px-4"
      >
        <motion.div variants={fadeInUp}>
          <InfiniteScrollLogos />
        </motion.div>

        <motion.div
          variants={container}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              variants={fadeInUp}
              className={`text-center px-2 py-4 ${index % 4 !== 3 ? 'sm:border-r border-white/10' : ''}`}
            >
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">
                <Counter
                  value={stat.value}
                  isPercentage={stat.isPercentage}
                  isMultiplier={stat.isMultiplier}
                />
              </p>
              <p className="text-xs sm:text-sm text-white/60 uppercase tracking-wide">
                {stat.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SocialProof;
