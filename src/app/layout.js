import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});
const cormorantGaramaond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
});

export const metadata = {
  title: "Greenway Stays",
  description: "Greenway Stays Hotel | Uxbridge, West London",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(inter.variable, cormorantGaramaond.variable, "antialiased")}
      >
        {children}
      </body>
    </html>
  );
}
