"use client";

import Main from "./pages/main";
import Beams from "@/components/Beams";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: `
      radial-gradient(circle at top, #252525 0%, #121212 60%, #080808 100%)
    `,
        }}
      >
        <div
          className="
      absolute inset-0
      bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)]
      bg-[size:24px_24px]
    "
        />
      </div>

      {/* Foreground Content */}
      <Main />
    </main>
  );
}
