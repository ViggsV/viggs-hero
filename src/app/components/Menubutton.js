// MenuButton.jsx
import { forwardRef } from 'react';
import { playSoundEffect } from '../effects/soundEffects';

const MenuButton = forwardRef(({ text, onClick }, ref) => {
  return (
    <button 
      ref={ref}
      className="select-none w-64 py-3 px-6 mb-1 text-left text-gray-200 hover:text-orange-400 transition-all duration-200"
      onMouseEnter={() => playSoundEffect('hover')}
      onMouseDown={() => playSoundEffect('click')}
      onMouseUp={() => playSoundEffect('release')}
      onClick={onClick}
    >
      {text}
    </button>
  );
});

export default MenuButton;