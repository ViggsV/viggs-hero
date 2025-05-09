"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

// Prevent SSR for video to avoid hydration issues
const VideoComponent = dynamic(() => Promise.resolve(({ videoRef, className }) => (
  <video
    ref={videoRef}
    className={className}
    autoPlay
    muted
    playsInline
    preload="auto"
  >
    <source src="/splash.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
)), { ssr: false });

export default function SplashScreen() {
  const [showImage, setShowImage] = useState(false);
  const [showClickToContinue, setShowClickToContinue] = useState(false);
  const videoRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const video = videoRef.current;

    // Handle video end event
    const handleVideoEnd = () => {
      setShowImage(true);
      setShowClickToContinue(true);
    };

    // Ensure video plays automatically
    if (video) {
      video.play().catch((error) => {
        console.error("Video autoplay failed:", error);
      });
      video.addEventListener('ended', handleVideoEnd);
    }

    // Fallback timer for 7-second video
    const timer = setTimeout(() => {
      setShowImage(true);
      setShowClickToContinue(true);
    }, 7000);

    return () => {
      if (video) {
        video.removeEventListener('ended', handleVideoEnd);
      }
      clearTimeout(timer);
    };
  }, []);

  const handleContinueClick = (e) => {
    e.preventDefault(); // Prevent default browser behavior
    router.push('/home'); // Navigate to /home
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center z-50 cursor-pointer"
      onClick={handleContinueClick}

    >
      <div className="relative w-[80vw] max-w-[800px] aspect-[4/3]">
        {/* Video */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${showImage ? 'opacity-0' : 'opacity-100'}`}>
          <VideoComponent
            videoRef={videoRef}
            className="w-full h-full"
          />
        </div>
        {/* Image */}
        <div className={`absolute inset-0  ${showImage ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            src="/img2.png"
            alt="Loading Complete"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
      {showClickToContinue && (
        <button
          className="absolute bottom-5 text-white text-xl animate-pulse bg-transparent border-none cursor-pointer"
          onClick={handleContinueClick}
       
        >
          Click to Continue
        </button>
      )}
    </div>
  );
}