"use client"

import { motion } from "framer-motion"
import { CheckCircle, Sparkles, TrendingUp, Users, Zap } from "lucide-react"

const personas = [
  {
    title: "B2B SaaS founder",
    subtitle: "Generating $25K-500K ARR with product-market fit but struggling with visibility ",
    icon: TrendingUp,
    gradient: "from-orange-500 to-orange-700",
  },
  {
    title: "Tech entrepreneur",
    subtitle: "Ready to invest $1,200/month to stop chasing every demo ",
    icon: Zap,
    gradient: "from-orange-500 to-orange-700",
  },
  {
    title: " Serial entrepreneur",
    subtitle: "Who needs LinkedIn presence that attracts partnerships and investors",
    icon: Users,
    gradient: "from-orange-500 to-orange-700",
  },
  {
    title: "Global startup founder",
    subtitle: "Who requires thought leadership to dominate markets and close strategic deals",
    icon: Sparkles,
    gradient: "from-orange-500 to-orange-700",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const cardHoverVariants = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

const WhoIsFor = () => {
  return (
    <section className="bg-[#022150] py-24 font-sans overflow-hidden relative">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-to-r from-orange-400/20 to-pink-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-gradient-to-l from-blue-500/20 to-cyan-400/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-r from-purple-500/15 to-indigo-500/15 blur-3xl"
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="w-[85%] mx-auto max-w-7xl relative z-20">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20 relative"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6"
          >
            <CheckCircle className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 font-medium text-sm uppercase tracking-widest">Who this is for</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
          >
            If you're reading this, <span className="text-orange-500"> it's probably for you</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Enhanced Personas Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {personas.map((item, i) => {
            const IconComponent = item.icon
            return (
              <motion.div key={i} variants={itemVariants} whileHover="hover" className="group relative">
                <motion.div
                  variants={cardHoverVariants}
                  className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-orange-400/30 transition-all duration-500 overflow-hidden"
                >
                  {/* Card background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Icon container */}
                  <div className="flex items-start gap-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </motion.div>

                    <div className="flex-1">
                      <motion.h3
                        className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors duration-300"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {item.title}
                      </motion.h3>
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    style={{ transform: "skewX(-20deg)" }}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <motion.a
            onClick={() => {
              const element = document.getElementById("WhyItWorks")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-12 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
          >
            This is me
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default WhoIsFor