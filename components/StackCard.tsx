"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

export default function StackCard({
  i,
  title,
  description,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  description: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-0 h-screen flex items-center justify-center">
      <motion.div
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();

          e.currentTarget.style.setProperty(
            "--x",
            `${e.clientX - rect.left}px`
          );

          e.currentTarget.style.setProperty(
            "--y",
            `${e.clientY - rect.top}px`
          );
        }}
        style={{
          scale,
          top: `calc(-5vh + ${i * 15}px)`,
        }}
        className="
          group
          relative
          overflow-hidden
          rounded-[1.8rem]
          border border-zinc-700
          bg-[radial-gradient(circle_at_50%_0%,#3a3a3a_0%,#1a1a1a_64%)]
          shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_4px_4px_rgba(0,0,0,0.25)]
          p-6
          transition-all
          duration-300
          hover:-translate-y-1
        "
      >
        {/* Cursor spotlight */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
          style={{
            background:
              "radial-gradient(250px circle at var(--x) var(--y), rgba(255,255,255,0.15), transparent 70%)",
          }}
        />

        <div className="relative z-10">
          <h2 className="mb-2 text-xl font-semibold text-white">
            {title}
          </h2>
          <p className="text-zinc-400">{description}</p>
        </div>
      </motion.div>
    </div>
  );
}
