"use client"

import { useEffect, useRef, useState } from "react"

const WhyChooseMe = () => {
  const containerRef = useRef(null)
  const cardsRef = useRef([])
  const numberRef = useRef(null)
  const progressRef = useRef(null)
  const stickyRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  const items = [
    { title: "Ultra-high-net-worth psychology expertise", desc: "I understand your world" },
    { title: "Discretion-first approach", desc: "Strategic visibility, not publicity" },
    { title: "Industry authority positioning", desc: "Become THE voice in your sector" },
    { title: "Premium opportunity pipeline", desc: "Boards, partnerships, media" },
    { title: "Complete done-for-you system", desc: "Zero time investment required" },
  ]

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    let currentIndex = 0
    const cardRotations = [-2, 1.5, -1, 2, 0.5] // subtle modern tilt

    const handleScroll = () => {
      if (!containerRef.current || !stickyRef.current) return

      const container = containerRef.current
      const sticky = stickyRef.current
      const rect = container.getBoundingClientRect()
      const totalScrollable = Math.max(1, rect.height - window.innerHeight)
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / totalScrollable))

      // progress bar (smooth) + index (step-based)
      if (progressRef.current) {
        progressRef.current.style.width = `${scrollProgress * 100}%`
      }
      const newIndex = Math.min(Math.floor(scrollProgress * items.length), items.length - 1)
      if (newIndex !== currentIndex && numberRef.current) {
        currentIndex = newIndex
        numberRef.current.textContent = String(currentIndex + 1)
      }

      // sticky positioning across the section
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        sticky.style.position = "fixed"
        sticky.style.top = "0"
        sticky.style.left = "0"
        sticky.style.right = "0"
      } else if (rect.top > 0) {
        sticky.style.position = "absolute"
        sticky.style.top = "0"
        sticky.style.left = "0"
        sticky.style.right = "0"
      } else {
        sticky.style.position = "absolute"
        sticky.style.top = "auto"
        sticky.style.bottom = "0"
        sticky.style.left = "0"
        sticky.style.right = "0"
      }

      // animate cards
      cardsRef.current.forEach((card, index) => {
        if (!card) return

        const cardProgress = Math.max(0, Math.min(1, scrollProgress * items.length - index))
        const isActive = cardProgress > 0

        if (isActive) {
          const scale = 0.96 + cardProgress * 0.04
          const opacity = Math.min(1, cardProgress * 2)
          const yOffset = (1 - cardProgress) * (isMobile ? 28 : 44)
          const rotation = isMobile ? 0 : cardRotations[index % cardRotations.length]

          card.style.transform = `translateY(${yOffset}px) scale(${scale}) rotate(${rotation}deg)`
          card.style.opacity = String(opacity)
          card.style.zIndex = String(100 + index)

          for (let i = 0; i < index; i++) {
            const prev = cardsRef.current[i]
            if (prev) {
              const stackOffset = (index - i) * (isMobile ? 4 : 8)
              const stackRotation = isMobile ? 0 : cardRotations[i % cardRotations.length]
              prev.style.transform = `translateY(${-stackOffset}px) scale(0.95) rotate(${stackRotation}deg)`
              prev.style.opacity = String(Math.max(0.3, 1 - (index - i) * 0.2))
              prev.style.zIndex = String(100 - (index - i))
            }
          }
        } else {
          const rotation = isMobile ? 0 : cardRotations[index % cardRotations.length]
          card.style.transform = `translateY(${isMobile ? 50 : 100}px) scale(0.9) rotate(${rotation}deg)`
          card.style.opacity = "0"
          card.style.zIndex = String(100 - index)
        }
      })
    }

    // initial card states
    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.transform = "translateY(100px) scale(0.9) rotate(0deg)"
        card.style.opacity = "0"
        card.style.transition = "transform 0.3s ease-out, opacity 0.3s ease-out"
        card.style.zIndex = String(100 - index)
        card.style.transformOrigin = "center center"
      }
    })

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobile, items.length])

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el)
    }
  }

  return (
    <section
      id="WhyChooseMe"
      ref={containerRef}
      className="bg-[#022150] py-12 md:py-24 font-montserrat overflow-hidden relative"
      style={{ minHeight: `${(isMobile ? 140 : 100) * items.length + 100}vh` }}
    >
      <div className="w-[90%] md:w-[80%] mx-auto max-w-7xl">
        <div
          ref={stickyRef}
          className="h-screen z-20 pointer-events-none"
          style={{ position: "absolute", top: 0, left: 0, right: 0 }}
        >
          <div className="flex h-full flex-col items-center justify-start gap-8 md:gap-12 px-4 pt-10 md:pt-16">
            <header className="w-full max-w-3xl text-center space-y-4 md:space-y-6">
              <div className="inline-flex items-center justify-center gap-2 mx-auto">
                <span className="sr-only">Section</span>
                <span className="inline-flex items-center rounded-full bg-white/10 text-orange-500 px-3 py-1 text-[10px] md:text-xs uppercase tracking-widest font-medium">
                  Why choose me
                </span>
              </div>

              <h2 className="text-pretty font-bold text-white text-3xl md:text-5xl leading-tight">
                The benefits that justify choosing <span className="text-orange-500">WrittenlyHub</span>
              </h2>

              <div className="flex items-center justify-center gap-4">
                <div className="text-orange-500 text-2xl md:text-4xl font-bold">
                  <span ref={numberRef}>1</span>
                  <span className="text-white text-lg md:text-2xl">/{items.length}</span>
                </div>
                <div className="w-full max-w-xs md:max-w-md bg-white/20 h-1 rounded-full overflow-hidden">
                  <div
                    ref={progressRef}
                    className="bg-orange-500 h-full transition-[width] duration-300 ease-out"
                    style={{ width: "0%" }}
                  />
                </div>
              </div>
            </header>

            <div className="w-full flex items-center justify-center">
              <div className="relative w-full max-w-sm md:max-w-xl h-72 md:h-96">
                {items.map((item, i) => (
                  <div
                    key={i}
                    ref={addToRefs}
                    className="absolute inset-0 will-change-transform"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <article
                      className="pointer-events-auto bg-gradient-to-br from-white via-white to-slate-50 rounded-2xl md:rounded-3xl shadow-2xl border border-white/20 w-full h-full p-6 md:p-10 flex flex-col justify-center relative overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] cursor-pointer backdrop-blur-sm"
                      aria-label={`Benefit ${i + 1}: ${item.title}`}
                      style={{ 
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 50%, rgba(248,250,252,0.95) 100%)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.3)'
                      }}
                    >
                      {/* Animated background glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-500/5 to-orange-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      {/* Top accent line */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                      
                      <div className="relative z-10">
                        <div className="flex items-start gap-4 md:gap-5 mb-4 md:mb-6">
                          <div className="relative">
                            <span className="inline-flex h-8 w-8 md:h-11 md:w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 text-white font-bold text-sm md:text-lg shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300 group-hover:scale-110">
                              {i + 1}
                            </span>
                            {/* Pulsing ring on hover */}
                            <div className="absolute inset-0 rounded-2xl bg-orange-500/30 scale-0 group-hover:scale-125 opacity-0 group-hover:opacity-60 transition-all duration-500" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-slate-900 font-bold text-lg md:text-2xl leading-tight mb-2 group-hover:text-slate-800 transition-colors duration-300">
                              {item.title}
                            </h3>
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                              {item.desc}
                            </p>
                          </div>
                        </div>

                        {/* Bottom decorative elements */}
                        <div className="flex items-center justify-between mt-6 md:mt-8">
                          <div className="flex items-center gap-2">
                            <div className="h-1 w-8 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full group-hover:w-12 transition-all duration-500" />
                            <div className="h-1 w-4 bg-orange-300 rounded-full opacity-60 group-hover:w-6 group-hover:opacity-80 transition-all duration-500 delay-75" />
                            <div className="h-1 w-2 bg-orange-200 rounded-full opacity-40 group-hover:w-3 group-hover:opacity-60 transition-all duration-500 delay-150" />
                          </div>
                          
                          {/* Floating arrow that appears on hover */}
                          <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 delay-200">
                            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Subtle pattern overlay */}
                      <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-500" 
                           style={{
                             backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)`,
                             backgroundSize: '20px 20px'
                           }} />
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`absolute ${isMobile ? "bottom-8" : "bottom-12 lg:bottom-8"} left-1/2 -translate-x-1/2 text-center pt-4 lg:pt-16 z-30`}
        >
          <button
            className="inline-block px-12 py-4 bg-orange-500 hover:bg-white text-white hover:text-orange-500 font-semibold rounded-full transition-colors duration-700 pointer-events-auto"
            onClick={() => window.open("https://calendly.com/asthaverma/build-your-personal-brand-with-me", "_blank")}
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
          >
            Book your upgrade
          </button>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseMe