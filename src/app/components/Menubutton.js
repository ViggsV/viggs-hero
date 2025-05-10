// MenuButton.jsx
import { playSoundEffect } from '../effects/soundEffects'; // adjust path if needed

export default function MenuButton({ text, onClick }) {
  return (
    <button 
      className="select-none w-64 py-3 px-6 mb-1 text-left text-gray-200 hover:text-orange-400 transition-all duration-200"
      onMouseEnter={() => playSoundEffect('hover')}
      onMouseDown={() => playSoundEffect('click')}
      onMouseUp={() => playSoundEffect('release')}
      onClick={onClick}
    >
      {text}
    </button>
  );
}