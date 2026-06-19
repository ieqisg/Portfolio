"use client"
import { AnimatedSection } from "@/components/AnimatedSection";
import { Mail, Download, MapPin, Calendar, Award, BookOpen } from "lucide-react";

import { timeline } from "@/datas/ExperienceData";



export default function Experience() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-16 xl:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Experience Timeline */}
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Experience
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Journey So Far
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              A timeline of my experience and key achievements in software engineering.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative mb-24">
          {/* Timeline Line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <AnimatedSection key={`${item.title}-${item.period}`} delay={index * 100}>
                <div className="relative flex gap-6">
                  {/* Timeline Dot */}
                  <div
                    className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center text-amber-400 bg-amber-500/10 border-amber-500/30"

                  >
                    <Award className="w-4 h-4" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                      <h4 className="text-base font-semibold text-white">
                        {item.title}
                      </h4>
                      <span className="text-xs text-muted-foreground font-medium">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-teal-400 mb-2">
                      {item.company}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Contact Section 
        <AnimatedSection>
          <div className="border-t border-border pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Get in Touch
                  </h2>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Let&apos;s Build Something
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I&apos;m always interested in discussing new opportunities,
                    challenging problems, or potential collaborations. Whether you have
                    a project in mind or just want to connect, feel free to reach out.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-teal-400" />
                  <span>San Francisco, CA — Open to remote</span>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400 text-sm font-medium hover:bg-teal-500/20 hover:border-teal-500/50 transition-all duration-200 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <a
                    href="mailto:alex@example.com"
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-teal-500/30 hover:bg-card/80 transition-all duration-200 cursor-pointer group"
                  >
                    <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white group-hover:text-teal-300 transition-colors">
                        alex@example.com
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Preferred contact method
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-teal-500/30 hover:bg-card/80 transition-all duration-200 cursor-pointer group"
                  >
                    <div className="p-2.5 rounded-lg bg-secondary text-muted-foreground group-hover:text-teal-400 transition-colors">
                      <GithubIcon />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white group-hover:text-teal-300 transition-colors">
                        github.com/alexchen
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Open source contributions
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-teal-500/30 hover:bg-card/80 transition-all duration-200 cursor-pointer group"
                  >
                    <div className="p-2.5 rounded-lg bg-secondary text-muted-foreground group-hover:text-teal-400 transition-colors">
                      <LinkedinIcon />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white group-hover:text-teal-300 transition-colors">
                        linkedin.com/in/alexchen
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Professional network
                      </p>
                    </div>
                  </a>


                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                © 2024 Alex Chen. Built with React & Tailwind CSS.
              </p>
              <p className="text-xs text-muted-foreground">
                Designed & developed with care.
              </p>
            </div>
          </div>
        </AnimatedSection>
        */}
      </div>
    </section>
  );
}
