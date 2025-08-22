import { motion } from "framer-motion";
import { FiClock } from "react-icons/fi";

const CMOCloser = () => {
  const profileImages = [
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/women/68.jpg',
    'https://randomuser.me/api/portraits/men/75.jpg'
  ];

  return (
    <section className="bg-[#022150] py-12 md:py-20 px-6 font-montserrat">
      <div className="w-full max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          <h3 className="text-orange-500 font-bold text-3xl md:text-5xl mb-6">
            Your tech deserves marketing that actually gets it
          </h3>

          <p className="text-white text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
            Your EV tech could dominate fleets 
          </p>
          <p className="text-white text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
            While you're explaining why your battery chemistry matters, competitors are closing pilot programs.
          </p>
          <p className="text-white text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
          Don't let better positioning beat better technology. 
          <br />
          We have 2 automotive client spots opening this quarter.  
          </p>
          <div className="flex flex-col items-center">
            <div className="relative inline-block">
              <a
                href="https://outlook.office.com/book/G7dffb8790bab4b95b7e8fd20179d2514@writtenlyhub.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
              >
                <span className="flex items-center">
                  Claim yours
                  <div className="ml-3 flex -space-x-2">
                    {profileImages.slice(0, 3).map((img, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                        viewport={{ once: true }}
                        className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border-2 border-white/30 overflow-hidden"
                        style={{ zIndex: 10 - index }}
                      >
                        <img 
                          src={img} 
                          alt="Happy customer"
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </span>
              </a>
            </div>
          </div>

          <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 mt-2"
            >
              <FiClock className="text-orange-500 text-xl animate-pulse" />
              <p className="text-white text-lg md:text-xl font-medium">
                Only <span className="text-orange-500 font-bold">3 spots</span> left this quarter
              </p>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CMOCloser;