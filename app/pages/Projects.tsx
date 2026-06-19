"use client"
import StackCard from "@/components/StackCard";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { cards } from "@/lib/CardData";


export default function Projects() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container });
  return (
    <div ref={container} className="relative">
      <div className="flex items-end justify-center pt-16 pb-8 ">
        <h2 className="text-3xl font-bold text-white">Projects</h2>
      </div>
      <div className="relative">
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
    </div>
  )
}
