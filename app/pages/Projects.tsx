"use client"
import 'tailwindcss';
import 'tailwind-animations';
import StackCard from "@/components/StackCard";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { projectsData } from '@/datas/ProjectsData';
import DialogScrollableContent from '@/components/DialogParent';
export default function Projects() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container });



  return (
    <div ref={container} className="relative">
      <div className="flex items-end justify-center pt-16 pb-8 ">
        <h2 className="text-3xl font-bold text-white ">Projects</h2>
      </div>
      <div className="relative">
        {projectsData.map((card, i) => {
          const targetScale = 1 - (projectsData.length - i) * 0.05;

          return (
            <DialogScrollableContent
              key={i}
              title={card.title}
              content={card.content}
              websiteLink={card.websiteLink}
              githubRepo={card.githubRepo}
            >
              <StackCard
                i={i}
                title={card.title}
                description={card.description}
                stack={card.stack}
                progress={scrollYProgress}
                range={[i * (1 / projectsData.length), 1]}
                targetScale={targetScale}
              />
            </DialogScrollableContent>
          );
        })}

      </div>
    </div>
  )
}
