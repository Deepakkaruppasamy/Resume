import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deepak K | Frontend Engineering Intern",
  description: "Portfolio and Resume of Deepak K, a Frontend Engineering Intern specializing in React.js and UI Development.",
  keywords: ["Deepak K", "Frontend Developer", "React.js", "UI Development", "Resume", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  );
}
