

import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sourceSans.variable}>
        <div style={{ fontFamily: "var(--font-source-sans)" }}>
          <Navbar />
            <main className='pt-36 md:pt-80 lg:pt-52 pb-16 px-8 w-full '>
              {children}  
            </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
