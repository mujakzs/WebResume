import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";


const font = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});



export const metadata: Metadata = {
  title: "Andrian Gultiano - Computer Engineer",
  description: "Andrian Gultiano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
