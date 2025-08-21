import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white font-sans ">
      <Helmet>
        <title>WrittenlyHub | CMO-as-a-Service for B2B SaaS Growth</title>
        <meta name="description" content="Why waste months building a marketing team? With WrittenlyHub CMO-as-a-Service, get a plug-and-play marketing partner scaling revenue 40% faster, 70% cheaper." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* You can add more SEO tags or social previews if needed */}
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
