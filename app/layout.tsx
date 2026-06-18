import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://phone-booth.vercel.app"),
  title: "Phone Booth · Phones, plans and repairs on Main St, Orange NJ",
  description:
    "Phone Booth on Main Street in Orange, NJ. New phones, prepaid plans, activations, bring your own device and fast phone repairs while you wait.",
  openGraph: {
    title: "Phone Booth · Orange NJ",
    description:
      "Get connected on Main Street. New phones, real plans and fast fixes, set up while you wait.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
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
    <html lang="en-US" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: armScript }} />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
