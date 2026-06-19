"use client"
import AnimatedSection from "@/components/AnimatedContent"
import { CertificationsData } from "@/datas/CertificationsData"
import { BadgeCheck } from "lucide-react"

export default function Certifications() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-16 xl:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Experience Timeline */}
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Certifications
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Credentials & Awards
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              A collection of certifications, awards, and achievements that demonstrate my commitment to continuous learning, technical growth, and academic excellence.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CertificationsData.map((cert, index) => (
            <AnimatedSection key={cert.name} delay={index * 100}>
              <div className={`p-5 rounded-xl border ${cert.color} transition-all duration-300 hover:scale-[1.02]`}>
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${cert.color}`}>
                    <BadgeCheck className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-white mb-1">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Issued {cert.date}</span>
                      <span className="text-xs font-mono text-muted-foreground/60">{cert.id}</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
