"use client";

import MotionSection from "./shared/MotionSection";

export default function Contact() {
  return (
    <MotionSection className="py-20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contact</h2>

      <div className="max-w-4xl text-muted">
        <p className="mb-4">Email: <a href="mailto:drishtidesai2005@gmail.com" className="text-text">drishtidesai2005@gmail.com</a></p>
        <p className="mb-4">GitHub: <a href="https://github.com/Drishti-Desai" target="_blank" rel="noreferrer" className="text-text">github.com/Drishti-Desai</a></p>

        <p className="mt-6">Let’s build something together.</p>
      </div>
    </MotionSection>
  );
}
