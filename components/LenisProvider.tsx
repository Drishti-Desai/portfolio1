"use client";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  // Lenis not installed — this is a harmless client wrapper.
  // If you install @studio-freight/lenis later, we can re-enable it here.
  return <>{children}</>;
}
