'use client';

import { useEffect, useRef } from 'react';

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Замедляем воспроизведение для более плавного эффекта
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
        style={{ 
          filter: 'brightness(0.3) contrast(1.2)',
          transform: 'scale(1.1)' // Небольшой zoom для избежания белых краев при движении
        }}
      >
        <source src="/video-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#111113] via-transparent to-[#111113]/80" />
      <div className="absolute inset-0 bg-[#111113]/30" />
    </div>
  );
} 