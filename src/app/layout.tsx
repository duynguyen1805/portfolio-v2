import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
// import { ThemeProvider } from "next-themes";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Duy Nguyen | Software Developer",
  description:
    "Software developer specializing in JavaScript, TypeScript and Node.js.",
  // openGraph: {
  //   title: "Duy Nguyen | Software Developer",
  //   description:
  //     "Software developer specializing in JavaScript, TypeScript, and Node.js. Experienced in building scalable, high-performance applications.",
  //   url: "https://duynguyen-portfolio.vercel.app/",
  //   type: "website",
  //   images: [
  //     {
  //       url: "https://utkarsh-singhal.is-a.dev/opengraph-image.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "Duy Nguyen | Software Developer",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  // },
  authors: [
    { name: "Duy Nguyen", url: "https://duynguyen-portfolio.vercel.app/" },
  ],
  keywords: [
    "Duy Nguyen",
    "Software Developer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AWS",
    "GCP",
    "MongoDB",
    "Firebase",
    "Tailwind CSS",
    "Web Development",
    "Nest.js",
    "PostgreSQL",
    "Redis",
    "JavaScript",
    "Backend Development",
  ],
  creator: "Duy Nguyen",
  publisher: "Duy Nguyen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
      <body
        className={`${outfit.className} w-screen min-h-screen m-0 p-0 overflow-x-hidden`}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        > */}
          {children}
        {/* </ThemeProvider> */}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
