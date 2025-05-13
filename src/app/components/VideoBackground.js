'use client';

import React, { useEffect, useRef, useState } from 'react';

const VideoBackground = ({
  src,
  type = 'video/webm',
  loopStart = 24,   // Start of the final loop segment (in seconds)
  loopEnd = 30,     // End of the final loop segment (in seconds)
  className = 'blur-xs md:blur-none mix-blend-screen absolute inset-0 w-full h-full object-cover z-[-1]',
}) => {
  const videoRef = useRef(null);
  const [hasLooped, setHasLooped] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (hasLooped && video.currentTime >= loopEnd) {
        video.currentTime = loopStart;
      } else if (!hasLooped && video.currentTime >= loopEnd) {
        setHasLooped(true);
        video.currentTime = loopStart;
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, [hasLooped, loopStart, loopEnd]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      className={className}
    >
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBackground;
