import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white font-sans">
  <Helmet>
  <title>Founder-Led Marketing for LinkedIn Growth & Lead Generation</title>
  <meta name="description" content="WrittenlyHub’s founder-led marketing builds authority and gets 25+ qualified leads monthly. Use founder-led marketing to turn LinkedIn into your revenue engine." />
</Helmet>


      <main className="overflow-hidden">
        {children}
      </main>
    </div>
  );
};

const SectionWrapper = ({ children, className = "" }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
};

export { Layout, SectionWrapper };
