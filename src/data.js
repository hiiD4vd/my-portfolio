import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

// --- BAGIAN TOOLS (SAYA PERTAHANKAN, INI UDAH BAGUS) ---
import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/css.jpg";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/capcut.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/python.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/flutter.jpg";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/llm.png";
import Tools15 from "/assets/tools/blender.png";
import Tools16 from "/assets/tools/ppt.png";
import Tools17 from "/assets/tools/php.png";
import Tools18 from "/assets/tools/html.jpg";
import Tools19 from "/assets/tools/mysql.png";

export const listTools = [
  {
    id: 12,
    gambar: Tools12,
    nama: "Flutter/Dart",
    ket: "Mobile Dev",
    dad: "500",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "PHP (Laravel)",
    ket: "Backend",
    dad: "700",
  },
  { id: 19, gambar: Tools19, nama: "MySQL", ket: "Database", dad: "800" },
  { id: 6, gambar: Tools6, nama: "Javascript", ket: "Language", dad: "600" },
  {
    id: 4,
    gambar: Tools14,
    nama: "LLM & AI",
    ket: "Generative AI & LLM Integration",
    dad: "1100",
  },
  { id: 14, gambar: Tools9, nama: "Python", ket: "CSS Framework", dad: "500" },
  { id: 18, gambar: Tools18, nama: "HTML5", ket: "Structure Web", dad: "200" },
  { id: 3, gambar: Tools3, nama: "CSS3", ket: "Styling Web", dad: "300" },
  { id: 2, gambar: Tools2, nama: "React JS", ket: "Framework", dad: "300" },
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  { id: 8, gambar: Tools8, nama: "Github", ket: "Repository", dad: "900" },
  // Saya naikkan Vite

  { id: 11, gambar: Tools11, nama: "Figma", ket: "Design Tool", dad: "400" },
  // Ganti Kotlin jadi Flutter kalau ada logonya, kalau gak ada biarin dulu

  // { id: 10, gambar: Tools10, nama: "Canva", ket: "Design App", dad: "1000" },

  { id: 5, gambar: Tools15, nama: "Blender", ket: "3D Modelling", dad: "1200" },
  {
    id: 7,
    gambar: Tools16,
    nama: "PowerPoint",
    ket: "Presentation Design",
    dad: "1300",
  },
  { id: 9, gambar: Tools7, nama: "CapCut", ket: "Video Editing", dad: "1400" },

  // ... Sisanya biarkan atau hapus jika tidak dipakai
];

// --- BAGIAN PROJECT (INI YANG KITA UBAH TOTAL) ---

// Pastikan nama file gambarnya sesuai dengan yang kamu simpan di folder assets/proyek/
import Proyek1 from "/assets/proyek/bantuin.png";
import Proyek2 from "/assets/proyek/youtube.png";
import Proyek3 from "/assets/proyek/web.png";
import Proyek4 from "/assets/proyek/llm.png";
import SudahPintar from "/assets/proyek/sudahpintar.png";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "Bantu-in App",
    subtitle: "Cross-platform mobile application built with Flutter & Dart...",
    fullDescription:
      "A comprehensive mobile application developed using Flutter and Dart, designed to assist users with daily productivity tasks. The project implements intuitive UI/UX design, utilizes Git for strict version control, and underwent rigorous Integration Testing to ensure stability. This app showcases my ability to build full-stack mobile solutions from concept to deployment.",
    borderColor: "#3B82F6", // Warna Biru (Flutter)
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "", // GANTI dengan link github kamu
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "Tech Content Strategy",
    subtitle: "Growing a YouTube channel from zero to monetization...",
    fullDescription:
      "A strategic content creation project focusing on technology and education. By leveraging SEO (Search Engine Optimization), data analytics, and high-retention video editing techniques, I successfully grew the channel to achieve Monetization status. This project demonstrates my skills in digital marketing, visual storytelling, and audience analysis.",
    borderColor: "#EF4444", // Warna Merah (YouTube)
    gradient: "linear-gradient(180deg, #EF4444, #000)",
    url: "", // GANTI dengan link channel youtube kamu
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Creative Web Portfolio",
    subtitle:
      "Modern portfolio website built with React, Vite, and 3D Elements...",
    fullDescription:
      "An interactive personal website designed to showcase my 'Hybrid' skill set (Engineering + Creative). Built with the speed of Vite and the modularity of React.js, featuring 3D interactive elements and responsive design. This project serves as a live demonstration of my frontend development capabilities.",
    borderColor: "#10B981", // Warna Hijau (Vite/Node)
    gradient: "linear-gradient(145deg, #10B981, #000)",
    url: "https://github.com/mahezadaud/portofolio", // GANTI dengan link repo portofolio ini
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Y-CGC: AI-Powered YouTube Content Strategy",
    subtitle:
      "AI-driven system using Gemini AI and Stacking Ensemble to detect high-value YouTube content gaps....",
    fullDescription:
      "Developed a Decision Support System integrating Gemini AI for semantic topic clustering and a Stacking Ensemble Classifier to predict video virality with 85.4% accuracy. Implemented multimodal analysis combining NLP (TF-IDF) and Computer Vision (OCR) to identify high-value content gaps.",
    borderColor: "#FFFFFF", // Warna Hijau (Vite/Node)
    gradient: "linear-gradient(145deg, #FFFFFF, #000)",
    url: "", // GANTI dengan link repo portofolio ini
    dad: "300",
  },
  {
    id: 5, // Sesuaikan urutan ID proyekmu
    image: SudahPintar, // Pastikan variabel image ini sudah di-import
    title: "Sudah Pintar: Integrated POS & Financial Management System",
    subtitle:
      "A comprehensive Point of Sale (POS) solution featuring real-time transaction tracking, financial reporting, and soft-delete data recovery.",
    fullDescription:
      "Developed a robust web-based POS system designed to streamline business operations. Key features include a dynamic financial reporting dashboard with automated profit/loss calculation, product and category management, and a secure 'soft-delete' mechanism for data auditing. Integrated with a mobile-responsive interface for instant digital receipt sharing via WhatsApp and Email.",
    borderColor: "#2EB38B", // Warna Hijau sesuai UI (Sudah Pintar Green)
    gradient: "linear-gradient(145deg, #2EB38B, #1A6B53)",
    url: "", // Masukkan link repo GitHub atau demo aplikasi di sini
    dad: "300",
  },
];

