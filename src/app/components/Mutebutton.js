'use client';
import { useState, useEffect } from 'react';
import { Howler } from 'howler';

export default function MuteButton() {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Load initial mute state from localStorage
    const storedMute = localStorage.getItem('mute');
    const muteState = storedMute === 'true';
    setIsMuted(muteState);
    Howler.mute(muteState);
  }, []);

  const toggleMute = () => {
    const newMuteState = !isMuted;
    setIsMuted(newMuteState);
    Howler.mute(newMuteState);
    localStorage.setItem('mute', newMuteState); // Persist setting
  };

  return (
    <div>
      <button
        onClick={toggleMute}
        className="select-none fixed bottom-4 left-4 px-3 py-1 text-sm border border-white rounded hover:bg-white hover:text-black transition-all duration-200 z-50"
      >
        {isMuted ? 'Unmute' : 'Mute'}
      </button>
    </div>
  );
}
