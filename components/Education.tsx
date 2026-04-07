"use client";

import MotionSection from "./shared/MotionSection";

export default function Education() {
  return (
    <MotionSection className="py-20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Education</h2>

      <div className="max-w-4xl text-muted">
        <h3 className="text-lg font-medium">B.Tech Computer Engineering</h3>
        <p>Shah and Anchor Kutchhi Engineering College</p>
        <p className="mt-2">CGPA: 8.016</p>
      </div>
    </MotionSection>
  );
}