import SertifAI from "/assets/sertifikat/dasarAI.jpg";
import SertifWeb from "/assets/sertifikat/dasarweb.jpg";
import SertifData from "/assets/sertifikat/datas.jpg";
import sertifinancial from "/assets/sertifikat/financial.jpg";
import sertifinancial2 from "/assets/sertifikat/financial2.jpg";
import sertiffundamentaldata from "/assets/sertifikat/fundamentaldata.jpg";
import sertifgenai from "/assets/sertifikat/GenAI.jpg";
import sertifquran from "/assets/sertifikat/hafalan quran.jpg";
import sertifml from "/assets/sertifikat/ML.jpg";
import sertifprompt from "/assets/sertifikat/promptengineer.jpg";
import sertifpython from "/assets/sertifikat/python.jpg";
import sertifvisualdata from "/assets/sertifikat/visualisasidata.jpg";

// Tambahkan di src/data.js
export const listSertifikat = [
  {
    id: 1,
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    image: "./assets/sertifikat/dasarAI.jpg", // Ganti dengan path gambarmu
    date: "2025",
  },
  {
    id: 2,
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    image: "./assets/sertifikat/dasarweb.jpg",
    date: "2025",
  },
  {
    id: 3,
    title: "Belajar Penerapan Data Science",
    issuer: "Dicoding Indonesia",
    image: "./assets/sertifikat/datas.jpg",
    date: "2025",
  },
  {
    id: 4,
    title: "Financial Literacy",
    issuer: "Dicoding Indonesia",
    image: "./assets/sertifikat/financial.jpg",
    date: "2025",
  },
  {
    id: 5,
    title: "Financial Technology",
    issuer: "Dicoding Indonesia",
    image: "./assets/sertifikat/financial2.jpg",
    date: "2025",
  },
  {
    id: 6,
    title: "Fundamental Pemrosesan Data",
    issuer: "Dicoding Indonesia",
    image: "./assets/sertifikat/fundamentaldata.jpg",
    date: "2025",
  },
  {
    id: 7,
    title: "Membangun Aplikasi GenAI",
    issuer: "Dicoding Indonesia",
    image: "./assets/sertifikat/GenAI.jpg",
    date: "2025",
  },
  {
    id: 8,
    title: "Hafalan Quran 15 Juz",
    issuer: "Sekolah Pemimpin",
    image: "./assets/sertifikat/hafalan quran.jpg",
    date: "2025",
  },
  {
    id: 9,
    title: "Machine Learning Fundamental",
    issuer: "Dicoding Indonesia",
    image: "./assets/sertifikat/ML.jpg",
    date: "2025",
  },
  {
    id: 10,
    title: "Prompt Engineering",
    issuer: "Dicoding Indonesia",
    image: "./assets/sertifikat/promptengineer.jpg",
    date: "2025",
  },
  {
    id: 11,
    title: "Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    image: "./assets/sertifikat/python.jpg",
    date: "2025",
  },
  {
    id: 12,
    title: "Dasar Visualisasi Data",
    issuer: "Dicoding Indonesia",
    image: "./assets/sertifikat/visualisasidata.jpg",
    date: "2025",
  },

  // Tambahkan yang lainnya...
];


// Tambahkan di src/data.js
export const listWorkflow = [
  {
    id: 1,
    frontTitle: "01. ANALYZE",
    backTitle: "Research & Strategy",
    backDesc: "Membedah masalah, menganalisis audiens, dan merancang arsitektur sistem yang paling efisien.",
    color: "linear-gradient(135deg, #1e1b4b, #312e81)" // Indigo Deep
  },
  {
    id: 2,
    frontTitle: "02. SOLVE",
    backTitle: "Logic & Development",
    backDesc: "Mentransformasi strategi menjadi kode nyata menggunakan Python, Flutter, dan integrasi AI/LLM.",
    color: "linear-gradient(135deg, #4c1d95, #6d28d9)" // Violet Deep
  },
  {
    id: 3,
    frontTitle: "03. POLISH",
    backTitle: "UX & Optimization",
    backDesc: "Memastikan performa maksimal dan pengalaman pengguna yang mulus sebelum produk diluncurkan.",
    color: "linear-gradient(135deg, #064e3b, #065f46)" // Emerald Deep
  }
];