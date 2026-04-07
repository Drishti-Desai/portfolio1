"use client";

import MotionSection from "./shared/MotionSection";

export default function About() {
  return (
    <MotionSection className="py-20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">About</h2>

      <p className="text-muted leading-relaxed max-w-3xl">
        Motivated third-year Computer Engineering student with strong
        problem-solving skills and experience building real-world applications.
        Passionate about clean, efficient, and user-focused systems.
      </p>
    </MotionSection>
  );
}