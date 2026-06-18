"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import StackCard from "@/components/StackCard";
import { cards } from "@/lib/CardData";
import Card from "@/components/Card"




export default function Main() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container });

  return (
    <>
      <section className="flex flex-col md:flex-row">
        {/* Left Sticky */}
        <div className="w-full md:w-1/2">
          <div className="md:sticky md:top-0 md:h-screen flex items-center justify-center p-6">
            <h1 className="text-2xl font-bold text-white">Left Content</h1>
          </div>
        </div>

        {/* Right Scroll - Projects + cards + Experience */}
        <div className="w-full md:w-1/2 p-6 text-white relative">

          <div ref={container} className="relative">
            <div className="h-[30vh] flex items-end justify-center pb-6">
              <h2 className="text-3xl font-bold">Projects</h2>
            </div>

            {cards.map((card, i) => {
              const targetScale = 1 - (cards.length - i) * 0.05;
              return (
                <StackCard
                  key={i}
                  i={i}
                  title={card.title}
                  description={card.description}
                  progress={scrollYProgress}
                  range={[i * (1 / cards.length), 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </div>

          {/* Experience */}
          <div className="min-h-screen flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            {/* your experience content here */}
          </div>

        </div>
      </section>
    </>
  );
}
