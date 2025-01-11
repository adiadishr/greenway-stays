import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Nav from "@/components/navigation";
import LinksButton from "@/components/links-button";
import Footer from "@/components/footer";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});
const serif = Cormorant_Garamond({
  variable: "--font-serif",
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
});

export const metadata = {
  title: "Greenway Stays Hotel | Uxbridge, West London",
  description: "Greenway Stays Hotel | Uxbridge, West London",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(sans.variable, serif.variable, "antialiased selection:bg-primary selection:text-white")}
      >
        <Nav />
        {children}
        <LinksButton />
        <Footer />
      </body>
    </html>
  );
}
