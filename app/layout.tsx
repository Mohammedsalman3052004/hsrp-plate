import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HSRP Number Plate Tamil Nadu - Government Approved IND Plates",
  description: "Order HSRP Number Plates anywhere in Tamil Nadu including Chennai, Vellore, Coimbatore, Madurai, Trichy, and more. Premium IND plates with fast delivery and official fitment service.",
  keywords: "HSRP number plate Vellore, HSRP plate Chennai, HSRP number plate Coimbatore, HSRP in Madurai, high security number plate Tamil Nadu, IND plate Vellore, car plate Chennai, bike plate Madurai, HSRP Trichy, IND plates Tamil Nadu",
  authors: [
    { name: "HSRP Team", url: "https://www.hsrpnumberplates.shop/" },
    { name: "Mohammed Salman A", url: "https://www.linkedin.com/in/mohammed--salman" },
  ],
  creator: "HSRP Number Plate",
  publisher: "HSRP Services India",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.hsrpnumberplates.shop/",
    siteName: "HSRP Number Plate",
    title: "HSRP Number Plate Tamil Nadu | Vellore, Chennai, Coimbatore & More",
    description: "Get your government-approved HSRP IND number plates delivered across Tamil Nadu. We serve major cities like Chennai, Vellore, Madurai, Trichy, Coimbatore, and more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HSRP IND Plate - Tamil Nadu Cities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HSRP_Official",
    creator: "@MohammedSalman",
    title: "HSRP Number Plate Tamil Nadu | Fast Delivery & Fitment",
    description: "Fast and secure HSRP Number Plates for Tamil Nadu cities. Official IND plates for cars and bikes with government compliance.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.hsrpnumberplates.shop/",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
