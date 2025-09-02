import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white font-sans">
  <Helmet>
  <title>Personal Branding for Tech & SaaS Founders: Gain 15+ Demos</title>
  <meta name="description" content="WrittenlyHub’s personal branding for tech and SaaS founders delivers 30+ qualified demos monthly. Spend less, build more authority, and grow faster on LinkedIn." />
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
