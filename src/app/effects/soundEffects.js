// soundEffects.js
import { Howl } from 'howler';

class SoundPool {
  constructor(src, options = {}) {
    this.sounds = [];
    this.nextIndex = 0;
    this.poolSize = options.poolSize || 3;
    
    // Create a pool of sound instances
    for (let i = 0; i < this.poolSize; i++) {
      this.sounds.push(
        new Howl({
          src: [src],
          volume: options.volume || 1.0,
          rate: options.rate || 1.0,
          preload: true,
          html5: true // This can help with mobile playback
        })
      );
    }
  }

  play() {
    // Get the next sound in the pool
    const sound = this.sounds[this.nextIndex];
    
    // Move to the next sound for the next call
    this.nextIndex = (this.nextIndex + 1) % this.poolSize;
    
    // If the sound is already playing, that's okay - we're using another instance
    sound.play();
    
    return sound;
  }
}

// Create sound pools for each effect
const sfx = {
  hover: new SoundPool('https://cdn.jsdelivr.net/gh/ViggsV/audio@main/buttonrollover.mp3', {
    volume: 0.8,
    poolSize: 4 // Allow 4 simultaneous hover sounds
  }),
  click: new SoundPool('https://cdn.jsdelivr.net/gh/ViggsV/audio@main/buttonclick.mp3', {
    volume: 1.0
  }),
  release: new SoundPool('https://cdn.jsdelivr.net/gh/ViggsV/audio@main/buttonclickrelease.mp3', {
    volume: 1.0
  })
};

// Add debounce functionality for hover sounds
let lastHoverTime = 0;
const hoverCooldown = 70; // Milliseconds between allowed hover sounds

export function playSoundEffect(name) {
  if (name === 'hover') {
    // Debounce hover sounds
    const now = Date.now();
    if (now - lastHoverTime < hoverCooldown) {
      return; // Skip if we played too recently
    }
    lastHoverTime = now;
  }
  
  const soundPool = sfx[name];
  if (soundPool) {
    soundPool.play();
  }
}

// Optional: Preload all sounds when the module imports
Object.values(sfx).forEach(soundPool => {
  // Each pool is already preloaded
});