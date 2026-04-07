"use client";

import MotionSection from "./shared/MotionSection";

export default function Experience() {
  return (
    <MotionSection className="py-20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Experience</h2>

      <div className="border-l border-[#222] pl-6">
        <div className="mb-8">
          <h3 className="text-xl font-medium">Jio Platforms Limited</h3>
          <p className="text-muted">Software Engineering Intern — Jan 2026 – Apr 2026</p>

          <ul className="mt-4 text-muted list-disc ml-5 space-y-2">
            <li>Built backend services using Golang & FastAPI</li>
            <li>Designed secure REST APIs for billing systems</li>
            <li>Integrated PostgreSQL, MongoDB, MariaDB</li>
            <li>Built automation workflows using LangGraph and n8n</li>
            <li>Deployed services on GCP</li>
          </ul>
        </div>
      </div>
    </MotionSection>
  );
}