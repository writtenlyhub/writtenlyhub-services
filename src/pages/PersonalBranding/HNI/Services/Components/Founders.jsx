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
            Meet the <span className="text-orange-500 ">strategist behind your <br /> industry influence</span>
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
                I'm the personal branding specialist who understands wealth psychology. 
              </p>
              <p className="text-base md:text-lg font-medium leading-relaxed mb-2">
                I've worked with CEOs who run billion-dollar companies but struggle to articulate their strategic vision publicly. I've helped family office principals who make industry-shaping investments but remain invisible to the media who should be quoting them. 
              </p>
              <p className="text-base md:text-lg font-medium leading-relaxed italic mb-2">
               Here's what I learned: Successful leaders don't lack expertise - they lack strategic positioning. 
              </p>
              <p className="text-base md:text-lg font-medium leading-relaxed mb-2">
                I spent 6 years figuring out how to transform private success into public authority without compromising discretion. The difference between leaders who get quoted and those who stay quiet isn't intelligence - it's intentional influence building. 
              </p>
              <p className="text-base md:text-lg font-medium leading-relaxed mb-2">
                I work with a maximum of 7 high-net-worth clients annually because this level of strategic positioning requires dedicated focus. 
              </p>
              <p className="text-base md:text-lg font-medium leading-relaxed italic mb-2">
                My clients don't want to become social media influencers. They want to become the industry authorities they already are - just with the recognition that matches their expertise. 
              </p>
            </div>

            <div className="mt-auto">
              <p className="text-base md:text-lg font-semibold text-orange-500 mb-4">
               Your success speaks for itself. Let me help the right people hear it.
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