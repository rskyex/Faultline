import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0e1a",
};

export const metadata: Metadata = {
  title: "Faultline — Cross-Domain Strategic Infrastructure Mapping",
  description:
    "Faultline maps the dependencies, escalation pathways, and governance fractures that emerge across orbital, nuclear, and cyber infrastructures.",
  openGraph: {
    title: "Faultline — Cross-Domain Strategic Infrastructure Mapping",
    description:
      "Mapping the dependencies, escalation pathways, and governance fractures across orbital, nuclear, and cyber systems.",
    type: "website",
    siteName: "Faultline",
    images: [
      {
        url: "/images/faultline-og.png",
        width: 1200,
        height: 630,
        alt: "Faultline — Cross-Domain Strategic Infrastructure Mapping",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faultline — Cross-Domain Strategic Infrastructure Mapping",
    description:
      "Mapping the dependencies, escalation pathways, and governance fractures across orbital, nuclear, and cyber systems.",
    images: ["/images/faultline-og.png"],
  },
  metadataBase: new URL("https://faultline.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
