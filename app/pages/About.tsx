"use client"
import { Mail, MapPin, ExternalLink } from "lucide-react";
import GithubIcon from "@/components/GithubIcon"
import LinkedinIcon from "@/components/LinkedinIcon"
import TextType from "@/components/TextType"

export default function About() {
  return (
    <div className="flex flex-col justify-between h-full py-12 px-8 lg:px-12">
      {/* Top Section - Name & Role */}
      <div className="space-y-8">
        <div className="space-y-4">

          <TextType
            text={["Marc Lawrence L. Tamayo"]}
            typingSpeed={95}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            cursorBlinkDuration={0.5}
            className="text-lg lg:text-2xl md:text-xl font-bold tracking-tight text-white"
            loop={false}
          />
          <p className="text-base md:text-lg lg:text-xl text-teal-400 font-medium">
            Full Stack Developer           </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Manila, Philippines</span>
          </div>
        </div>

        {/* About */}
        <div className="space-y-3">
          <p className="text-muted-foreground leading-relaxed text-sm">
            I am a third-year Bachelor of Science in Computer Science student specializing in Software Engineering with a strong interest in becoming a full stack developer. I enjoy building both frontend and backend systems, with a focus on creating efficient, scalable, and user-friendly applications. My academic background has given me a solid foundation in programming, data structures, and software design principles, and I am continuously expanding my skills through projects and hands-on development experience.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Currently improving and learning backend development, devops and containers.
          </p>
        </div>

        {/* Skills */}
        <div className="space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "TypeScript", "React", "Node.js", "Python",
              "Supabase", "PostgreSQL"
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border hover:border-teal-500/40 hover:text-teal-300 transition-colors duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section - Social Links */}
      <div className="space-y-4 pt-8">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ieqisg"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-teal-400 hover:bg-secondary transition-all duration-200 cursor-pointer"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/marc-lawrence-tamayo-b44687405/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-teal-400 hover:bg-secondary transition-all duration-200 cursor-pointer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>

          <a
            href="mailto:marctamayo027@gmail.com"
            className="p-2 rounded-lg text-muted-foreground hover:text-teal-400 hover:bg-secondary transition-all duration-200 cursor-pointer"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300 transition-colors duration-200 cursor-pointer"
        >
          <span>Let&apos;s work together</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
