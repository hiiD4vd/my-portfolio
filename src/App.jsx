import { useRef, useState, useEffect } from "react";
import Lenis from "lenis"; // Pastikan sudah install: npm install lenis
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek, listSertifikat } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Aurora from "./components/Aurora/Aurora";
import AOS from "aos";
import ChatRoom from "./components/ChatRoom";
import PreLoader from "./components/PreLoader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EndSection from "./components/EndSection/EndSection";
import Workflow from "./components/Workflow/Workflow";
import { listWorkflow } from "./data";
import ScrollStack, {
  ScrollStackItem,
} from "./components/ScrollStack/ScrollStack";
import "aos/dist/aos.css";
import "animate.css";

// PERBAIKAN: Sesuai catatan di file aslimu agar tidak error
import Hero from "./components/hero";

AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAppReady, setIsAppReady] = useState(false);

  // 1. INISIALISASI LENIS GLOBAL (UNTUK KEMULUSAN SCROLL SELURUH HALAMAN)
  useEffect(() => {
    if (!isAppReady) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isAppReady]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* 1. PreLoader */}
      <PreLoader onComplete={() => setIsAppReady(true)} />

      {/* 2. KONTEN UTAMA */}
      {isAppReady && (
        <div className="relative w-full min-h-screen text-white overflow-x-hidden animate__animated animate__fadeIn">
          <Navbar />

          {/* Background Aurora */}
          <div className="fixed top-0 left-0 w-full h-full -z-10">
            <Aurora
              colorStops={["#577870", "#1F97A6", "#127B99"]}
              blend={0.5}
              amplitude={1.0}
              speed={0.5}
            />
          </div>

          {/* SEKSI 1: HERO ROBOT */}
          <section className="w-full h-screen relative overflow-hidden bg-transparent flex items-center justify-center">
            <div className="absolute z-20 w-full px-4 text-center pointer-events-none top-1/2 -translate-y-1/2 transform">
              <h1 className="text-white text-[12vw] md:text-[10vw] font-black tracking-tighter uppercase leading-none mb-4 whitespace-nowrap drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                Creative Tech
              </h1>
              <div className="mx-auto max-w-5xl px-4 pointer-events-auto">
                <BlurText
                  text="Bridging the gap between Large Language Models and human-centric design. I transform robust logic into seamless digital experiences that work as beautifully as they look."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-white text-lg md:text-2xl font-medium leading-relaxed drop-shadow-[0_5px_10px_rgba(0,0,0,1)] justify-center block"
                />
              </div>
            </div>
            {/* Robot Spline */}
            <div className="absolute inset-0 z-10 w-full h-full pointer-events-auto">
              <Hero id="maheza-spline-hero" />
            </div>
          </section>

          {/* KONTEN UTAMA */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-30">
            {/* --- INTRO SECTION --- */}
            <div className="hero grid md:grid-cols-2 items-center pt-32 xl:gap-0 gap-6 grid-cols-1">
              <div className="animate__animated animate__fadeInUp animate__delay-1s">
                <h1 className="text-5xl font-bold mb-6">
                  <ShinyText
                    text="Hi I'm Maheza Daud Abu Bakar"
                    disabled={false}
                    speed={3}
                    className="custom-class"
                  />
                </h1>
                <BlurText
                  text="A passionate AI-driven developer specialized in building intelligent applications. I focus on LLM integration, Flutter mobile apps, and robust backend systems to transform complex logic into seamless digital experiences."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="mb-6 text-gray-300 text-lg leading-relaxed block"
                />
                <div className="flex items-center sm:gap-4 gap-2 flex-wrap">
                  <a
                    href="./assets/CV.pdf"
                    download="Maheza_Daud_CV.pdf"
                    className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
                  >
                    <ShinyText text="Download CV" disabled={false} speed={3} />
                  </a>
                  <a
                    href="#project"
                    className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
                  >
                    <ShinyText
                      text="Explore My Projects"
                      disabled={false}
                      speed={3}
                    />
                  </a>
                </div>
              </div>
              <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-1s w-full flex justify-center md:justify-end">
                <ProfileCard
                  handle="Daud"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl="./assets/daud.png"
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => console.log("Contact clicked")}
                />
              </div>
            </div>

            {/* --- ABOUT ME --- */}
            <div
              ref={aboutRef}
              className={`mt-40 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6`}
              id="about"
            >
              <div
                className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-4 md:px-8"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30 pb-8 md:pb-0">
                  <div className="flex-1 text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                      About Me
                    </h2>
                    <div className="text-base md:text-lg leading-relaxed mb-10 text-gray-300">
                      <BlurText
                        text="I am Maheza Daud Abu Bakar, a Software Engineering student specialized in LLM integration and intelligent application development. By merging technical logic in Python and Flutter with my experience as a Content Strategist, I build digital solutions that are both smart and human-centric. Highly disciplined and solution-oriented, I am committed to transforming complex algorithms into seamless, high-impact experiences."
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="inline"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                      <div>
                        <h1 className="text-3xl md:text-4xl mb-1 font-bold">
                          5<span className="text-violet-500">+</span>
                        </h1>
                        <p>Project Finished</p>
                      </div>
                      <div>
                        <h1 className="text-3xl md:text-4xl mb-1 font-bold">
                          2<span className="text-violet-500">+</span>
                        </h1>
                        <p>Years of Experience</p>
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="600"
                        data-aos-once="true"
                      >
                        <h1 className="text-3xl md:text-4xl mb-1 font-bold">
                          3.77<span className="text-violet-500">/4.00</span>
                        </h1>
                        <p>GPA</p>
                      </div>
                    </div>
                    <ShinyText
                      text="Working with heart, creating with mind."
                      disabled={false}
                      speed={3}
                      className="text-sm md:text-base text-violet-400 mt-4 block"
                    />
                  </div>
                </div>

                <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
                  <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
                </div>
              </div>
            </div>

            {/* --- TOOLS SECTION --- */}
            <div className="tools mt-32">
              <h1
                className="text-4xl font-bold mb-4 text-center md:text-left"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Tools & Technologies
              </h1>
              <p
                className="w-full md:w-2/5 text-base/loose opacity-50 mb-10 text-center md:text-left"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-once="true"
              >
                My Profesional Skills
              </p>
              <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {listTools.map((tool) => (
                  <div
                    key={tool.id}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={tool.dad}
                    data-aos-once="true"
                    className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
                  >
                    <img
                      src={tool.gambar}
                      alt="Tools Image"
                      className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg"
                    />
                    <div className="flex flex-col overflow-hidden">
                      <div className="truncate">
                        <ShinyText
                          text={tool.nama}
                          disabled={false}
                          speed={3}
                          className="text-lg font-semibold block"
                        />
                      </div>
                      <p className="text-sm text-zinc-400 truncate">
                        {tool.ket}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- PROJECT SECTION --- */}
            <div className="proyek mt-32 py-10" id="project">
              <h1
                className="text-center text-4xl font-bold mb-2"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Project
              </h1>
              <p
                className="text-base/loose text-center opacity-50 mb-14 max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-once="true"
              >
                Showcasing a selection of projects that reflect my skills and
                passion.
              </p>
              <div className="proyek-box mt-14">
                <ChromaGrid
                  items={listProyek}
                  onItemClick={handleProjectClick}
                  radius={500}
                />
              </div>
            </div>

            {/* --- CONTACT SECTION --- */}
            <div className="kontak mt-32 sm:p-10 p-0 mb-20" id="contact">
              <h1
                className="text-4xl mb-2 font-bold text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Contact & Chat
              </h1>
              <div className="flex flex-col md:flex-row gap-8 mt-10">
                <div
                  className="flex-1 bg-zinc-800 p-6 rounded-md"
                  data-aos="fade-up"
                >
                  <ChatRoom />
                </div>
                <div className="flex-1" data-aos="fade-up">
                  <form
                    action="https://formsubmit.co/mahezadaudabubakar@gmail.com"
                    method="POST"
                    className="bg-zinc-800 p-10 w-full rounded-md"
                    autoComplete="off"
                  >
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="font-semibold text-white">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="Name"
                          placeholder="Input Name..."
                          className="border border-zinc-500 p-2 rounded-md bg-zinc-700 text-white"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-semibold text-white">
                          Email
                        </label>
                        <input
                          type="email"
                          name="Email"
                          placeholder="Input Email..."
                          className="border border-zinc-500 p-2 rounded-md bg-zinc-700 text-white"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-semibold text-white">
                          Message
                        </label>
                        <textarea
                          name="message"
                          rows="7"
                          placeholder="Message..."
                          className="border border-zinc-500 p-2 rounded-md bg-zinc-700 text-white"
                          required
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full border border-gray-700 hover:bg-[#222]"
                      >
                        <ShinyText text="Send" speed={3} />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* --- SEKSI SERTIFIKAT: HANYA GAMBAR (IDENTIK DENGAN VIDEO REFERENSI) --- */}
            <section className="mt-48 relative" id="certificates">
              <h1
                className="text-5xl font-bold text-center mb-24"
                data-aos="fade-up"
              >
                My Certificates
              </h1>

              {/* pb-[150vh] sangat penting agar pinning tumpukan punya ruang gerak yang luas */}
              <div className="pb-[10vh]">
                <ScrollStack
                  useWindowScroll={true}
                  stackPosition="10%" // Titik gambar berhenti (10% dari atas layar)
                  itemDistance={750} // Jarak scroll antar gambar (buat besar agar sangat smooth)
                  itemStackDistance={30} // Jarak tumpukan antar gambar saat sudah menumpuk
                  baseScale={0.75} // Ukuran gambar yang ada di bawah tumpukan
                  itemScale={0.06} // Perubahan skala tiap tumpukan
                  blurAmount={4} // Efek blur pada gambar yang tertutup (seperti di video)
                >
                  {listSertifikat.map((cert, index) => (
                    <ScrollStackItem key={cert.id}>
                      {/* LANGSUNG GAMBAR TANPA BOX APAPUN SESUAI REQUEST ANDA */}
                      <div className="w-full flex justify-center">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full max-w-[850px] mx-auto block rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.9)] border border-white/5"
                          style={{ zIndex: index }}
                        />
                      </div>
                    </ScrollStackItem>
                  ))}
                </ScrollStack>
              </div>
            </section>
          </main>
          <EndSection />
        </div>
      )}

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
}

export default App;
