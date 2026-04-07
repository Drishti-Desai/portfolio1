"use client";

import MotionSection from "./shared/MotionSection";

export default function Skills() {
  const langs = ["Python", "Java", "C++", "JavaScript", "SQL"];
  const tech = ["Node.js", "FastAPI", "LangChain", "n8n"];
  const tools = ["Git", "GitHub", "VS Code", "Eclipse", "NetBeans"];

  const Pill = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-block bg-[#0f0f10] text-muted px-3 py-1 rounded-full text-sm mr-2 mb-2 border border-[#1b1b1b]">
      {children}
    </span>
  );

  return (
    <MotionSection className="py-20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Skills</h2>

      <div className="max-w-4xl">
        <div className="mb-4">
          <h4 className="text-sm text-text mb-2">Languages</h4>
          <div>
            {langs.map((l) => (
              <Pill key={l}>{l}</Pill>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm text-text mb-2">Technologies</h4>
          <div>
            {tech.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm text-text mb-2">Tools</h4>
          <div>
            {tools.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
