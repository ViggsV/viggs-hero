

const sfx = {
  hover: new Audio('/assets/sfx/buttonrollover.wav'),
  click: new Audio('/assets/sfx/buttonclick.wav'),
  release: new Audio('/assets/sfx/buttonclickrelease.wav'),
};

function playSoundEffect(name) {
  const sound = sfx[name];
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}
// Menu button component
export default function MenuButton({ text, onClick }) {
  return (
    <button 
      className="w-64 py-3 px-6 mb-1 text-left text-gray-200 hover:text-orange-400  transition-all duration-200"
      onMouseEnter={() => playSoundEffect('hover')}
      onMouseDown={() => playSoundEffect('click')}
      onMouseUp={() => playSoundEffect('release')}
      onClick={onClick}
    >
      {text}
    </button>
  );
}