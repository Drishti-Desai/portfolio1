"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MotionSection from "./shared/MotionSection";

const projects = [
	{
		title: "AirGuard",
		slug: "airguard",
		desc: "AQI prediction system using Prophet, Pandas, Scikit-learn. Achieved 99% accuracy.",
		tech: ["Prophet", "Pandas", "Scikit-learn", "Python"],
	},
	{
		title: "ParkingSmartly",
		slug: "parkingsmartly",
		desc: "Smart parking system using Java & MySQL. Real-time slot tracking and role-based access.",
		tech: ["Java", "MySQL", "WebSockets"],
	},
];

const item = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
	return (
		<MotionSection className="py-20">
			<h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
				Projects
			</h2>

			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
				className="grid grid-cols-1 md:grid-cols-2 gap-8"
			>
				{projects.map((p, i) => (
					<motion.div
						key={i}
						variants={item}
						whileHover={{ scale: 1.04, y: -6 }}
						whileTap={{ scale: 0.99 }}
						className="relative bg-[#0f0f10] p-6 rounded-2xl border border-[#1b1b1b] transition-transform duration-300"
						style={{
							boxShadow:
								"0 6px 24px rgba(12,12,13,0.45), 0 2px 8px rgba(255,255,255,0.02)",
						}}
					>
						<Link href={`/projects/${p.slug}`} className="block">
							<h3 className="text-lg font-medium">{p.title}</h3>
							<p className="text-muted mt-2">{p.desc}</p>

							<div className="mt-4 flex flex-wrap gap-2">
								{p.tech.map((t) => (
									<span
										key={t}
										className="text-xs px-2 py-1 bg-[#0b0b0c] border border-[#1b1b1b] rounded-full text-muted"
									>
										{t}
									</span>
								))}
							</div>
						</Link>
					</motion.div>
				))}
			</motion.div>
		</MotionSection>
	);
}