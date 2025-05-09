import { useState, useEffect } from "react";

export default function Title() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style jsx>{`
        /* timings: 2.1, 1.21, 4.5, 2.2, 0.9, 1.3, 2.6 → total 14.81s */
        @keyframes slideBg {
          0%     { transform: translateX(-10px); }
          14.17% { transform: translateX( 10px); }
          22.35% { transform: translateX(-10px); }
          52.76% { transform: translateX( 10px); }
          67.57% { transform: translateX(-10px); }
          73.66% { transform: translateX( 10px); }
          82.45% { transform: translateX(-10px); }
          100%   { transform: translateX( 10px); }
        }
        @keyframes slideFg {
          0%     { transform: translateX(-5px); }
          14.17% { transform: translateX(  5px); }
          22.35% { transform: translateX(-5px); }
          52.76% { transform: translateX(  5px); }
          67.57% { transform: translateX(-5px); }
          73.66% { transform: translateX(  5px); }
          82.45% { transform: translateX(-5px); }
          100%   { transform: translateX(  5px); }
        }
      `}</style>

      <div className="whitespace-nowrap relative flex items-center justify-center h-48 mb-12 overflow-hidden">
        {/* Blurred background title */}
        <div
          className={`
            absolute
            tracking-[1em]
            text-8xl
            font-bold
            text-white
            blur-xl
            transition-opacity duration-1000
            ${loaded ? "opacity-40" : "opacity-0"}
          `}
          style={{
            filter: "blur(5px)",
            animation: loaded
              ? "slideBg 14.81s linear infinite"
              : "none",
          }}
        >
          VIGGS VERIKAS
        </div>

        {/* Main title */}
        <div
          className={`
            relative
            text-5xl
            font-bold
            text-white
            transition-all duration-1000
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
          style={{
            animation: loaded
              ? "slideFg 14.81s linear infinite"
              : "none",
          }}
        >
          VIGGS VERIKAS
        </div>
      </div>
    </>
  );
}
