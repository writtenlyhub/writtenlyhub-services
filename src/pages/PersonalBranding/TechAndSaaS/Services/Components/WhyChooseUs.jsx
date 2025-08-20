import { motion } from "framer-motion";
import { 
  BrainCircuit,
  BarChart2,
  Zap,
  ShieldCheck,
  Clock,
  TrendingUp,
  LayoutDashboard,
  Users
} from "lucide-react";

const AboutUs = () => {
const features = [
{
    icon: <BrainCircuit className="w-5 h-5" />,
    title: "Deep SaaS expertise, not LinkedIn fluff",
    description: "Specialists who understand enterprise tech buying psychology",
    image: "https://i.ibb.co/SDg1GNhT/icons-graphs.png"
  },
  {
    icon: <BarChart2 className="w-5 h-5" />,
    title: "1.2M+ LinkedIn impressions",
    description: "Converted into qualified enterprise sales meetings",
    image: "https://i.ibb.co/wFrcfLRF/icons-graphs-2.png"
  },
  {
    icon: <LayoutDashboard className="w-5 h-5" />,
    title: "B2B tech psychology",
    description: "Content that transforms skeptical buyers into eager customers",
    image: "https://i.ibb.co/nW8WG7r/Content-psychology.png"
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Full-service personal branding",
    description: "Complete authority-building with zero management hassle",
    image: "https://i.ibb.co/xSPftz7S/CARD-2-revision.png"
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Automated authority building",
    description: "Runs 24/7 while you focus on product development",
    image: "https://i.ibb.co/ZzC28R4q/icons-graphs-3.png"
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Guaranteed Leads",
    description: "15+ qualified leads monthly",
    image: "https://i.ibb.co/ns5TvGq9/icons-graphs-4.png" // Leads / secure
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Community Building",
    description: "We help you cultivate an engaged audience that trusts your expertise",
    image: "https://i.ibb.co/Mx7SGvTb/icons-graphs-6.png" // Community / people
  }
];


  return (
    <section className="relative w-full bg-[#022150] py-12 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-40 h-40 md:w-64 md:h-64 rounded-full bg-orange-400/10 blur-xl md:blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-40 h-40 md:w-64 md:h-64 rounded-full bg-blue-500/10 blur-xl md:blur-3xl"></div>
      </div>

      <div className="w-[90%] md:w-[80%] mx-auto font-montserrat">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 relative z-30 text-center"
        >
          <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
            Why choose us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
           The unfair advantages<span className="text-orange-500"> only my SaaS clients get</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-xl">
I don't just "do LinkedIn" - I understand your world! 
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6"
        >
          {/* First 6 cards in their original positions */}
          {features.slice(0, 6).map((feature, idx) => (
            <motion.div
              key={idx}
              className={`bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col ${
                [0, 3].includes(idx) ? 'col-span-2 md:col-span-2 md:flex-row' : ''
              } min-h-[200px] md:min-h-[250px]`}
            >
              {idx % 2 === 0 || idx === 0 || idx === 3 ? (
                <>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className={`object-cover ${[0, 3].includes(idx) ? 'md:w-1/2 w-full h-48 md:h-full' : 'w-full h-32 md:h-40'}`} 
                  />
                  <div className={`${[0, 3].includes(idx) ? 'md:w-1/2' : ''} p-4 md:p-6 flex flex-col justify-center`}>
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-400/10 flex items-center justify-center mb-2 md:mb-4 text-orange-500">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{feature.title}</h3>
                    <p className="text-gray-300 text-xs md:text-sm line-clamp-3 min-h-[60px] md:min-h-[72px]">{feature.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-4 md:p-6 flex flex-col justify-center">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-400/10 flex items-center justify-center mb-2 md:mb-4 text-orange-500">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{feature.title}</h3>
                    <p className="text-gray-300 text-xs md:text-sm line-clamp-3 min-h-[60px] md:min-h-[72px]">{feature.description}</p>
                  </div>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-32 md:h-40 object-cover" 
                  />
                </>
              )}
            </motion.div>
          ))}
          
          {/* Last card positioned properly in the 3rd row */}
          <motion.div
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col col-span-2 md:col-span-1 min-h-[200px] md:min-h-[250px]"
          >
            <div className="p-4 md:p-6 flex flex-col justify-center">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-400/10 flex items-center justify-center mb-2 md:mb-4 text-orange-500">
                {features[6].icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{features[6].title}</h3>
              <p className="text-gray-300 text-xs md:text-sm line-clamp-3 min-h-[60px] md:min-h-[72px]">{features[6].description}</p>
            </div>
            <img 
              src={features[6].image} 
              alt={features[6].title} 
              className="w-full h-32 md:h-40 object-cover" 
            />
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <button 
            onClick={() => {
              const element = document.getElementById("MagnaticLinkedIn");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
          className="inline-block px-8 py-3 md:px-12 md:py-4 bg-orange-500 hover:bg-white text-white hover:text-orange-500 font-semibold rounded-full transition-colors duration-300">
           Get my edge
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;