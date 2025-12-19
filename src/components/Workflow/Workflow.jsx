import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Workflow.css";

gsap.registerPlugin(ScrollTrigger);

const Workflow = ({ items }) => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. BUAT TIMELINE YANG TERIKAT DENGAN SCROLL
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Kunci kelancaran scroll
          pin: true,
        },
      });

      // 2. TAHAP 1: MUNCULKAN JUDUL & MELEBARKAN KOTAK
      tl.to(headerRef.current, { opacity: 1, y: 0, duration: 0.5 })
        .to(containerRef.current, { width: "90%", duration: 1 }, "-=0.5")

        // 3. TAHAP 2: MEMBELAH (GIVE GAP) & MEMBULATKAN SUDUT
        .to(containerRef.current, { gap: "30px", duration: 0.5 })
        .to(cardsRef.current, { borderRadius: "30px", duration: 0.5 }, "-=0.5")

        // 4. TAHAP 3: FLIP BERGANTIAN (STAGGER) - INI RAHASIANYA
        .to(cardsRef.current, {
          rotateY: 180,
          duration: 1,
          stagger: 0.2, // Efek flip satu per satu seperti video
          ease: "power2.inOut",
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="wf-section">
      <div className="wf-sticky-container">
        <h2 ref={headerRef} className="wf-header">
          Bagaimana Cara Saya Bekerja?
        </h2>

        <div ref={containerRef} className="wf-card-wrapper">
          {items.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[i] = el)}
              className="wf-card"
            >
              {/* SISI DEPAN */}
              <div className="wf-face wf-front">
                <h3>0{i + 1}</h3>
              </div>

              {/* SISI BELAKANG */}
              <div
                className="wf-face wf-back"
                style={{ background: item.color }}
              >
                <h4 className="text-xl font-bold mb-3 text-white uppercase tracking-tighter">
                  {item.backTitle}
                </h4>
                <p className="text-center text-sm text-white/90 font-medium">
                  {item.backDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
