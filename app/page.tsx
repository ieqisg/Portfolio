"use client";

import Main from "./pages/main";
import Beams from "@/components/Beams";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      {/* Foreground Content */}
      <Main />
    </main>
  );
}
