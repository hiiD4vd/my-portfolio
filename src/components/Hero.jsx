// Di file Hero.jsx
import Spline from "@splinetool/react-spline";

// Pastikan URL di bawah ini adalah URL Spline TERBARU kamu
const SPLINE_URL =
  "https://prod.spline.design/z81n-UJLOG2Ja0Dq/scene.splinecode";

export default function Hero({ id }) {
  // Menerima prop ID
  return (
    <Spline
      scene={SPLINE_URL}
      id={id} // Memasang ID dari App.jsx
      style={{ background: "transparent" }}
    />
  );
}
