import { motion } from "framer-motion";
// Use react-icons for better icons
import { FaLinkedin, FaInstagram, FaQuoteLeft } from "react-icons/fa";

const Founders = () => {
  return (
    <section className="bg-[#022150] py-24 px-4 font-montserrat">
      <div className="w-[80%] max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
            Introducing the person behind it
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mt-2 md:mt-3 mb-3 md:mb-4">
            Meet Astha - <span className="text-orange-500 ">The strategist who turns SaaS founders into industry authorities</span>
          </h2>
        </motion.div>

        {/*bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col md:flex-row items-start gap-6"
        >
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex-shrink-0 flex relative">
            <div className="absolute -top-6 -left-6 bg-orange-500 p-8 rounded-full z-10">
              <FaQuoteLeft className="text-white text-6xl" />
            </div>
            <img
              src="https://i.ibb.co/d4LzLyfg/Untitled-design-34.png"
              alt="Astha Verma"
              className="w-[94%] h-full object-cover rounded-2xl shadow-lg md:max-h-none md:h-full relative"
              style={{ minHeight: "420px" }}
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 text-white space-y-4 flex flex-col h-full">
            <div>
              <h3 className="text-orange-500 font-bold text-2xl md:text-4xl leading-snug">
                Astha Verma
              </h3>
              <h3 className="text-orange-500 font-semobild text-2xl md:text-3xl leading-snug mb-4">
                Founder-Led Marketing Specialist
              </h3>

              <p className="text-base md:text-lg font-medium leading-relaxed mb-2">
                I've sat across from brilliant founders who've built products that could change entire industries, yet their LinkedIn profiles read like everyone else's template.
              </p>
              <p className="text-base md:text-lg font-medium leading-relaxed mb-2">
                I've worked with SaaS CEOs whose solutions deliver 10x ROI to clients, but their content gets lost in the noise while inferior competitors book all the demos.
              </p>
              <p className="text-base md:text-lg font-medium leading-relaxed italic mb-2">
                Here's what I learned: Your product isn't the problem. How you talk about it is.
              </p>
              <p className="text-base md:text-lg font-medium leading-relaxed mb-2">
                I spent 4 years figuring out why some SaaS founders become industry voices while others stay invisible. The difference isn't better features - it's better positioning.
              </p>
              <p className="text-base md:text-lg font-medium leading-relaxed mb-2">
                I've helped 20+ tech founders build personal brands that generate predictable pipeline. My clients don't just get more followers - they get more qualified demos, faster deal cycles, and premium pricing power.
              </p>
              <p className="text-base md:text-lg font-medium leading-relaxed italic mb-2">
                The founders I work with don't want to become LinkedIn influencers. They want to become the obvious choice when prospects are ready to buy.
              </p>
            </div>

            <div className="mt-auto">
              <p className="text-base md:text-lg font-semibold text-orange-500 mb-4">
                Your expertise got you this far. Let me help the right people discover it.
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <a href="https://in.linkedin.com/in/astha-verma-av" target="_blank" className="text-white hover:text-orange-500 transition-colors">
                  <FaLinkedin size={28} />
                </a>
                <a href="https://www.instagram.com/wholelottaastha/" target="_blank" className="text-white hover:text-orange-500 transition-colors">
                  <FaInstagram size={28} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* CTA */}
      <div className="w-[80%] mx-auto mt-8 text-center">
        <a 
          href="https://calendly.com/asthaverma/build-your-personal-brand-with-me"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
        >
          Work with Astha
        </a>
      </div>
    </section>
  );
};

export default Founders;