import type { ComponentProps, ReactNode } from "react";

const MovingText = ({
  children,
  speedInMs = 14810, // Matches your original animation duration
  className = "",
  alternate = false,
  ...props
}: {
  children: ReactNode;
  speedInMs?: number;
  alternate?: boolean;
} & ComponentProps<"div">) => {
  const animationName = alternate ? 'slideFg' : 'slideBg';
  const translateX = alternate ? '-5px, 5px' : '-10px, 10px';

  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          0%    { transform: translateX(${translateX.split(', ')[0]}); }
          14.17% { transform: translateX(${translateX.split(', ')[1]}); }
          22.35% { transform: translateX(${translateX.split(', ')[0]}); }
          52.76% { transform: translateX(${translateX.split(', ')[1]}); }
          67.57% { transform: translateX(${translateX.split(', ')[0]}); }
          73.66% { transform: translateX(${translateX.split(', ')[1]}); }
          82.45% { transform: translateX(${translateX.split(', ')[0]}); }
          100%  { transform: translateX(${translateX.split(', ')[0]}); } /* Match 0% */
        }
        `}
      </style>
      <div
        className={className}
        style={{
          animation: `${animationName} ${speedInMs / 1000}s linear infinite`,
        }}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export default MovingText;