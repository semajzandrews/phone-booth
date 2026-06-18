import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://phone-booth.vercel.app"),
  title: "Phone Booth · A calmer way to get connected · Main St, Orange NJ",
  description:
    "Phone Booth on Main Street in Orange, NJ. Prepaid plans, new phones from Apple, Samsung and Motorola, activations, upgrades, bill pay, bring your own device, and accessories. A calmer neighborhood phone shop.",
  openGraph: {
    title: "Phone Booth · Orange NJ",
    description:
      "A calmer way to get connected. Phones, plans, activations and accessories on Main Street.",
    type: "website",
  },
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }] },
};

const armScript = `
(function(){
  try {
    var d = document.documentElement;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce && document.visibilityState !== 'hidden') { d.classList.add('reveal-armed'); }
    setTimeout(function(){ d.classList.add('reveal-done'); }, 2600);
  } catch(e){}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: armScript }} />
      </head>
      <body className="grain">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
