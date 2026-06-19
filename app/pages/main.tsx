"use client";

import About from "./About";
import Projects from "./Projects";
import AnimatedContent from "@/components/AnimatedContent";



export default function Main() {


  return (
    <>
      <div className="min-h-screen ">
        <section className="relative">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-[42%] xl:w-[38%] lg:h-screen lg:sticky lg:top-0 border-b lg:border-b-0 ">
              <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={3}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0}
              >
                <About />
              </AnimatedContent>
            </div>
            <div
              className="w-full h-px bg-zinc-700 md:w-px md:h-auto"
            />
            <div className="lg:w-[58%] xl:w-[62%] mb-6">
              <Projects />
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div>Tite</div>
      </div>
    </>
  );
}
