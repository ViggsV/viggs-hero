import { useState, useEffect } from 'react'; 
 
 // Main title component with animation
 function Title() {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
  }, []);
  
  return (
    <div className="whitespace-nowrap relative flex items-center justify-center h-48 mb-12">
      {/* Blurred background title */}
      <div className={`absolute tracking-[1em] text-8xl font-bold text-white blur-xl transition-opacity duration-1000 ${loaded ? 'opacity-40' : 'opacity-0'}`} style={{filter: 'blur(5px)'}}>
        VIGGS VERIKAS
      </div>
      
      {/* Main title with animation */}
      <div className={`relative text-5xl font-bold text-white transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        VIGGS VERIKAS
      </div>
    </div>
  );
}

export default Title;