import { useState, useEffect } from "react";
import ShinyText from "../cuicui/shiny-text";
import MovingText from "../cuicui/moving-text";

export default function Title() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      

      <div className="select-none whitespace-nowrap relative flex items-center justify-center h-48 mb-12 overflow-hidden">
        <div
          className={` bottom-4
            absolute tracking-[1em] text-8xl font-bold text-white blur-xl
            transition-opacity duration-1000 ${loaded ? "opacity-40" : "opacity-0"}
          `}
          style={{
            filter: "blur(5px)",
            animation: loaded ? "slideBg 14.81s linear infinite" : "none",
          }}
        >
          <MovingText speedInMs={14810}>
          <ShinyText speedInMs={3000} randomness={3} className="w-fit">
          VIGGS VERIKAS
          </ShinyText>
          </MovingText>
        </div>

        <div
          className={`
            relative text-5xl font-bold text-white
            transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
          
        >
          <MovingText alternate speedInMs={14810}>
          <ShinyText alternate speedInMs={3000} randomness={3} className="w-fit">
          VIGGS VERIKAS
          </ShinyText>
          </MovingText>
        </div>
      </div>
    </>
  );
}
