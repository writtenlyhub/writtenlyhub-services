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

const stats = [
  { id: 1, name: 'missions amplified', value: 25 },
  { id: 2, name: 'additional donations generated', value: 1700, unit: 'bn' },
  { id: 3, name: 'pages ranking #1', value: 180 },
  { id: 4, name: 'more donor signups', value: 42, unit: '%' },
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

const Counter = ({ value, unit }) => {
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
          setCount(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  const formatValue = () => {
    if (unit === 'bn') {
      return `${(count / 1000).toFixed(count % 1000 !== 0 ? 1 : 0)}bn`;
    } else if (unit === '%') {
      return `${count}%`;
    } else {
      return `${count.toLocaleString()}+`;
    }
  };
  
  return <span ref={ref} className="text-orange-500 font-bold text-4xl md:text-5xl">{formatValue()}</span>;
};

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
          className="flex w-max space-x-10 px-4"
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
                <Counter value={stat.value} unit={stat.unit} />
              </p>
              <p className="text-xs sm:text-sm text-white/60 uppercase tracking-wide">{stat.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* <div className="w-full flex justify-center mt-18">
        <button className="inline-block px-16 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-lg hover:text-orange-500 font-semibold rounded-full transition-colors duration-700">
          Get started today
        </button>
      </div> */}
    </section>
  );
};

export default SocialProof;