"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

export default function StackCard({
  i,
  title,
  description,
  progress,
  range,
  targetScale,
  stack
}: {
  i: number;
  title: string;
  description: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  stack: string[];
}) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-[8vh] py-2 px-6">
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
        style={{ marginTop: i === 0 ? 0 : `${i * 8}px` }}
        className="
          group
          relative
          overflow-hidden
          rounded-[1.8rem]
          border border-zinc-700
          bg-[radial-gradient(circle_at_50%_0%,#3a3a3a_0%,#1a1a1a_64%)]
          shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_4px_4px_rgba(0,0,0,0.25)]
          p-6
          min-h-[40vh]
          flex flex-col
          justify-between
          mt-auto
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

        <div className="relative z-10 flex flex-col h-full">
          {/* TOP CONTENT */}
          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              {title}
            </h2>
            <p className="text-zinc-400 mb-4">{description}</p>
          </div>

          {/* BOTTOM STACK */}
          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
            {stack.map((skill) => (
              <span
                key={skill}
                className="
              px-2 py-0.5
              text-[10px] md:text-xs
              font-medium
              rounded-full
              bg-white/5
              border 
              border-teal-500/40
              text-teal-300
              transition-colors
          "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
