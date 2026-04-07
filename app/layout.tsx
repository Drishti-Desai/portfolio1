import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Drishti Abhay Desai — Portfolio",
  description: "Computer Engineering student focused on backend systems and data-driven applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col background-overlay">
        {/* subtle graph lines layer */}
        <div className="bg-graph" aria-hidden="true" />
        {/* dim layer to improve contrast */}
        <div className="bg-dim" aria-hidden="true" />

        <div className="site-content relative z-10 w-full">{children}</div>
      </body>
    </html>
  );
}
