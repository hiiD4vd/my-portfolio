import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplashCursor from "../SplashCursor/SplashCursor";
import Footer from "../Footer";
import ScrollFloat from "../ScrollFloat/ScrollFloat"; // PERBAIKAN: Gunakan ../ bukan ./
import ShinyText from "../ShinyText/ShinyText";
import "./EndSection.css";

gsap.registerPlugin(ScrollTrigger);

const EndSection = () => {
  const triggerRef = useRef(null);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline untuk memunculkan latar belakang hitam (Reveal)
      gsap.fromTo(
        containerRef.current,
        { yPercent: 100 },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top bottom",
            end: "top top", // Selesai naik saat trigger sampai di atas layar
            scrub: true,
          },
        }
      );

      // Memunculkan konten di dalamnya secara perlahan
      gsap.to(contentRef.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top center",
          end: "top top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={triggerRef} className="end-section-trigger">
      <section ref={containerRef} className="end-section-full overflow-hidden">
        <SplashCursor
          BACK_COLOR={{ r: 0, g: 0, b: 0 }}
          DENSITY_DISSIPATION={3}
        />

        <div
          ref={contentRef}
          className="end-inner-content relative z-10 flex flex-col items-center justify-center h-full px-6 opacity-0"
        >
          {/* Animasi ScrollFloat untuk Judul */}
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="top center" // Animasi dimulai saat teks di tengah layar
            scrollEnd="bottom top"
            stagger={0.03}
            textClassName="text-white font-black text-[clamp(2rem,5vw,4rem)]"
          >
            Don't be a stranger, say hello!
          </ScrollFloat>

          {/* Animasi ScrollFloat untuk Sub-judul */}
          <ScrollFloat
            animationDuration={1.2}
            ease="power3.out"
            scrollStart="top center+=10%"
            scrollEnd="bottom top"
            stagger={0.01}
            containerClassName="mt-4"
            textClassName="text-zinc-400 font-medium text-lg md:text-xl max-w-2xl"
          >
            Got a quick question? Jump into my Chat Room and let's talk in
            real-time!
          </ScrollFloat>

          <button
            onClick={scrollToContact}
            className="mt-10 font-semibold bg-[#1a1a1a] p-4 px-10 rounded-full border border-gray-700 hover:bg-[#222] transition-all transform hover:scale-105 active:scale-95 cursor-pointer relative z-50"
          >
            <ShinyText text="Say Hello" disabled={false} speed={3} />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full z-20">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default EndSection;
