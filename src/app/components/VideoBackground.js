// VideoBackground.jsx
//                 <VideoBackground 
//           src="https://cdn.jsdelivr.net/gh/ViggsV/files@main/full%20flow.webm" 
//          />
import React from 'react';

const VideoBackground = ({ 
  src, 
  type = 'video/webm',
  className = 'mix-blend-screen absolute inset-0 w-full h-full object-cover z-[-1] '
}) => {
  return (
    <video
      autoPlay
      loop
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

