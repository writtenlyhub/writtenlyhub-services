import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Helmet>
        <title>Done for You Personal Branding LinkedIn Strategy for Coaches</title>
        <meta
          name="description"
          content="WrittenlyHub's LinkedIn personal branding for coaches that delivers 15+ MQLs monthly with done-for-you content, positioning, and outreach. Book a strategy now!"
        />
      </Helmet>

      <main className="overflow-hidden">{children}</main>
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
