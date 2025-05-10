import type { ComponentProps, ReactNode } from "react";
import { useEffect, useState } from "react";

const ShinyText = ({
  children,
  speedInMs = 5000,
  className = "",
  alternate = false,
  randomness = 2, // Adjust this value to control the randomness (plus or minus)
  ...props
}: {
  children: ReactNode;
  speedInMs?: number;
  alternate?: boolean;
  randomness?: number;
} & ComponentProps<"div">) => {
  const [keyframes, setKeyframes] = useState("");

  useEffect(() => {
    const generateRandomOffset = () => Math.floor(Math.random() * (randomness * 2 + 1)) - randomness;

    const generateKeyframes = (name: string) => {
      const steps = [
        { time: 0, brightness: 1 },
        { time: alternate ? 5 : 10, brightness: alternate ? 1.8 : 2 },
        { time: alternate ? 7 : 15, brightness: 1 },
        { time: 55, brightness: alternate ? 2.5 : 3 },
        { time: alternate ? 57 : 56, brightness: 1 },
        { time: 80, brightness: alternate ? 2 : 1.8 },
        { time: alternate ? 89 : 88, brightness: 1 },
        { time: 100, brightness: 1 },
      ];

      return steps.map(({ time, brightness }, index) => {
        const randomOffset = index > 0 && index < steps.length - 1 ? generateRandomOffset() : 0;
        const newTime = Math.max(0, Math.min(100, time + randomOffset)); // Keep within 0-100%
        return `${newTime}% { filter: brightness(${brightness}); }`;
      }).join("\n");
    };

    const primaryKeyframes = generateKeyframes("shineFlicker");
    const altKeyframes = generateKeyframes("shineFlickerAlt");

    setKeyframes(`
      @keyframes shineFlicker {
        ${primaryKeyframes}
      }
      @keyframes shineFlickerAlt {
        ${altKeyframes}
      }
    `);
  }, [alternate, randomness]);

  return (
    <>
      <style>
        {keyframes}
      </style>
      <div
        className={
          `inline-block bg-clip-text text-transparent ` +
          `bg-linear-to-r from-55% via-50% to-65% ` +
          `from-neutral-400 via-neutral-950 to-neutral-400 ` +
          `dark:from-neutral-500 dark:via-neutral-50 dark:to-neutral-500 ` +
          className
        }
        style={{
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          animation: `${alternate ? 'shineFlickerAlt' : 'shineFlicker'} ${speedInMs}ms steps(1,end) infinite`,
        }}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export default ShinyText;